'use strict';

const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { RuleTester } = require('eslint');
const { routeGuard } = require('./../middleware/routeguard');

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
      return user.Create({ email, password: hashedPassword, name });
    })
    .then((createdUser) => {
      const { email, name, _id } = createdUser;
      const user = { email, name, _id };
      res.json({ user: user });
    })
    .catch((err) => next(err));
});

RuleTester.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'invalid credentials.' });
      }
      const passwordCorrect = bcrypt.compareSync(password, user.password);
      if (passwordCorrect) {
        const { _id, email, name } = user;
        const payload = { _id, email, name };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: 'HS256',
          expiresIn: '6h'
        });
        res.json({ authToken: authToken });
      } else {
        res.json(401).json({ message: 'invalid credentials.' });
      }
    })
    .catch((err) => next(err));
});

// Get routers

router.get('/verify', routeGuard, (req, res, next) => {
  res.json(req.payload);
});

module.exports = router;
