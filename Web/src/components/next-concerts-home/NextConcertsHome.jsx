import React, { useEffect } from "react";
import { useState } from "react";
import { getConcerts } from "../../services/website-service.js";
import moment from "moment";

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
      <div
        style={{
          width: "100%",
          height: "30rem",
          color: "white",
          fontFamily: "Zen Dots",
          backgroundImage: `url("https://res.cloudinary.com/dyl3cklgp/image/upload/v1666430645/xan-campos-web/bg-texture-grey_uzd1up.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>Next Concerts</div>
        <div className="my-5">
          {concerts
            ? concerts
                .filter((concert) =>
                  moment(concert.date).isSameOrAfter(new Date())
                )
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((concert) => (
                  <div key={concert.id}>
                    <div className="card border-0 my-3 t-3">
                      <div className="text-danger fw-bold ">
                        {moment(concert.date).format("MMM DD")}, {concert.hour}
                        h.
                      </div>
                      <div className="fw-bold ">{concert.band} </div>
                      <div className="text-secondary fw-bold">
                        {concert.event} @ {concert.venue}, {concert.city}
                      </div>
                      <div className="text-secondary">{concert.country}</div>
                      <span
                        className="border-bottom mt-3"
                        style={{ width: "100px" }}
                      ></span>
                    </div>
                  </div>
                ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
}

export default NextConcertsHome;
