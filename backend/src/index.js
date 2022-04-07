require('dotenv').config();
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');


//Enviromental variables

const PORT = process.env.PORT;
const SESSIONS_SECRET = process.env.SESSIONS_SECRET;


//Initializations

const app = express();
require('./database');
require('./config/passport');


//Settings

app.set('port', PORT || 3000);


//Middlewares

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:SESSIONS_SECRET,
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());


//Global Variables

// app.use((req, res, next) => {
//     res.locals.user = req.user || null;
//     next(); 
// })


//Routes

app.use(require('./routes/index'));
// app.use(require('./routes/users'));
app.use(require('./routes/User'));

//Server is listening

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});