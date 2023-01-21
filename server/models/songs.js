'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    link: { type: String, required: true },
    image: { type: String },
    author: {
      type: String,
      trim: true,
      required: true
    }
    // author: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User'
    // }
  },
  { timestamps: { createdAt: 'created_at' } }
);

const Song = mongoose.model('Song', schema);

module.exports = Song;
