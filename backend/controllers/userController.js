const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const createToken = (_id) => {
  return jwt.sign({ _id }, config.get('secretToken'), { expiresIn: '1d' });
};

// signup user
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);

    // assign a token
    const token = createToken(user._id);

    res.status(200).json({ user, token, msg: 'Registered' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // assign a token
    const token = createToken(user._id);

    res.status(200).json({ email, token, msg: 'Logged in' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
