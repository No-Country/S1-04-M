const pdf = require("html-pdf");

const makeReportHtml = {
  head: `
  <head>
    <style>
      body{
        padding: 3em
      }
      ul{
        list-style-type: none;
      }
    </style>
  </head>
`,
  meses: {
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
  },
  bodyEnd: `
          <hr>
        </ul>
      </body>
    `,
};

makeReportHtml.create = async function (transactions, month = undefined) {
  try {
    var fileNameGlobal =
      month === undefined
        ? `Todas-las-transacciones-${new Date().getTime()}.pdf`
        : `transacciones-${this.meses[month]}-${new Date().getTime()}.pdf`;

    const title =
      month === undefined
        ? "Todas las transacciones"
        : `Transacciones de ${this.meses[month].toLowerCase()}`;

    const bodyInit = `
      <body>
        <h2>${title}</h2>
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
        transaction.created_at ? `${transaction.created_at}`.slice(0, 10) : "-"
      }</span>
      <span>Monto: $ ${transaction.amount || ""}</span>
      </div>
    </li>
    `
      )
      .join("");

    const content = this.head + bodyInit + transactionsHTML + this.bodyEnd;

    const pdfMakerPromise = new Promise((resolve, reject) => {
      pdf
        .create(content)
        .toFile(`./public/pdf/${fileNameGlobal}`, (err, res) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve({
            filename: fileNameGlobal,
            url: `http://localhost:4000/pdf/${fileNameGlobal}`,
          });
        });
    });

    const report = await pdfMakerPromise;

    return report;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = makeReportHtml;
