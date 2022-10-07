const createError = require("http-errors");

module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    next(createError(401))
  };
};

module.exports.isAdmin = (req, res, next) => {
  if (req.user.admin) {
    next()
  } else {
    next(createError(401))
  };
};