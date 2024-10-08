const mongoose = require('mongoose');

const codeSchema = mongoose.Schema({
  code: String,
  date: {
    type: String,
    default: null,
  },
  used: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Code', codeSchema);
