
const {Router} = require ('express');
const router = Router();
const { getCards,  createCard, lastCardNumber, firstCardNumber} = require('../controllers/cards.controller');
const auth = require ('../middlewares/auth')
const passport = require('passport')
const jwt = require('jsonwebtoken')


router.route ('/')

.get (getCards)

router.route ('/lastCardNumber')

.post (lastCardNumber)

router.route ('/firstCardNumber')

.post (firstCardNumber)

//.get ( passport.authenticate('jwt', { session: false }), getCards)

//.post (createCard)
//.post (passport.authenticate('jwt', { session: false }), createCard )

module.exports = router;