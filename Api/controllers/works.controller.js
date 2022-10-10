const { Work } = require("../models");
const createError = require("http-errors");
const SpotifyService = require("../services/spotify.services");


module.exports.list = (req, res, next) => {

  SpotifyService.listAlbums("73oIvfmadt105TcyjpCHg7","2UhbWYLYhToexZbYFMS1xr")
    .then((albums) => res.json(albums))
    .catch(next)
};
