
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user');
const Candidate = require('../Models/candidate');
const Admin = require('../Models/admin');
const Recruter = require('../Models/recruter');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, age, phone, email, address, user_name, password, diplome, experience, company, position, role } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    let user;
    if (role === 'admin') {
      user = new Admin({ name, age, phone, email, address, user_name, password: hashedPassword });
    } else if (role === 'candidate') {
      user = new Candidate({ name, age, phone, email, address, diplome, experience, user_name, password: hashedPassword });
    } else if (role === 'recruter') {
      user = new Recruter({ name, age, phone, email, address, company, position, user_name, password: hashedPassword });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }

    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.json({ message: 'Logged in successfully', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


  

module.exports = router;