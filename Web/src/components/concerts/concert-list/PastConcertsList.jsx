
import React, { useEffect } from "react";
import { useState } from "react";
import { getConcerts } from "../../../services/website-service";
import ConcertItem from "../concert-item/ConcertItem";
import moment from "moment";

function PastConcertsList() {
  const [concerts, setConcerts] = useState(null);

  useEffect(() => {
    getConcerts()
      .then((concerts) => setConcerts(concerts.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(concerts)

  return (
    <>
      <div className="my-5">
      {
        concerts
          ? concerts.filter((concert) => moment(concert.date).isBefore(new Date()))
          .sort((a,b) => new Date(b.date) - new Date(a.date))
          .map((concert) => (
               <div key={concert.id}>
                <ConcertItem {...concert} />
             </div>
        ))
          : <div style={{height:"800px"}}></div>
      }  
      </div>
    </>
  );
}

export default PastConcertsList