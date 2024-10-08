const express = require('express');
const router = express.Router();
const cors = require('cors');
const Promocode = require('../models/promocode');

router.post('/send', cors(), (req, res, next) => {
  if (
    !(
      req.body.hasOwnProperty('promocode') &&
      typeof req.body.promocode === 'string'
    )
  ) {
    return res.status(503).send({ message: 'Invalid request' });
  }
  Promocode.findOne(
    { promocode: req.body.promocode },
    function (err, promocode) {
      if (promocode === null) {
        return res.status(400).send({ message: 'Invalid promocode' });
      }
      if (promocode.used) {
        return res.status(401).send({
          message: 'Promocode was already used',
        });
      }
      promocode.used = true;
      promocode.date = req.body.date;
      promocode.save();
      return res.status(200).send({
        message: 'Promocode was successfuly activated!',
        discount: promocode.discount,
      });
    }
  );
});

module.exports = router;
