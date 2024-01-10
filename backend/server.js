const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');

// Connect Database
connectDB();

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/', userRoutes);

// listen for requests
app.listen(4000, () => {
  console.log('listing on port 4000');
});
