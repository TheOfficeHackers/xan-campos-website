import React, { useState } from "react";
import { PastConcertsList, NextConcertList, Header, Footer } from "../../components";
import concertpic from "../../images/xct-concert.jpg"


function ConcertsScreen() {
  const [status, setStatus] = useState(true);

  const handleNextConcerts = () => {
    setStatus(true);
  };

  const handlePastConcerts = () => {
    setStatus(false);
  };

  return (
    <>
      <Header color="danger"/>
      <img src={concertpic} alt="xan-campos" style={{width:"100%"}}/>
      <h2
      className="header-text"
      style={{
        position: "absolute",
        fontSize: "10rem",
        color: "white",
        top: "175px",
        right: "180px",
      }}
    >
      CONCERTS
    </h2> 
      
      <div className="container">
      <div className="d-flex flex-column mt-5">
      <span className={`${status ? "list-selected display-4 me-5 fw-semibold" : "display-6 me-5"}`} role="button" onClick={handleNextConcerts}>Next Concerts</span> 
      <span className={`${status ? "display-6 me-5" : "list-selected display-4 me-5 fw-semibold"}`}  role="button" onClick={handlePastConcerts}>Past Concerts</span>
      </div>
      <div>{status ? <NextConcertList /> : <PastConcertsList />}</div>
      </div>
      <Footer />
    </>
  );
}

export default ConcertsScreen;
