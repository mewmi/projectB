'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  link: { type: String, required: true },
  image: { type: String },
  author: { type: String, required: true }
});

const Song = mongoose.model('Song', schema);

module.exports = Song;
