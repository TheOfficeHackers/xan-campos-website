const { Contact } = require("../models");
const { sendRegistrationEmail } = require("../config/mailer.config");

module.exports.create = (req, res, next) => {
  const message = req.body;

  Contact.create(message)
    .then((message) => {
      sendRegistrationEmail(message)
      res.status(201).json(message)
    })

    .catch(next)
}