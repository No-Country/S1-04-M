const usersCtrl = {};
const User = require("../models/users");
const passport = require("passport");
const auth = require("../middlewares/auth");
const jwt = require("jsonwebtoken");

const {card_Generator} = require("../controllers/helpers.controller");
const {newCard} = require("../controllers/helpers.controller");

usersCtrl.createNewUser = async (req, res) => {
  const {
    address,
    city,
    country,
    cp,
    date,
    dni,
    email,
    lastname,
    name,
    password,
    password2,
    phone,
  } = req.body;
  let messages = [];

  if (password !== password2) {
    messages.push({
      type: "error",
      text: "Passwords do not match, please try again",
    });
  }

  const passwordLength = 4;
  if (password.length < passwordLength) {
    messages.push({
      type: "error",
      text: `Passwords must be, at least, ${passwordLength} characters long.`,
    });
  }

  if (messages.length > 0) {
    const user_errors = {
      address: address,
      messages: messages,
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      password2: password2,
      dni: dni,
      phone: phone,
      city: city,
      country: country,
      cp: cp,
      date: date,
    };

    res.json(user_errors);

  } else {
    const userEmail = (await User.findOne({ email: email })) || false;

    if (userEmail.email && userEmail.email === email) {
      messages.push({
        type: "error",
        text: "User Already exists. Try logging-in!",
      });

      res.json(messages);
    } else {
      const newUser = new User({
        address: address,
        city: city,
        country: country,
        cp: cp,
        date: date,
        dni: dni,
        name: name,
        email: email,
        lastname: lastname,
        password: password,
        phone: phone,
      });
     


      await newUser.save( (err) => {
        if (err) {
          return res
            .status(500)
            .json({ messages: `Error creating user: ${err}` });
        } 
      });


      let new_cardnumber= "Sin número";
      try {
        new_cardnumber = await card_Generator();
             
      }
      catch (error){
        console.error(error);
      } 
   
      let new_card = "Sin card";
      try {
        const fecha_vencimiento = new Date();
        const name = newUser.name + " " + newUser.lastname;
        const cvv = Math.random() * (999 - 0) + 0;
        const card_cvv = cvv.toString().substring(0,3);
  
        new_card = await newCard( new_cardnumber, newUser._id , name, 0, true, true, card_cvv, fecha_vencimiento);
      }
      catch (error){
        console.error(error);
      } 
      const token = jwt.sign({ user: newUser }, "top_secret");     
      messages.push({ user: newUser._id, new_cardnumber_id: new_card._id, user_token:token })
      return res.json({ messages });
    }
  }
};

usersCtrl.login = async (req, res, next) => {

  const {email, password} = req.body;

 passport.authenticate("login", async (err, user, info) => {

    try {
      if (err) {
        //return next(err); // will generate a 500 error
        return res.json({ error: "error" });
      }

      if (! user) {
       // return res.send({ success : false, message : 'authentication failed' });
        return res.json({error: "User not found *" })
      }

      //Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session.
      req.login(user, { session: false }, async (err) => {
        if (err) return next(err);
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, "top_secret");
        return res.json({ user_token: token, user: user._id });
      });
    } catch (e) {
      return next(e);
    }
  })(req, res, next);
};

usersCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};


usersCtrl.getUserById = async (req, res) => {
  const userId = req.params.id;
const _id = userId;

  if (userId.length === 24) {
    const userQuery = (await User.findById({ _id})) || false;

    if (userQuery) {
      /* console.log("Query successfull"); */
      res.json({ userQuery });
    } else {
     /*  console.log("User not found in db"); */
      res.json({ type: "error", text: "User not found in db." });
    }
  } else {
    /* console.log("User ID length not valid."); */
    res.json({ type: "error", text: "User ID length not valid." });
  }
};


usersCtrl.deleteUsers= async (req, res) => {
  const users = await User.deleteMany();
  res.json("Users deleted");
};


module.exports = usersCtrl;
