const Card = require("../models/cards");

const NextCardNumber = require("../models/cards");

const card_Generator = async function () {
  let nextCardNumber = await NextCardNumber.NextCardNumber.find();
  let cardNumber = Number(nextCardNumber[0].nextCardNumber);
  const cardNumberid = nextCardNumber[0]._id;
  cardNumber++;
  cardNumberString = cardNumber.toString();
  const newNumber = cardNumberString.padStart(16, "0");
  const last = newNumber.substring(12, 16);
  const prev = newNumber.substring(8, 12);
  const prev2 = newNumber.substring(4, 8);
  const prev3 = newNumber.substring(0, 4);
  const newCardNumber = prev3 + " " + prev2 + " " + prev + " " + last;
  const filter = {
    _id: cardNumberid
  };
  const update = NextCardNumber.NextCardNumber.findOneAndUpdate(filter, {
    nextCardNumber: cardNumber.toString()
  }, (err, {}) => {
    if (err) return res.status(500).send({
      message: `Error generating new card number: ${err}`
    });
  });
  return newCardNumber;
};

const newCard = async function (number, user_id, user_name, balance, active, internal, cvv, date) {
  const card = new Card.Card({
    number,
    user_id,
    user_name,
    balance,
    active,
    internal,
    cvv,
    date
  });
  const result = await card.save();
  return result._id;
};

module.exports = {
  card_Generator,
  newCard
};