const { Router } = require("express");
const router = Router();

const { createNewTransaction, getTransactions} = require("../controllers/transactions.controller");

router.route("/")
.post(createNewTransaction);

router.route("/")
.get(getTransactions);

module.exports = router;