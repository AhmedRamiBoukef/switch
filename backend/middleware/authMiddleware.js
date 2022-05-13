const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
  const token = req.headers['x-access-token'];
  console.log(token)
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'esiSwitch', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, 'esiSwitch', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken._id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const isAdmin = (req,res,next)=>{
  const token = req.headers['x-access-token']

  if (token) {
    jwt.verify(token, 'esiSwitch', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        if(decodedToken.isAdmin!==0)
        {
          res.status(403).send({
            role : decodedToken.isAdmin , 
            msg : 'Vous ne pouvez pas acceder '
          })
        }
        else{
          next();

        }
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
  /*if (!req.User.role) {
    return res.status(403).send('You are not admin ');
    
  } else {
    next();
  }*/

}

const isGestionnaire = (req,res,next)=>{
  const token = req.headers['x-access-token']

  if (token) {
    jwt.verify(token, 'esiSwitch', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        if(decodedToken.isAdmin!= 1 && decodedToken.isAdmin!= 0)
        {
          res.status(403).send({
            role : decodedToken.isAdmin , 
            msg : 'Vous ne pouvez pas acceder '
          })
           
        }
        else{
          next();
        }
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
  /*if (!req.User.role) {
    return res.status(403).send('You are not admin ');
    
  } else {
    next();
  }*/

}


module.exports = { requireAuth, checkUser , isAdmin, isGestionnaire};
