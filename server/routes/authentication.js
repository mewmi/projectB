'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { routeGuard } = require('../middleware/routeguard');

const saltRounds = 10;

// Post routers
router.post('/signup', (req, res, next) => {
  const { email, password, name } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.status(400).json({ message: 'This user already exists' });
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      return User.create({ email, password: hashedPassword, name });
    })
    .then((createdUser) => {
      const { email, name, _id } = createdUser;
      const user = { email, name, _id };
      const authToken = jwt.sign(user, process.env.TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: '6h'
      });
      res.json({ user: user, authToken });
    })
    .catch((err) => next(err));
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(401).json({ message: 'invalid credentials.' });
      }
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
      if (passwordCorrect) {
        const { _id, email, name } = foundUser;
        const user = { _id, email, name };
        const authToken = jwt.sign(user, process.env.TOKEN_SECRET, {
          algorithm: 'HS256',
          expiresIn: '6h'
        });
        res.json({ user, authToken: authToken });
      } else {
        res.json(401).json({ message: 'invalid credentials.' });
      }
    })
    .catch((err) => next(err));
});

// Get routers

router.get('/verify', routeGuard, (req, res, next) => {
  const { _id, email, name } = req.payload;
  const user = { _id, email, name };
  res.json({ user });
});

module.exports = router;
