const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name : {
    type : String , 
    required : [true , 'Please enter a name '],
  },
  prenom : {
    type : String , 
    required : [true , 'Please enter a prenom '],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  }, 
  role : {
    type : Number , // true for admin false for a simple user 
    required : [true , 'Please select a role '],
  },
  deleted :{
    type : Boolean ,   
    required : [true , 'Please select  '],
  },
  occupation: {
    type: String,
    required : [true , 'Please select  '],
  }, 
  phone: {
    type: String,
    required : [true , 'Please select  '],
  }
});


// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;