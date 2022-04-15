const transactionsCtrl = {};
const { Transaction } = require("../models/transactions");
const Card = require("../models/cards");

transactionsCtrl.createNewTransaction = async (req, res) => {
  const { origin, destiny, destiny_name, amount, description } = req.body;

  const filter_origin = { _id: origin };
  const filter_destiny = { _id: destiny };

  const card = await Card.Card.find(filter_origin);

  let total = 0;

  if (card) {
    if (card[0].balance >= amount) {
      const transaction = new Transaction({
        origin,
        destiny,
        destiny_name,
        amount,
        description,
      });

      await transaction.save((err) => {
        if (err)
          return res
            .status(500)
            .send({ message: `Error creating transaction: ${err}` });
      
      });
    }
    else {
        return res.json({ message: `Not enough balance for this operation` });    
    }
  } else {
    return res.json({ message: `Origin Card not found` });
  }
 
  const amount_dec = amount * (-1);
  const card_origin = await Card.Card.findOneAndUpdate(filter_origin, {$inc: {balance:amount_dec}});    
  const card_destiny = await Card.Card.findOneAndUpdate(filter_destiny, {$inc: {balance:amount}});    
  return res.json({ message: `New transaction was created`}); 

};

transactionsCtrl.getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
};

module.exports = transactionsCtrl;
