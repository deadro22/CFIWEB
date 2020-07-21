require("dotenv").config();
const express = require("express");
const app = express();

require("./server/expressHandler")(express, app);
require("./server/mongoHandler")();

const port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("LISTENING!");
});
