import React from "react";
import { Link } from "react-router-dom";

function WorksHome() {
  return (
    <>
      <Link to="works" className="text-decoration-none">
        <div
          style={{
            width: "100%",
            height: "45rem",
            color: "black",
          }}
        >
          <div className="mx-5">
            <div className="row">
              <div className="col-lg-9 col-md-2 mb-4 mb-lg-0">
                <img
                  src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666438289/xan-campos-web/backview-crop_raxbpx.png"
                  alt="to-works"
                  style={{ width: "50%" }}
                />
              </div>
              <div
                className="col-lg-3 col-md-2 mb-4 mb-lg-0 display-1"
                style={{ fontFamily: "Zen Dots"}}
              >
                WORKS
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default WorksHome;
