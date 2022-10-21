const { User } = require("../models");
const expressSession = require("express-session");
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/xan-campos-website";

module.exports.session = expressSession({
  secret: process.env.SESSION_SECRET || 'super secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: mongoose.connection._connectionString,
    ttl: 24 * 3600 * 1000,
  }),
  cookie: {
    secure: process.env.SESSION_SECURE === 'true',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
});

module.exports.loadUser = (req, res, next)  => {
  const { userId } = req.session;
  if (userId) {
    User.findById(userId)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(next)
  } else {
    next();
  }
};