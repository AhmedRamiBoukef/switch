const express = require('express')
const router = require('./api/routers');
const mongoose = require('mongoose');
const _ = require('lodash');
const cors = require('cors');
const Switch = require('./models/switch');
const Port = require('./models/port');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser, isAdmin } = require('./middleware/authMiddleware');
const User = require('./models/User');
const Local = require('./models/local');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pickBy, identity } = require('lodash')
const { signup_post } = require('./controllers/authController');
const { use } = require('./routes/authRoutes');
const helmet = require("helmet");

const dbURI = 'mongodb+srv://EsiSwitch:esi1234@cluster0.h1vs7.mongodb.net/Data?retryWrites=true'

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected')
        app.listen(process.env.PORT || 5000)
    })
    .catch(err => console.log(err));

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(helmet());
app.use(cookieParser());
app.use('/api',router)

app.get('/vlans',requireAuth, async (req, res) => {
  let vlans = await Port.find()
  const unique = [...new Set(vlans.map(item => item.ip_vlan))]
  let obj
  let table = []
  for (let index = 0; index < unique.length; index++) {
    let a =await Port.find({ip_vlan:unique[index]}).select('nom_switch')
    let result = [...new Set(a.map(item => item.nom_switch))]

    obj = {vlan:unique[index],count:result.length}
    table.push(obj)
    
  }
  res.send(table)
})

app.get('/type',requireAuth, async (req, res) => {
  let vlans = await Port.find()
  const unique = [...new Set(vlans.map(item => item.type))]
  console.log(unique);
  let obj
  let table = []
  for (let index = 0; index < unique.length; index++) {
    let a =await Port.find({type:unique[index]}).count()

    obj = {vlan:unique[index],count:a}
    table.push(obj)
    
  }
  res.send(table)
})



app.get('*', checkUser);
app.post('/createuser',signup_post);
app.get('/getusers',requireAuth,isAdmin, async (req,res)=>{
  const users = await User.find().select(["-password"]); 
  res.send(users)
})

app.get('/local',requireAuth, async (req, res) => {
  const local =await Local.find()
  console.log(local);
  res.send(local)
})

//create modifier mofier
// getbyid
app.post("/modifieradmin",requireAuth,isAdmin, async(req ,res) => {
  const dataUser = pickBy({
    prenom: req.body.prenom,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    occupation: req.body.occupation
},identity)
dataUser.deleted = req.body.deleted
dataUser.role = req.body.role
  const user = await User.updateOne({_id: req.body._id},dataUser)
  console.log(user);
  res.send("success")

})

// table de salles 
// utilisateur


app.get('/getbyid',requireAuth, (req ,res) => {
  const user = User.find({_id:req.body._id})
  res.send(user)
})

app.get('/getCurrentUser',requireAuth,(req,res)=>{
  const token = req.headers['x-access-token']
  if (token) {
    jwt.verify(token, 'esiSwitch', async (err, decodedToken) => {
      if (err) {
       res.send(null);
      } else {
        let user = await User.findById(decodedToken._id).select(["-password"]);
        res.send(user);
      }
    });
  }
  else
  {
    res.send(null) 

  }
})
app.post('/delete',requireAuth,isAdmin,async (req,res)=>{
  const user =  await User.deleteOne({_id:req.body._id})
  res.send(user)
}
)
app.post('/active',requireAuth,isAdmin,async (req,res)=>{
  const user =  await User.updateOne({_id:req.body._id},{
    deleted : false
  })
  res.send(user)
})
app.post('/modifierPassword',requireAuth, async(req,res)=>{
  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash(req.body.password, salt);
  const user = await User.updateOne({_id : req.body._id },{
    password : password
  })
  res.send(user)
})
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

app.post('/forgetPassword',async (req,res)=>
{
 
  const user = await User.findOne({email : req.body.email})
  if(!user)
  {
    res.send({msg : "ce email n'existe pas "})
  } else {
  const crypto = require('crypto')

const generatePassword = (
  length = 10,
  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
  Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')

const password1 = generatePassword() ; 
const salt = await bcrypt.genSalt(); 
  const password = await bcrypt.hash(password1, salt);
  const user1 = await User.updateOne({email : user.email },{
    password : password
  })
  sendMail(
   req.body.email ,
   "Mot de passe oublié ",
   "votre nouvelle mot de passe est :"+password1 
  )
  res.send(user1)
  }

});
module.exports = sendMail ; 
app.use(authRoutes);
