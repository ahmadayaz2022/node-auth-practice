const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');


router.post('/signup', signup);
router.post('/signin', signin);


// router.get('/signup', auth,(req, res) =>{
// express.response
// });

// Everyone logged-in can see their role
router.get('/me', auth, (req, res) => {
res.json({
message: 'Your profile',
role: req.user.role
});
});


// Only admin
router.get('/admin', auth, role('admin'), (req, res) => {
res.json({ message: 'Welcome Admin' });
});


// Teacher & Admin
router.get('/teacher', auth, role('teacher', 'admin'), (req, res) => {
res.json({ message: 'Teacher content' });
});


// Student only
router.get('/student', auth, role('student'), (req, res) => {
res.json({ message: 'Student content' });
});


router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;


//This file defines API routes related to:
// Signup, Login ,Checking user role
// Role-based access (admin / teacher / student)