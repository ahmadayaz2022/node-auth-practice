const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// SIGNUP
exports.signup = async (req, res) => {
const { name, email, password, role } = req.body;
//Reads user data

const hashedPassword = await bcrypt.hash(password, 10);
//read password 10 is for security.

const user = await User.create({ //save user data in mangodb.
name,
email,
password: hashedPassword,
role
});

res.json({ message: 'User registered successfully' });
};//after saving data ye msg show hogayega.


// SIGNIN
exports.signin = async (req, res) => {
const { email, password } = req.body;
//signin ko hndle krta hi our e p daata read krta hi from body.

const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: 'User not found' });
//agar email correct nhi hi tu 400 error ayega our user not found msg display.
// email ko cheak krta hi mango db me.

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ message: 'Wrong password' });
//agar paswr crt nhi hi tu wrong pswrd dsply hoga.

const token = jwt.sign(
{ id: user._id, role: user.role },
process.env.JWT_SECRET,
{ expiresIn: '1d' }
);//token banta hi with user role and user id.


res.cookie('token', token, {
  httpOnly: true
});//Stores JWT in HTTP-only cookie

res.json({
  message: 'Login successful',
  role: user.role
});


};