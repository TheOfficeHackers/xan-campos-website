const { Work } = require("../models");
const createError = require("http-errors");
const SpotifyApi = require("../config/spotify.config")


module.exports.create = (req, res, next) => {
  const work = req.body;

  Work.create(work)
    .then((work) => res.status(201).json(work))
    .catch(next);
};

module.exports.list = (req, res, next) => {

  Work.find()
    .then((works) => res.json(works))
    .catch((error) => next(error));
};


module.exports.delete = (req, res, next) => {

  Work.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch(next);
};