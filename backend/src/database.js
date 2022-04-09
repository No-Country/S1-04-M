const mongoose = require("mongoose");
const URI =
  "mongodb+srv://s104m:wkh2iMyKAijp3UiA@bankforyou.kgpmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI :'mongodb://localhost/databasetest';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database Connected");
});
