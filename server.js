const express = require("express");
const bodyParser = require("body-parser");
const Config = require('./app/config/Config');

const app = express();
app.use(bodyParser.json());                           // content-type: application/json
app.use(bodyParser.urlencoded({ extended: true }));   // content-type: application/x-www-form-urlencoded

require("./app/routes/Routes.js")(app);

app.listen(Config.PORT, () => {
  console.log(`API is running on port ${Config.PORT}.`);
});
