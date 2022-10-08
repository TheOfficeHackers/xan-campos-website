const SpotifyApi = require("../config/spotify.config");
const camelify = require("camelcase-keys-deep");

module.exports.listAlbums = (artistId) => {
  return SpotifyApi.getArtistAlbums(artistId, { limit: 50 })
    .then((res) => {
      return Promise.all(
        camelify(res.body.items)
          .map((album) => {
            return SpotifyApi.getAlbumTracks(album.id, { limit: 50 }).then((res) => {
              return {
                id: album.id,
                group: album.album_group,
                artists: album.artists,
                spotifyUrl: album.externalUrls.spotify,
                cover: album.images[0],
                title: album.name,
                releaseDate: album.releaseDate,
                tracks: camelify(res.body.items).map((track) => {
                  return {
                    id: track.id,
                    artists: track.artists,
                    spotifyUrl: track.externalUrls.spotify,
                    cover: track.images[0],
                    title: track.name,
                    releaseDate: track.releaseDate,
                    discNumber: track.discNumber,
                    durationMs: track.durationMs,              
                    previewUrl: track.previewUrl,
                  }
                }),
              };
            });
      }));
    });
};
