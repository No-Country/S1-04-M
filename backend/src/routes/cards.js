const { Router } = require("express");
const router = Router();
const {
  getCards,
  createNew,
  lastCardNumber,
  firstCardNumber,
  deleteCards,
  getCardsbyUser,
  getDestinationCardsbyUser,
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

  router
  .route("/byUser:id")

  .get(getCardsbyUser);

  router
  .route("/byUser/destinationCards")
  .get(getDestinationCardsbyUser)

//.get ( passport.authenticate('jwt', { session: false }), getCards)

//.post (passport.authenticate('jwt', { session: false }), createCard )

module.exports = router;
