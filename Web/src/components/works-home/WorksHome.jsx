import React from "react";
import { Link } from "react-router-dom";
import "../works-home/WorksHome.css"

function WorksHome() {
  return (
    <>
      <Link to="works" className="text-decoration-none">
        <div className="container">
          <div className="row vh-100 text-dark d-flex justify-content-around align-items-center">
            <div className="col-sm-2 col-lg-6">
              <div className="justify-content-around align-items-center">
                <div className="card work-cover">
                  <img
                    src="https://f4.bcbits.com/img/a2792923453_16.jpg"
                    className="card-img-top realismo-cover"
                    alt="Realismo"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-lg-2">
              <div>
                <div className="display-1" style={{ fontFamily: "Zen Dots" }}>
                  NEW<br></br>ALBUM
                </div>
                <button type="button" className="btn btn-danger btn-lg ">
                      Listen & enjoy it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default WorksHome;
