const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//settings - - -
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors()); //cors hace q dos servidores se conecten entre ellos (back y front por ej)
app.use(express.json()); //para q las rutas entiendan json y strings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//Nahuel---------------------------------------------------------------
require("passport");

const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const path = require("path");

//Enviromental variables

//const PORT = process.env.PORT || 5000;
const SESSIONS_SECRET = process.env.LOCAL_STRATEGY_KEY || "mySecretApp";

//Initializations

require("./config/passport");

//Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: SESSIONS_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//---------------------------------------------------------------

//Routes

const index = require("./routes/index");
const users = require("./routes/users");
const cards = require("./routes/cards");
const transactions = require("./routes/transactions");

app.use("/api/index", index);
app.use("/api/users", users);
app.use("/api/cards", cards);
app.use("/api/transactions", transactions);



module.exports = app;
