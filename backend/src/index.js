const express = require('express');
const app = express();


// ################################## -- PROVISIONAL VARIABLES -- ######################################
const PORT = process.env.PORT || 3000;
const SERVER_INIT_STYLE = '\x1b[43m\x1b[30m%s\x1b[0m'; // yellow bg - black fg


// ################################## -- listen for request -- ######################################

app.listen(PORT, ()=> console.log(SERVER_INIT_STYLE, `--- Server is listening on port ${PORT} ---`));
