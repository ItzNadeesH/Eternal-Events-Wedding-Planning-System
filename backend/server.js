const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');

// Connect Database
connectDB();

// express app
const app = express();

// Enable CORS for all routes
app.use(cors());

// middleware
app.use(express.json());

// routes
app.use('/', userRoutes);

// listen for requests
app.listen(4000, () => {
  console.log('listing on port 4000');
});
