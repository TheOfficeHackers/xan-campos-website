import React, { useEffect } from "react";
import { useState } from "react";
import { getConcerts } from "../../../services/website-service";
import ConcertItem from "../concert-item/ConcertItem";
import moment from "moment";

function NextConcertList() {
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
          ? concerts.filter((concert) => moment(concert.date).isSameOrAfter(new Date()))
          .sort((a,b) => new Date(a.date) - new Date(b.date))
          .map((concert)=> (
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


  // let pastConcertsFilter = false

  // function handlePastConcerts(event) {
  //   pastConcertsFilter = true
  //   return pastConcertsFilter
  // }

  // return (
  //   <>
  //     <button >Next Concerts</button>
  //     <button onClick={handlePastConcerts}>Past Concerts</button>

    
  //     { pastConcertsFilter ? 

  //       concerts
  //         ? concerts.filter((concert) => { 
  //           moment(concert.date).isBefore(new Date())
  //           return concert}
          
  //         :
  //             (<div key={concert.id}>
  //               <ConcertItem {...concert} />
  //             </div>)
       
  //     : 
  //     concerts
  //         ? concerts.map((concert) => (
  //             <div key={concert.id}>
  //               <ConcertItem {...concert} />
  //             </div>
  //           ))
  //         : "Loading..."}  
    
  //   </>
  // );


export default NextConcertList;
