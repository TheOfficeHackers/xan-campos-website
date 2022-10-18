import React from "react";
import { useState } from "react";
import { PastConcertsList, NextConcertList, Header } from "../../components";
import CoverPicture from "../../components/cover-picture/CoverPicture";
import Footer from "../../components/footer/Footer";
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
      <Header />
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
      <span className="header-text fs-5 me-5" onClick={handleNextConcerts}>Next Concerts</span> 
      <span className="header-text fs-5" onClick={handlePastConcerts}>Past Concerts</span>
      </div>
      <div>{status ? <NextConcertList /> : <PastConcertsList />}</div>
      </div>
      <Footer />
    </>
  );
}

export default ConcertsScreen;
