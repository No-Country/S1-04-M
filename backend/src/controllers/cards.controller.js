const cardsCtrl = {};
const Card = require("../models/cards");
const NextCardNumber = require("../models/cards");

const passport = require("passport");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

cardsCtrl.getCards = async (req, res) => {
  const cards = await Card.Card.find();
  res.json(cards);
};

cardsCtrl.deleteCards = async (req, res) => {
  const cards = await Card.Card.deleteMany();
  res.json("Cards deleted");
};

//Este end-point es parte de la configuración inicial del sistema. Hay que llamarlo antes de su uso definitivo

cardsCtrl.firstCardNumber = async (req, res) => {
  await NextCardNumber.deleteMany();
  const { firstCardNumber } = req.body;
  const cardNumber = await NextCardNumber.find();

  const nextCardNumber = new NextCardNumber({
    nextCardNumber: firstCardNumber,
  });

  await nextCardNumber.save((err) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error creating First Card Number: ${err}` });

    return res.json({ message: "First Card Number Ready" });
  });
};

cardsCtrl.lastCardNumber = async (req, res) => {
  let nextCardNumber = await NextCardNumber.find();
  let cardNumber = Number(nextCardNumber[0].nextCardNumber);
  const cardNumberid = nextCardNumber[0]._id;

  cardNumber++;
  const last = (cardNumber % 10000).toString().split("");
  while (last.length < 4) last.unshift("0");
  const prev = Math.floor(cardNumber / 10000)
    .toString()
    .split("");
  while (prev.length < 4) prev.unshift("0");
  const prev2 = Math.floor(cardNumber / 10000)
    .toString()
    .split("");
  while (prev2.length < 4) prev2.unshift("0");
  const prev3 = Math.floor(cardNumber / 10000)
    .toString()
    .split("");
  while (prev3.length < 4) prev3.unshift("0");
  const newCardNumber =
    prev.join("") +
    " " +
    prev2.join("") +
    " " +
    prev3.join("") +
    " " +
    last.join("");

  const filter = { _id: cardNumberid };
  const result = NextCardNumber.findOneAndUpdate(
    filter,
    { nextCardNumber: cardNumber.toString() },
    (err, {}) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error generating new card number: ${err}` });

      res.json(newCardNumber);
    }
  );
};

cardsCtrl.createNew = async (req, res) => {
  const { number, user_id, user_name, balance, active, internal, cvv, date } =
    req.body;

  const card = new Card.Card({
    number,
    user_id,
    user_name,
    balance,
    active,
    internal,
    cvv,
    date,
  });

  await card.save((err) => {
    if (err)
      return res.status(500).send({ message: `Error creating card: ${err}` });

    return res.json({ message: `New card was created` });
  });
};

module.exports = cardsCtrl;
