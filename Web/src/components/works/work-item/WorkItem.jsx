import React, { useState, useEffect } from "react";
import "./WorkItem.css";

let music;

function WorkItem({ cover, title, artists, tracks, releaseDate }) {
  const [audio, setAudio] = useState();

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

  useEffect(() => {
    if (!audio) {
      return;
    }

    music?.pause();
    music = new Audio(audio);
    music.play();

    music.ontimeupdate = () => {
      const bar = document.getElementById("progress-bar");
      bar.style.width = `${(music.currentTime * 100) / music.duration}%`;
      const trackProgress = document.getElementById("track-progress");
      trackProgress.innerText = `${(music.currentTime)}%`; 
    };

    console.log(music.currentTime);
    console.log(music.duration);

    return () => {
      music?.pause();
    };
  }, [audio]);

  const currentTrack =
    tracks.find((track) => track.previewUrl === audio) || tracks[0];

  const releaseYear = releaseDate.slice(0, 4);

  return (
    <div className="card py-4 px-5 my-3 bg-dark" style={{ maxWidth: "900px", margin: "auto" }}>
      <div className="row g-0 text-light">
        <div className="card col-md-4 my-2 border-0 bg-dark">
          <h4>
            {title} ({releaseYear})
          </h4>
        </div>

        <div
          className="card mb-3 border-0 ms-auto bg-dark"
          style={{ maxWidth: "500px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={cover.url} className="img-fluid" alt={title} />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{artists[0].name}</h5>
                <h5>{currentTrack.title}</h5>
                <h5>{title}</h5>

                <div>
                  <div
                    id="music-player"
                    className="d-flex justify-content-between"
                  >
                    <button
                      className="btn"
                      onClick={() => {
                        if (!music) {
                          setAudio(tracks[0].previewUrl)
                        } else {
                          music?.play()
                        } 
                    
                      }}
                    >
                      <i className="fa-solid fa-play transition-red-btn fs-4 text-light"></i>
                    </button>

                    <button
                      className="btn"
                      onClick={() => {
                        music?.pause();
                      }}
                    >
                      <i className="fa-solid fa-pause transition-red-btn text-light"></i>
                    </button>

                    <button
                      className="btn"
                      onClick={() => {
                        if (music && tracks) {
                          const prevTrack = tracks.find(
                            (t, i) => tracks[i + 1]?.previewUrl === audio
                          );
                          if (prevTrack) {
                            setAudio(prevTrack.previewUrl);
                          }
                        }
                      }}
                    >
                      <i className="fa-solid fa-backward-step transition-red-btn text-light"></i>
                    </button>

                    <button
                      className="btn"
                      onClick={() => {
                        if (music && tracks) {
                          console.log(music);
                          console.log(tracks);
                          const nextTrack = tracks.find(
                            (t, i) => tracks[i - 1]?.previewUrl === audio
                          );
                          console.log(nextTrack);
                          if (nextTrack) {
                            setAudio(nextTrack.previewUrl);
                          }
                        }
                      }}
                    >
                      <i className="fa-solid fa-forward-step transition-red-btn text-light"></i>
                    </button>
                    <div id="track-chrono">
                      <span id="track-progress">00:00</span>/
                      {trackDuration(currentTrack.durationMs)}
                    </div>
                  </div>

                  <div className="progress" style={{ height: "5px" }}>
                    <div
                      id="progress-bar"
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 ms-2 me-2 bg-dark">
            <h5 className="card-title mt-3">Tracklist</h5>
            <div
              style={{
                width: "10",
                height: "10rem",
                overflow: "scroll",
                overflowX: "hidden",
                cursor: "pointer",
              }}
            >
              {tracks
                ? tracks.map((track) => (
                    <div key={track.id}>
                      <div
                        onClick={() => {
                          setAudio(track.previewUrl);
                        }}
                        className="d-flex justify-content-between my-2 me-2"
                      >
                        <div className="row col-12 track">
                          <div className="col-2">
                            <i class="fa fa-play play"> </i>
                            {trackPosition(track)}
                          </div>
                          <div className="col-8">{track.title}</div>
                        </div>
                        <div>{trackDuration(track.durationMs)}</div>
                      </div>
                      <hr className="text-secondary m-0"></hr>
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="row row-cols-12 row-cols-sm-6 row-cols-md-3 my-3">
    //   <div>
    //     <h4>{title}</h4>
    //     <h5>{artists[0].name}</h5>
    //   </div>

    //   <div>
    //     <div>
    //       <img
    //         src={cover.url}
    //         alt={title}
    //         style={{ height: 300, width: 300 }}
    //       />
    //     </div>
    //     <div>
    //       {tracks
    //         ? tracks.map((track) => (
    //             <div
    //               className="d-flex row justify-content-between"
    //               key={track.id}
    //             >
    //               <div className="">{trackPosition(track)}</div>
    //               <div className="">{track.title}</div>
    //               <div className="">{trackDuration(track.durationMs)}</div>
    //               <audio className="" controls>
    //                 <source src={track.previewUrl} type="audio/mpeg" />
    //               </audio>
    //             </div>
    //           ))
    //         : "Loading..."}
    //     </div>
    //   </div>
    // </div>
  );
}

export default WorkItem;
