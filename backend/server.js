const express = require('express');
const connectDB = require('./config/db');

// express app
const app = express();

// Connect Database
connectDB();

// routes
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the app' });
});

// listen for requests
app.listen(4000, () => {
  console.log('listing on port 4000');
});
