require("dotenv").config();

const app = require("./app");
const database = require("./database");

function main() {
  app.listen(app.get("port"));
  console.log("Server on port: " + app.get("port"));
}

main();








