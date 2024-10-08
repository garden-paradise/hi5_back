const express = require('express');
const router = express.Router();
const cors = require('cors');
const Code = require('../models/code');

router.post('/send', cors(), (req, res, next) => {
  if (!(req.body.hasOwnProperty('code') && typeof req.body.code === 'string')) {
    return res.status(503).send({ message: 'Invalid request' });
  }
  Code.findOne({ code: req.body.code }, function (err, code) {
    if (code === null) {
      return res.status(400).send({ message: 'Invalid code' });
    }
    if (code.used) {
      return res.status(401).send({ message: 'Code was already used' });
    }
    code.used = true;
    code.date = req.body.date;
    code.save();
    return res.status(200).send({ message: 'Code was successfuly activated!' });
  });
});

module.exports = router;
