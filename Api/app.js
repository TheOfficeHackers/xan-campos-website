require("dotenv").config()

const createError = require("http-errors")
const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose");

require("./config/db.config");

const app = express();

app.use(express.json());
app.use(logger('dev'))

const routes = require("./config/routes.config")
app.use('/api/v1', routes)

app.use((req, res, next) => next(createError(404, "Page not found")));

app.use((error, req, res, next) => {
  const data = {};
  console.error(error);

  if (error instanceof mongoose.Error.ValidationError || error.status === 400) {
    error.status = 400;
    data.errors = error.errors;
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, "Resource not found");
  }

  data.message = error.message;

  res.status(error.status || 500);
  res.send(data);
});

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`Xan Campos website api running at port ${port}`)
);

