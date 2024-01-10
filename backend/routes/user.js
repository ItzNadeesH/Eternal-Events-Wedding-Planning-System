const express = require('express');

// controller functions
const { signupUser } = require('../controllers/userController');

const router = express.Router();

// signup route
router.post('/signup', signupUser);

module.exports = router;
