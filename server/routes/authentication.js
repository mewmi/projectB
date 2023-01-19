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
  console.log(req.body);

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

router.get('/changeProfile', routeGuard, async (req, res, next) => {
  const userFound = await User.findById(req.payload._id);
  console.log(userFound);

  res.status(200).json({ userFound });
});

router.post('/changeProfile', routeGuard, async (req, res, next) => {
  console.log(req.payload);
  const userFound = await User.findById(req.payload._id);
  const { email, password, name } = req.body;
  userFound.email = email;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  userFound.password = hashedPassword;
  userFound.name = name;
  await userFound.save();
  console.log(userFound);

  res.status(200).json({ userFound });
});

router.delete('/deleteProfile', routeGuard, async (req, res, next) => {
  const userFound = await User.findByIdAndDelete(req.payload._id);

  res.status(200).json({ message: 'User deleted' });
});

// Get routers

router.get('/verify', routeGuard, (req, res, next) => {
  const { _id, email, name } = req.payload;
  const user = { _id, email, name };
  res.json({ user });
});

module.exports = router;
