const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { signup } = require('./controllers/authController');
require('dotenv').config();


const app = express();

// VIEW ENGINE
app.set('view engine', 'ejs');


// BODY PARSERS

app.use(express.urlencoded({ extended: true })); //read data from html fils (browser login form)
//Without this → email & password will be undefined.

app.use(express.json()); //read data sent from postman or api or frontend.
app.use(cookieParser()); // ✅ MUST be before routes // read cokies


// ROUTES
app.use('/', require('./routes/browserAuthRoutes')); // ✅ LOGIN
app.use('/dashboard', require('./routes/dashboardRoutes'));
app.use('/api', require('./routes/authRoutes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
