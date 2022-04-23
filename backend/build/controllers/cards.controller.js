const cardsCtrl = {};

const Card = require("../models/cards");

const NextCardNumber = require("../models/cards");

const DestinationCard = require("../models/cards");

const {
  Transaction
} = require("../models/transactions");
/* const passport = require("passport");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth"); */


const helpersCtrl = require("../middlewares/auth");

cardsCtrl.createNew = async (req, res) => {
  const {
    number,
    user_id,
    user_name,
    balance,
    active,
    internal,
    cvv,
    date
  } = req.body;
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
  await card.save(err => {
    if (err) return res.status(500).send({
      message: `Error creating card: ${err}`
    });
    return res.json({
      message: `New card was created`
    });
  });
};

cardsCtrl.getCards = async (req, res) => {
  const cards = await Card.Card.find();
  res.json(cards);
};

cardsCtrl.getDestinationCards = async (req, res) => {
  const cards = await DestinationCard.DestinationCard.find();
  res.json(cards);
};

cardsCtrl.getCardsbyUser = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const filter = {
      "user_id": id
    };

    if (id) {
      const cards = await Card.Card.find(filter);
      if (cards.length > 0) res.json(cards);else res.json({
        error: "Cards not found for this user"
      });
    } else {
      res.json({
        error: "No name query found inside request"
      });
    }
  } catch (error) {
    throw error;
  }
};

cardsCtrl.getCardsById = async (req, res) => {
  const {
    id
  } = req.params;
  console.log(id);
  const cards = await Card.Card.find({
    _id: id
  });
  res.json(cards);
};

cardsCtrl.getDestinationCardsbyUser = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const filter = {
      "user_id": id
    };

    if (id) {
      const cards = await DestinationCard.DestinationCard.find(filter);
      if (cards.length > 0) res.json(cards);else res.json({
        error: "Destinations not found for this user"
      });
    } else {
      res.json({
        error: "No name query found inside request"
      });
    }
  } catch (error) {
    throw error;
  }
};

cardsCtrl.deleteCards = async (req, res) => {
  const cards = await Card.Card.deleteMany();
  res.json("Cards deleted");
};

cardsCtrl.deleteDestinationCards = async (req, res) => {
  const cards = await DestinationCard.DestinationCard.deleteMany();
  res.json("Destination Cards deleted");
};

cardsCtrl.deleteDestinationCardsbyId = async (req, res) => {
  const {
    id
  } = req.params;
  const filter = {
    "_id": id
  };
  const cards = await DestinationCard.DestinationCard.findByIdAndDelete(filter);
  res.json("Destination Card deleted");
}; //Este end-point es parte de la configuración inicial del sistema. Hay que llamarlo antes de su uso definitivo


cardsCtrl.firstCardNumber = async (req, res) => {
  await NextCardNumber.NextCardNumber.deleteMany();
  const {
    firstCardNumber
  } = req.body;
  const cardNumber = await NextCardNumber.NextCardNumber.find();
  const nextCardNumber = new NextCardNumber.NextCardNumber({
    nextCardNumber: firstCardNumber
  });
  await nextCardNumber.save(err => {
    if (err) return res.status(500).send({
      message: `Error creating First Card Number: ${err}`
    });
    return res.json({
      message: "First Card Number Ready"
    });
  });
};

cardsCtrl.getLastCardNumber = async (req, res) => {
  const lastcardnumber = await NextCardNumber.NextCardNumber.find();
  res.json(lastcardnumber);
};

cardsCtrl.lastCardNumber = async (req, res) => {
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
  const result = NextCardNumber.NextCardNumber.findOneAndUpdate(filter, {
    nextCardNumber: cardNumber.toString()
  }, (err, {}) => {
    if (err) return res.status(500).send({
      message: `Error generating new card number: ${err}`
    });
    res.json(newCardNumber);
  });
};

cardsCtrl.createNew = async (req, res) => {
  const {
    number,
    user_id,
    user_name,
    balance,
    active,
    internal,
    cvv,
    date
  } = req.body;
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
  await card.save(err => {
    if (err) return res.status(500).send({
      message: `Error creating card: ${err}`
    });
    return res.json({
      message: `New card was created`
    });
  });
};

cardsCtrl.createNewDestinationCard = async (req, res) => {
  const {
    user_id,
    card_number,
    destination_name,
    internal,
    alias
  } = req.body;
  const destinationCard = new DestinationCard.DestinationCard({
    user_id,
    card_number,
    destination_name,
    internal,
    alias
  });
  await destinationCard.save(err => {
    if (err) return res.status(500).send({
      message: `Error creating destination card: ${err}`
    });
    return res.json({
      message: `New destination was created`
    });
  });
};

cardsCtrl.addMoneytoCard = async (req, res) => {
  const {
    card_id,
    amount
  } = req.body;
  const filter = {
    _id: card_id
  };
  const card = await Card.Card.find(filter);
  let total = 0;

  if (card) {
    total = card[0].balance + amount;
  } else {}

  const card_data = {
    origin: "0",
    destiny: card_id,
    destiny_name: "TO ME",
    amount: amount,
    description: "External deposit"
  };
  const transaction = new Transaction(card_data);
  await transaction.save(err => {
    if (err) return res.status(500).send({
      message: `Error creating transaction: ${err}`
    });
  });
  const respuesta = await Card.Card.findOneAndUpdate(filter, {
    $inc: {
      balance: amount
    }
  });
  res.json({
    message: ["Card balance updated"]
  });
};

module.exports = cardsCtrl;