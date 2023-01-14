'use strict';
const Song = require('../models/songs');
const express = require('express');
//const { routeGuard } = require('./../middleware/routeguard');

const router = new express.Router();

//Get router
router.get('/', (req, res, next) => {
  Song.find()
    .then((songs) => res.json({ songs }))
    .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Song.findById(id)
    .then((song) => res.json({ song }))
    .catch((err) => next(err));
});

//Post router
router.post('/', (req, res, next) => {
  const { name, link, image, author } = req.body;
  Song.create({ name, link, image, author })
    .then((song) => res.json({ song }))
    .catch((err) => next(err));
});

//Patch router

router.patch('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, link, image, author } = req.body;
  Song.findByIdAndUpdate(id, { name, link, image, author }, { new: true })
    .then((song) => res.json({ song }))
    .catch((err) => next(err));
});
//Delete router

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Song.findByIdAndDelete(id)
    .then(() => res.json({ success: true }))
    .catch((err) => next(err));
});

module.exports = router;
