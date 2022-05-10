const User = require("../models/User");
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = '';

  // incorrect email
  if (err.message === 'incorrect email') {
    errors = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors = properties.message;
    });
  }

  return errors;
}
function sendMail(resiver , subject , text ){
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure : true , 
    auth: {
      user: 'esiSwitch@gmail.com',
      pass: 'esiswitch2cp'
    }
  });
  var mailOptions = {
    from: 'esiSwitch@gmail.com',
    to: resiver,
    subject: subject,
    text: text
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (email,id, isAdmin) => {
  return jwt.sign({email:email, _id : id , isAdmin : isAdmin  }, 'esiSwitch', {
    expiresIn: maxAge
  });
};



module.exports.signup_post = async (req, res) => {
  const deleted=0 ;
  const { name,prenom, email, role, phone, occupation,password } = req.body;
  try {
    const user = await User.create({ name, email,prenom, password,role,deleted,phone,occupation});
    
    const token = createToken(user.email,user._id,user.role);
    sendMail(
      email ,
      "Bienvenue dans EsiSwitch",
      "Bonjour, \nMaintenant vous pouvez acceder a notre espace EsiSwitch :\nemail: "+email+"\nmot de passe: "+password
    )
  //  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json();
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const deleted = user.deleted ; 
    if (deleted) throw 'ce compte est desactive' ;
    const token = createToken(user.email,user._id,user.role);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000,secure:false });
    res.status(200).json({ token:token });
  } 
  catch (err) {
    if (err == 'ce compte est desactive') {
      const errors = "ce compte est desactive"
      res.status(400).send( errors );
    } else {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
  }
}

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.send('success')
}