import React, { useState, useEffect } from "react";
import "./WorkItem.css";

let music;

function WorkItem({ cover, title, artists, tracks }) {
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
    };

    return () => {
      music?.pause();
    };
  }, [audio]);

    const currentTrack = tracks.find((track) => track.previewUrl === audio) || tracks[0]

  return (
    <div className="card my-5">
      <div className="row g-0">
        <div className="card col-md-4 my-2 border-0">
          <h2>Realismo (2020)</h2>
        </div>

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={cover.url}
                className="img-fluid rounded-start"
                alt={title}
              />
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
                        music?.play();
                      }}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>

                    <button
                      className="btn"
                      onClick={() => {
                        music?.pause();
                      }}
                    >
                      <i className="fa-solid fa-pause"></i>
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
                      <i className="fa-solid fa-backward"></i>
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
                          console.log(nextTrack)
                          if (nextTrack) {
                            setAudio(nextTrack.previewUrl);
                          }
                        }
                      }}
                    >
                      <i className="fa-solid fa-forward"></i>
                    </button>
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

          <div className="card border-0 ms-3 me-3">
            <h5 className="card-title mt-3">Tracklist</h5>
            {tracks
              ? tracks.map((track) => (
                  <div
                    onClick={() => {
                      setAudio(track.previewUrl);
                    }}
                    className="d-flex justify-content-between my-2"
                    key={track.id}
                  >
                    <div>{trackPosition(track)}</div>
                    <div>{track.title}</div>
                    <div>{trackDuration(track.durationMs)}</div>
                  </div>
                ))
              : "Loading..."}
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
