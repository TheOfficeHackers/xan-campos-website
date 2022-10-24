const { EasterEgg } = require("../models");

module.exports.list = (req, res, next) => {
  EasterEgg.find()
    .then((easterEggs) => res.json(easterEggs))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const easterEgg = req.body;

  EasterEgg.create(easterEgg)
    .then((easterEgg) => res.status(201).json(easterEgg))
    .catch(next);
};