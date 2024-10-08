const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const mailRoutes = require('./api/routes/mail');
const codeRoutes = require('./api/routes/code');
const promocodeRoutes = require('./api/routes/promocode');
const productRoutes = require('./api/routes/product');

mongoose.connect(
  'mongodb+srv://cryptmine:cryptadmin461@h5.nntpg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(morgan('dev'));
app.use(
  '/images/productImagesTelegram/',
  express.static('images/productImagesTelegram')
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/mails', mailRoutes);
app.use('/code', codeRoutes);
app.use('/promocode', promocodeRoutes);
app.use('/product', productRoutes);

module.exports = app;
