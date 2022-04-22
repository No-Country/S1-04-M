const { Router } = require("express");
const router = Router();

const {
  createNewTransaction,
  getTransactions,
  getTransactionsById,
  getTransactionsMonth,
  deleteTransactions,
  getTransactionsOfUser,
  getTransactionsMonthOfUser,
  getPdf,
} = require("../controllers/transactions.controller");

router.route("/").post(createNewTransaction);

router.route("/").get(getTransactions);

router.route("/:id").get(getTransactionsById);

router.route("/date/:month").get(getTransactionsMonth);

router.route("/user/:id").get(getTransactionsOfUser);

router.route("/user/:id/month/:month").get(getTransactionsMonthOfUser);

router.route("/user/pdf").post(getPdf);

// router.route("/deleteAll/:delete").delete(deleteTransactions);
// router.delete("/", deleteTransaction);

module.exports = router;
