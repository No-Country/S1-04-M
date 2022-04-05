require('dotenv').config();
const mongoose = require('mongoose');


//Enviromental variables

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/notes-db-app';

//Data base connection

mongoose.connect(MONGODB_URI, {useNewUrlParser:true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));