const { Sideman } = require("../models")

module.exports.create = (req, res, next) => {
  const sideman = req.body;
  colabo.cover = req.file.path;

  Sideman.create(sideman)
    .then((sidemanwork) => res.status(201).json(sidemanwork))
    .catch(next);
};

module.exports.list = (req, res, next) => {

  Sideman.find()
    .then((sidemanwork) => res.json(sidemanwork))
    .catch((error) => next(error));
};


module.exports.delete = (req, res, next) => {

  Sideman.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch(next);
};