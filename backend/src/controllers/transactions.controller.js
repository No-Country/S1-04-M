const transactionsCtrl = {};
const {Transaction} = require("../models/transactions");

transactionsCtrl.createNewTransaction = async (req, res) => {
  const { origin, destiny, destiny_name, amount, description} =
    req.body;

  const transaction = new Transaction({
    origin, destiny, destiny_name, amount, description
  });

  await transaction.save((err) => {
    if (err)
      return res.status(500).send({ message: `Error creating transaction: ${err}` });

    return res.json({ message: `New transaction was created` });
  });

}


transactionsCtrl.getTransactions = async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
  };
  






module.exports = transactionsCtrl;
