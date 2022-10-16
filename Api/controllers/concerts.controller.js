const { Concert } = require("../models");

module.exports.list = (req, res, next) => {
  Concert.find()
    .then((concerts) => res.json(concerts))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const concert = req.body;

  Concert.create(concert)
    .then((concert) => res.status(201).json(concert))
    .catch(next);
};

module.exports.delete = (req, res, next) => {

  Concert.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch(next);
};
