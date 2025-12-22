const express = require('express');//handle get post etc
const User = require('../models/User');//used to find user in mango DB.
const bcrypt = require('bcryptjs'); //comapre enter password with psrd in db
const jwt = require('jsonwebtoken');//jwt banta hi after login succfl.
const { signup } = require('../controllers/authController');

const router = express.Router(); //Creates a router to group login related routes.

//signup
router.get('/signup',(req, res) =>{
  res.render('signup');
});
router.post('/signup',(req, res)=>{
  const {name, email, password, role}= req.body;
  

//jwt token ko browser me save krta hi automatically.
  res.redirect('/login');
});



// SHOW LOGIN FORM
router.get('/login', (req, res) => {
  res.render('login');
}); //Loads views/login.ejs and show login form to user in browser

// HANDLE LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.send('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.send('Wrong password');

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  ); // create jwt token containing user id and user role.

  res.cookie('token', token, { httpOnly: true }); //jwt token ko browser me save krta hi automatically.
  res.redirect('/dashboard');// le k jatha hi dashboard ko.
});






module.exports = router;



// User opens /login
// Login form appears
// User submits email & password
// Backend checks user & password
// JWT token is created
// Token saved in cookie
// User redirected to dashboard
// Middleware verifies token
// Dashboard loads
