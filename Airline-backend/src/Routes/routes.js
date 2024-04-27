const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.post('/signup', async (req, res) => {
    try {
      const { firstName, lastName, email, username, password } = req.body.formData; 
      const newUser = new User({ firstName, lastName, email, username, password });
      await newUser.save();
      res.status(200).json({ StatusCode:200 ,message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
