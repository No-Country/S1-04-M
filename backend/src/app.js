const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("passport");

//settings - - -
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(cors()); //cors hace q dos servidores se conecten entre ellos (back y front por ej)
app.use(express.json()); //para q las rutas entiendan json y strings

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
//app.use(methodOverride('_method'));
/*app.use(session({
    secret:SESSIONS_SECRET,
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());

*/
//Routes

app.use(require("./routes/index"));
app.use(require("./routes/User"));

const cards = require("./routes/cards");
app.use("/api/cards", cards);

//Para ocultar la ruta donde se alamacenan laas imágenes
app.use("/public", express.static(`${__dirname}/storage/images`));

module.exports = app;
