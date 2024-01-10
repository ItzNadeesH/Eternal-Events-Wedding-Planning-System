const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const createToken = (_id) => {
  return jwt.sign({ _id }, config.get('secretToken'), { expiresIn: '1d' });
};

// signup user
const signupUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const user = await User.signup(firstname, lastname, email, password);

    // assign a token
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser };
