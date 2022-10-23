import React from "react";
import { Link } from "react-router-dom";

function WorksHome() {
  return (
    <>
      <Link to="works" className="text-decoration-none">
        {/* <div className="container py-5">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div class="card shadow-sm border-0 rounded">
                <div class="card-body p-0">
                  <img
                    src="https://f4.bcbits.com/img/a2792923453_16.jpg"
                    alt=""
                    className="w-100 card-img-top"
                  />
                </div>
                <div class="card-body p-0">
                  <img
                    src="https://f4.bcbits.com/img/a2792923453_16.jpg"
                    alt=""
                    className="w-100 card-img-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="row vh-100 text-dark d-flex justify-content-around align-items-center">
            <div className="col-sm-2 col-lg-2">
              <div className="justify-content-around align-items-center">
                <div class="card" style={{ width: "40rem" }}>
                  <img
                    src="https://f4.bcbits.com/img/a2792923453_16.jpg"
                    className="card-img-top"
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
                <button type="button" class="btn btn-danger btn-lg ">
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
