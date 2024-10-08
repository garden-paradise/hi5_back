const mongoose = require('mongoose');

const promoCodeSchema = mongoose.Schema({
  promocode: String,
  date: {
    type: String,
    default: null,
  },
  used: {
    type: Boolean,
    default: false,
  },
  discount: String,
});

module.exports = mongoose.model('PromoCode', promoCodeSchema);
