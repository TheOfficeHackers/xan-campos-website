const { Colabo } = require("../models");

module.exports.create = (req, res, next) => {
  const colabo = req.body;

  Colabo.create(colabo)
    .then((colabo) => res.status(201).json(colabo))
    .catch(next);
};

module.exports.list = (req, res, next) => {

  Colabo.find()
    .then((colabos) => res.json(colabos))
    .catch((error) => next(error));
};


module.exports.delete = (req, res, next) => {

  Colabo.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch(next);
};