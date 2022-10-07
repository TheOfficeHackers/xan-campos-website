const { Video } = require("../models");
const createError = require("http-errors");


module.exports.create = (req, res, next) => {
  const video = req.body;

  Video.create(video)
    .then((video) => res.status(201).json(video))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Video.find()
    .then((videos) => res.json(videos))
    .catch((error) => next(error));
};


module.exports.delete = (req, res, next) => {

  Video.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch(next);
};
