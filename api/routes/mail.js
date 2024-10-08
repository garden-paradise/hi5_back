const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');

const transport = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  auth: {
    user: 'ceo@hi5russia.com',
    pass: '37901973Aa',
  },
});

router.post('/send_mail', cors(), async (req, res) => {
  res.status(200).json({
    message: 'Mail delivered!',
  });
  let {
    myTitle,
    myName,
    myEmail,
    myNumber,
    myMessage,
    myAddres,
    myBasket,
    myCheck,
  } = req.body;

  await transport.sendMail({
    from: 'ceo@hi5russia.com',
    to: 'ceo@hi5russia.com',
    subject: `${myTitle}`,
    html: `
    <div style="
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 30px #056582;
    background: linear-gradient(91.18deg, #1c85a6 1.39%, #6c5ecf 99.14%);
    border-radius: 10px;
    width: 500px;
    margin: 0 auto;
    padding: 40px;
    font-family: sans-serif;
    ">

    <div style="
    text-align: center;
    font-weight: 600;
    color: white;
    margin-bottom: 40px;
    font-size: 20px;
    ">${myTitle}</div>

    ${
      myName
        ? `<div style="
    margin-bottom: 10px;
    ">
      <span style="
      color: rgba(255, 190, 0, 1);
      ">&#10084; </span>
      <span style="
      color: white;
      font-size: 16px;
      font-weight: 600;
      font-style: italic;
      ">имя :</span>
      <span style="
      font-weight: 700;
      margin-left: 50px;
      font-size: 18px;
      ">${myName}</span>
    </div>`
        : ``
    }

    ${
      myEmail
        ? `<div style="
    margin-bottom: 10px;
    ">
    <span style="
    color: rgba(255, 190, 0, 1);
    ">&#128386; </span>
    <span style="
    color: white;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    ">email :</span>
    <span style="
    font-weight: 700;
    margin-left: 50px;
    font-size: 18px;
    ">${myEmail}</span>
    </div>`
        : ``
    }

    ${
      myNumber
        ? `  <div style="
    margin-bottom: 10px;
    ">
    <span style="
    color: rgba(255, 190, 0, 1);
    ">&#9742; </span>
    <span style="
    color: white;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    ">номер :</span>
    <span style="
    font-weight: 700;
    margin-left: 50px;
    font-size: 18px;
    ">${myNumber}</span>
    </div>`
        : ``
    }

    ${
      myMessage
        ? `<div style="
    margin-bottom: 10px;
    ">
    <span style="
    color: rgba(255, 190, 0, 1);
    ">&#10002; </span>
    <span style="
    color: white;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    ">сообщение :</span>
    <span style="
    font-weight: 700;
    margin-left: 50px;
    font-size: 18px;
    ">${myMessage}</span>
  </div>`
        : ``
    }

    ${
      myAddres
        ? `<div style="
    margin-bottom: 10px;
    ">
    <span style="
    color: rgba(255, 190, 0, 1);
    ">&#10033; </span>
    <span style="
    color: white;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    ">адрес :</span>
    <span style="
    font-weight: 700;
    margin-left: 50px;
    font-size: 18px;
    ">${myAddres}</span>
  </div>`
        : ``
    }

    ${
      myBasket
        ? `<div style="
    margin-bottom: 10px;
    ">
    <span style="
    color: rgba(255, 190, 0, 1);
    ">&#9733; </span>
    <span style="
    color: white;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    ">заказ :</span>
    <span style="
    font-weight: 700;
    margin-left: 50px;
    font-size: 18px;
    ">${myBasket}</span>
  </div>`
        : ``
    }

    ${
      myCheck
        ? `<div style="
    margin-bottom: 10px;
    ">
    <span style="
    color: rgba(255, 190, 0, 1);
    ">&#8381; </span>
    <span style="
    color: white;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    ">чек :</span>
    <span style="
    font-weight: 700;
    margin-left: 50px;
    font-size: 18px;
    ">${myCheck} руб.</span>
  </div>`
        : ``
    }

  </div>
    `,
  });
});

module.exports = router;
