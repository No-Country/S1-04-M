const transactionsCtrl = {};
const { Transaction } = require("../models/transactions");
const meses = {
  "00": "Enero",
  "01": "Febrero",
  "02": "Marzo",
  "03": "Abril",
  "04": "Mayo",
  "05": "Junio",
  "06": "Julio",
  "07": "Agosto",
  "08": "Septiembre",
  "09": "Octubre",
  10: "Noviembre",
  11: "Diciembre",
};
const Card = require("../models/cards");
const makeReportHtml = require("../middlewares/makeReportHtml");

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
    } else {
      return res.json({ message: `Not enough balance for this operation` });
    }
  } else {
    return res.json({ message: `Origin Card not found` });
  }

  const amount_dec = amount * -1;
  const card_origin = await Card.Card.findOneAndUpdate(filter_origin, {
    $inc: { balance: amount_dec },
  });
  const card_destiny = await Card.Card.findOneAndUpdate(filter_destiny, {
    $inc: { balance: amount },
  });
  return res.json({ message: `New transaction was created` });
};

transactionsCtrl.getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
};

transactionsCtrl.getTransactionsById = async (req, res) => {
  const { id } = req.params;
  const transactions = await Transaction.find({ _id: id });
  res.json(transactions);
};

transactionsCtrl.getTransactionsMonth = async (req, res) => {
  try {
    const { month } = req.params;
    const fechaInicial = new Date("2022", month, "0");
    const fechaFinal = new Date("2022", month, "31");
    const transactions = await Transaction.find({
      created_at: { $gte: new Date(fechaInicial), $lt: new Date(fechaFinal) },
    });

    let report;
    if (transactions.length) {
      report = await makeReportHtml.create(transactions, month);
    }

    res.json([transactions, report ? report.url : ""]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.stringValue });
  }
};

transactionsCtrl.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    let report;
    if (transactions.length) {
      report = await makeReportHtml.create(transactions);
    }

    res.json([transactions, report ? report.url : ""]);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = transactionsCtrl;
