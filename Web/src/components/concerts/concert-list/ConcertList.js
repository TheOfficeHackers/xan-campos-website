import React, { useEffect } from "react";
import { useState } from "react";
import { getConcerts } from "../../../services/website-service";
import ConcertItem from "../concert-item/ConcertItem";

function ConcertList() {
  const [concerts, setConcerts] = useState(null);

  useEffect(() => {
    getConcerts()
      .then((concerts) => setConcerts(concerts.data))
      .catch((err) => console.error(err));
  }, []);
 console.log(concerts)

 
  return (
    <>
      <div>
        {concerts 
        ? concerts.map((concert) => (
              <div key={concert.id}>
                <ConcertItem {...concert} />
              </div>
            ))
          : "Loading..."}
      </div>
    </>
  );
}

export default ConcertList;
