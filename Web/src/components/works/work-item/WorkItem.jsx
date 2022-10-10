import React from "react";
import "./WorkItem.css";

function WorkItem({ cover, title, artists, tracks }) {
  function trackPosition(track) {
    return tracks.indexOf(track) + 1;
  }

  function trackDuration(ms) {
    const mins = Math.floor(ms / 60000);
    const secs = ((ms % 60000) / 1000).toFixed(0);
    return secs === 60
      ? mins + 1 + ":00"
      : mins + ":" + (secs < 10 ? "0" : "") + secs;
  }

  return (
    <div className="row row-cols-12 row-cols-sm-6 row-cols-md-3 my-3">
      <div>
        <h4>{title}</h4>
        <h5>{artists[0].name}</h5>
      </div>

      <div>
        <div>
          <img
            src={cover.url}
            alt={title}
            style={{ height: 300, width: 300 }}
          />
        </div>
        <div>
          {tracks
            ? tracks.map((track) => (
                <div
                  className="d-flex row justify-content-between"
                  key={track.id}
                >
                  <div className="">{trackPosition(track)}</div>
                  <div className="">{track.title}</div>
                  <div className="">{trackDuration(track.durationMs)}</div>
                  <audio className="" controls>
                    <source src={track.previewUrl} type="audio/mpeg" />
                  </audio>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}

export default WorkItem;
