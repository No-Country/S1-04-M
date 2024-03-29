const {
  Router
} = require("express");

const router = Router();

const controllerTransactions2 = require("../controllers/transactions.controller");

router.route("/user/byId/:id").get(getTransactionsOfUser);
router.route("/user/byId/:id/date/:month").get(getTransactionsMonthOfUser);
router.route("/pdf").post(getPdf);
module.exports = router;