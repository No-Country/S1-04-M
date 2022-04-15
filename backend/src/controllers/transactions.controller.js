const transactionsCtrl = {};
const { Transaction } = require("../models/transactions");
const pdf = require("html-pdf");
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

transactionsCtrl.createNewTransaction = async (req, res) => {
  const { origin, destiny, destiny_name, amount, description } = req.body;

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

    return res.json({ message: `New transaction was created` });
  });
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
      const head = `
        <head>
          <style>
            ul{
              list-style-type: none;
            }
          </style>
        </head>
      `;

      const bodyInit = `
        <body>
          <h2>Transacciones de ${meses[month].toLowerCase()}</h2>
          <ul>
      `;
      const transactionsHTML = transactions
        .map(
          (transaction) => `
      <li>
        <hr>
        <p>Transacción</p>
        <h3>${transaction.description}</h3>
        <br>
        <div>
        <span>Fecha: ${
          transaction.created_at ? `${transaction.created_at}`.slice(0, 10) : ""
        }</span>
        <span>Monto: $ ${transaction.amount || ""}</span>
        </div>
      </li>
      `
        )
        .join("");

      const bodyEnd = `
            <hr>
          </ul>
        </body>
      `;

      const content = head + bodyInit + transactionsHTML + bodyEnd;

      var fileNameGlobal = `transacciones-${
        meses[month]
      }-${new Date().getTime()}.pdf`;

      pdf
        .create(content)
        .toFile(`./public/pdf/${fileNameGlobal}`, (err, res) => {
          if (err) {
            throw new Error(err.message);
          }
        });
    }

    res.json([transactions, `http://localhost:4000/pdf/${fileNameGlobal}`]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.stringValue });
  }
};

module.exports = transactionsCtrl;
