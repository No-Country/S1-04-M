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
  createNewDestinationCard,
  getDestinationCards,
  deleteDestinationCards, 
  deleteDestinationCardsbyId,
  getLastCardNumber, 
  addMoneytoCard,
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
  .route("/byUser")
  .get (getCardsbyUser)


router
  .route("/lastCardNumber")
  .get (getLastCardNumber)
  .post(lastCardNumber);

router
  .route("/firstCardNumber")
  .post(firstCardNumber);
  
router
  .route("/destinationCards")
  .get (getDestinationCards) 
  .post(createNewDestinationCard)
  .delete(deleteDestinationCards)

router
  .route("/destinationCards/byUser")
  .get(getDestinationCardsbyUser);

router
  .route("/destinationCards/byId")
  .delete(deleteDestinationCardsbyId);

router
  .route("/addMoney")
  .post(addMoneytoCard);

  

 //.get ( passport.authenticate('jwt', { session: false }), getCards)

//.post (passport.authenticate('jwt', { session: false }), createCard )

module.exports = router;
