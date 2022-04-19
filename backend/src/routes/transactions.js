const { Router } = require("express");
const router = Router();

const {
  createNewTransaction,
  getTransactions,
  getTransactionsById,
  getTransactionsMonth,
  deleteTransactions
} = require("../controllers/transactions.controller");

router.route("/").post(createNewTransaction);

router.route("/").get(getTransactions);

router.route("/:id").get(getTransactionsById);

router.route("/date/:month").get(getTransactionsMonth);

router.route("/").delete(deleteTransactions);

module.exports = router;
