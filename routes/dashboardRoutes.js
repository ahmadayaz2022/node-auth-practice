const express = require('express');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  // Fetch data from multiple APIs
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json());
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(r => r.json());
  const photos = await fetch('https://jsonplaceholder.typicode.com/photos').then(r => r.json());
  const albums = await fetch('https://jsonplaceholder.typicode.com/albums').then(r => r.json());
  const comments = await fetch('https://jsonplaceholder.typicode.com/comments').then(r => r.json());
  
  //rea for data from given urls and get inthe from json and convert tjs object.
  // Render dashboard with  data for simplicity.
  res.render('dashboard', { //express cheak in view folder for dashboard ejs
    role: req.user.role,    //get user role from jwt middleware. 
    posts: posts.slice(), 
    users: users.slice(),
    todos: todos.slice(),
    photos: photos.slice(),
    albums: albums.slice(),
    comments: comments.slice(),
    //sends api data to the frontend,  slice create copy of array.
  });
});

module.exports = router;
