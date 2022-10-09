import React from "react";
import "./WorkItem.css";

function WorkItem({ cover, title, artists, tracks }) {

  function trackPosition(track) {
     return tracks.indexOf(track) + 1
    }

  function trackDuration(ms) {
    const mins = Math.floor(ms / 60000);
    const secs = ((ms % 60000) / 1000).toFixed(0);
    return (secs === 60 ? (mins+1) + ":00" : mins + ":" + (secs < 10 ? "0" : "") + secs);
  }

  return (
    <div className="row row-cols-12 row-cols-sm-6 row-cols-md-3 my-3">
      <div>
        <h4>{title}</h4>
        <h5>{artists[0].name}</h5>
      </div>

      <div>
        <div>
          <img src={cover.url} alt={title} style={{ height: 300, width: 300 }} />
        </div>
        <div>
          {tracks
            ? tracks.map((track) => (
                <div className="row justify-content-between" key={track.id}>
                  <h6 className="">{trackPosition(track)}</h6>
                  <h6 className="">{track.title}</h6>
                  <h6 className="">{trackDuration(track.durationMs)}</h6>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}

export default WorkItem;
