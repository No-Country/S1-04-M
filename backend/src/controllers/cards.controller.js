const cardsCtrl = {};
const Card = require("../models/cards");
const NextCardNumber = require("../models/cards");
const passport = require('passport')
const jwt = require('jsonwebtoken')
const auth = require ('../middlewares/auth')


cardsCtrl.getCards = async (req, res) => {
    const cards = await Card.find();
    res.json( {"mensaje":"hola"});

};

cardsCtrl.createCard = async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
};

cardsCtrl.firstCardNumber = async (req, res) => {
   await NextCardNumber.save((err) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error creating firs Number Card: ${err}`});
   }

   )
  }

  cardsCtrl.firstCardNumber = async (req, res) => {

    const {nextCarNumber} =  req.body;
 
  
      const nextCardNumber = new NextCardNumber({nextCarNumber});
  
        await nextCardNumber.save((err) => {
          if (err)
            return res
              .status(500)
              .send({ message: `Error creating First Card Number: ${err}` });
  
              return res.json({'message' : 'First Card Number Ready'});
        })
      };
            










cardsCtrl.lastCardNumber = async (req, res) => {
    //const { } = req.body;

    //const cardNumber = await NextCardNumber.find();
    let cardNumber = 0
    console.log (cardNumber);


        cardNumber++
        const last = (cardNumber % 10000).toString().split('')
        while(last.length < 4) last.unshift('0')
        const prev =(Math.floor(cardNumber / 10000)).toString().split('')
        while(prev.length < 4) prev.unshift('5')
        const prev2 =(Math.floor(cardNumber / 100000)).toString().split('')
        while(prev2.length < 4) prev2.unshift('3')
        const prev3 =(Math.floor(cardNumber / 1000000)).toString().split('')
        while(prev3.length < 4) prev3.unshift('2')
        const newCardNumber = prev.join('') +' '+ prev2.join('')+ ' ' + prev3.join('')+ ' ' + last.join('')
    


    console.log ('nueva tarjeta: ' + newCardNumber); 
/*
    const filter = { _id: req.params.id };
    const result = NextCardNumber.update(
        filter,
        { },
        (err, {}) => {
          if (err)
            return res
              .status(500)
              .send({ message: `Error generating new card number: ${err}` });

    res.json(handleCreateCard);
    
    }


    )}


  
*/

  }
    
    cardsCtrl.createNew = async (req, res) => {
    
      const { number, user_id, user_name, balance, active, internal, cvv, date } =  req.body;
      
     
    
        const card = new Card({
            number, 
            user_id, 
            user_name, 
            balance, 
            active, 
            internal, 
            cvv, 
            date
          });
       
          await card.save((err) => {
            if (err)
              return res
                .status(500)
                .send({ message: `Error creating card: ${err}` });
    
            messages.push({ type: "ok", text: "Card created." });
            return res.json({ messages});
           } )
        };
    




module.exports = cardsCtrl;