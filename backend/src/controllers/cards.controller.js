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
  
  await NextCardNumber.NextCardNumber.deleteMany();


  const { firstCardNumber } = req.body;
  const cardNumber = await NextCardNumber.NextCardNumber.find();

  const nextCardNumber = new NextCardNumber.NextCardNumber({
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
  let nextCardNumber = await NextCardNumber.NextCardNumber.find();
  let cardNumber = Number(nextCardNumber[0].nextCardNumber);
  const cardNumberid = nextCardNumber[0]._id;

  cardNumber++;
  cardNumberString = cardNumber.toString();
  const newNumber = cardNumberString.padStart(16, "0"); 
  
  const last =  newNumber.substring(12,16);
  const prev =  newNumber.substring(8,12);
  const prev2 = newNumber.substring(4,8);
  const prev3 = newNumber.substring(0,4);
  

  const newCardNumber =
    prev3 +
    " " +
    prev2 +
    " " +
    prev +
    " " +
    last;

  const filter = { _id: cardNumberid };
  const result = NextCardNumber.NextCardNumber.findOneAndUpdate(
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
