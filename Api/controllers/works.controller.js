
const SpotifyService = require("../services/spotify.services");


module.exports.listAlbumsXanTrio = (req, res, next) => {

  SpotifyService.listAlbums("73oIvfmadt105TcyjpCHg7")
    .then((albums) => res.json(albums))
    .catch(next)
};

module.exports.listAlbumsXan = (req, res, next) => {

  SpotifyService.listAlbums("2UhbWYLYhToexZbYFMS1xr")
    .then((albums) => res.json(albums))
    .catch(next)
};


