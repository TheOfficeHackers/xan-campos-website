//require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

require("./config/db.config");

const app = express();


const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`Xan Campos website api running at port ${port}`)
);

module.exports = app;