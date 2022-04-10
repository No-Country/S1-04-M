const { Router } = require("express");
const router = Router();
const {
  getCards,
  createNew,
  lastCardNumber,
  firstCardNumber,
  deleteCards,
} = require("../controllers/cards.controller");
const auth = require("../middlewares/auth");
const passport = require("passport");
const jwt = require("jsonwebtoken");

router
  .route("/")

  .get(getCards)
  .post(createNew)
  .delete(deleteCards);

router
  .route("/lastCardNumber")

  .post(lastCardNumber);

router
  .route("/firstCardNumber")

  .post(firstCardNumber);

//.get ( passport.authenticate('jwt', { session: false }), getCards)

//.post (passport.authenticate('jwt', { session: false }), createCard )

module.exports = router;
