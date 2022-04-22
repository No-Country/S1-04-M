const {
  Router
} = require("express");

const router = Router();

const {
  createNewTransaction,
  getTransactions,
  getTransactionsById,
  getTransactionsMonth,
  deleteTransactions,
  getTransactionsOfUser,
  getTransactionsMonthOfUser,
  getPdf
} = require("../controllers/transactions.controller");

router.route("/").post(createNewTransaction);
router.route("/").get(getTransactions);
router.route("/allusers/:month").get(getTransactionsMonth); // router.route("/deleteAll/:delete").delete(deleteTransactions);
// router.delete("/", deleteTransaction);

module.exports = router;