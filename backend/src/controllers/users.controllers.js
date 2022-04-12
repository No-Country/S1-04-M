const usersCtrl = {};
const User = require("../models/users");
const passport = require("passport");
const auth = require ('../middlewares/auth')
const jwt = require('jsonwebtoken')


usersCtrl.createNewUser = async (req, res) => {
  const { name, lastname, email, dni, phone, adress, city, country, cp,  password, password2, date } =
    req.body;
  let messages = [];

  if (password !== password2) {
    messages.push({
      type: "error",
      text: "Passwords do not match, please try again",
    });
  }

  const passwordLength = 4;
  if(password?.length < passwordLength) {
    messages.push({
      type: "error",
      text: `Passwords must be, at least, ${passwordLength} characters long.`,
    });
  }

  if (messages.length > 0) {
    const user_errors = {
      messages: messages,
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      password2: password2,
      dni: dni,
      phone: phone,
      adress: adress,
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
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        password2: password2,
        dni: dni,
        phone: phone,
        adress: adress,
        city: city,
        country: country,
        cp: cp,
        date: date,
      });
      newUser.password = await newUser.encryptPassword(password);

      await newUser.save((err) => {
        if (err) {
          return res
            .status(500)
            .json({ messages: `Error creating user: ${err}` });
        } else {
          messages.push({ type: "ok", text: "User Registered successfully!" });

          return res.json({ messages });
        }
      });
    }
  }
};

usersCtrl.login = async (req, res, next) => {

  const { email, password } = req.body;

  passport.authenticate('login', async (err, user, info) => {
    try {
     
      if (err) {
        //return next(err); // will generate a 500 error
        return res.json({error: "error" })
      }
      if (! user) {
       // return res.send({ success : false, message : 'authentication failed' });
        return res.json({user: "user" })
      }

      //Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session.
      req.login(user, { session: false }, async (err) => {
        if (err) return next(err)
        const body = { _id: user._id, email: user.email }
        const token = jwt.sign({ user: body }, 'top_secret')
        return res.json({user_token: token })
      })
    }
    catch(e) {
      return next(e)
    }
  })(req, res, next)
}


usersCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

usersCtrl.getUserById = async (req, res) => {
  const userId = req.params.id;

  if (userId.length === 24) {
      const userQuery = await User.findById({_id: userId}) || false;

      if (userQuery) {
        console.log('Query successfull');
        res.json({userQuery});
    
      } else {
          console.log('User not found in db');
          res.json({type: 'error', text: 'User not found in db.'});
    
      }
  } else {
      console.log('User ID length not valid.')
      res.json({type: 'error', text: 'User ID length not valid.'})
  }
}

module.exports = usersCtrl;
