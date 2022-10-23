import React, { useEffect } from "react";
import { useState } from "react";
import { getConcerts } from "../../services/website-service.js";
import moment from "moment";
import { Link } from "react-router-dom";
import cepelin from "../../images/cepelin-bosque.png";

function NextConcertsHome() {
  const [concerts, setConcerts] = useState(null);

  useEffect(() => {
    getConcerts()
      .then((concerts) => setConcerts(concerts.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(concerts);
  return (
    <>
      <Link to="concerts" className="text-decoration-none">
        <div
          style={{
            width: "100%",
            color: "white",
            backgroundImage: `url("https://res.cloudinary.com/dyl3cklgp/image/upload/v1666429850/xan-campos-web/bg-texture-dark_ldukeh.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="m-0 vh-100 row justify-content-center align-items-center ">
            <div
              className="col-lg-5 col-md-2 mb-4 mb-lg-0 display-1"
              style={{ fontFamily: "Zen Dots" }}
            >
              NEXT <br></br>CONCERTS
            </div>

            {concerts ? (
              concerts
                .filter((concert) =>
                  moment(concert.date).isSameOrAfter(new Date())
                )
                .slice(0, 3)
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((concert) => (
                  <div
                    key={concert.id}
                    className="col-lg-2 col-md-6 mb-8 mb-lg-0"
                  >
                    <div className="d-flex row">
                      <div className="fs-5">
                        {moment(concert.date).format("MMM DD")}, {concert.hour}
                        h.
                      </div>
                      <div className="fw-semibold fs-3">{concert.band} </div>
                      <div className="fs-6 fw-normal">
                        {concert.event} @ {concert.venue}, {concert.city}
                      </div>
                      <div className="fw-semibold fs-5">{concert.country}</div>
                      <span
                        className="border-bottom border-white mt-3"
                        style={{ width: "100px" }}
                      ></span>
                    </div>
                  </div>
                ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default NextConcertsHome;
