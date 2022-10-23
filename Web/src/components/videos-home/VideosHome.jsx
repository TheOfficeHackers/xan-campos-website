import React from "react";
import { Link } from "react-router-dom";
import "./VideosHome.css"

function VideosHome() {
  return (
    <>
      <Link to="videos" className="text-decoration-none">
        <div
        className="d-flex"
          style={{
            width: "100%",
            height: "45rem",
            color: "white",
            fontFamily: "Zen Dots",
            backgroundImage: `url("https://res.cloudinary.com/dyl3cklgp/image/upload/v1666429850/xan-campos-web/bg-texture-dark_ldukeh.png")`,
          }}
        >
          <div className="m-0 row align-self-center justify-content-center align-items-center">
            <div
              className="col-lg-5 col-md-2 mb-4 mb-lg-0 display-1"
              style={{ fontFamily: "Zen Dots" }}
            >
              VIDEOS
            </div>

            <div className="col-lg-5 col-md-2 mb-4 mb-lg-0 display-1 video-pic-filter px-0">
            <img
                    src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666546534/xan-campos-web/Amoria7_b8efxt.jpg"
                    className="card-img-top pic-videos-home"
                    alt="Realismo"
                  />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default VideosHome;
