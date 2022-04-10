require("dotenv").config();

const app = require("./app");
const database = require("./database");

function main() {
  app.use(require("./routes/index"));
  app.use(require("./routes/User"));

const PORT = process.env.PORT || 5000;
const SESSIONS_SECRET = process.env.SESSIONS_SECRET // || 'mySecretApp';


//Initializations

const app = express();
require('./database');
require('./config/passport');


//Settings

app.set('port', PORT || 3001);


//Middlewares

app.use (express.json());
app.use(express.urlencoded({extended:true}));
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



/* function main () {
app.use(require('./routes/index'));
app.use(require('./routes/User'));


    app.listen (app.get ('port')); 
    console.log ('Server on port: ' + app.get ('port'));
    
} */
}
main();
