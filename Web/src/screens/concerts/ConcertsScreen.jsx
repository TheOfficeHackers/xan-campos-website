import React, { useState } from "react";
import { PastConcertsList, NextConcertList, Header, Footer, CoverPicture, ScrollButton } from "../../components";
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
      <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666710974/xan-campos-web/concerts-cover_xmyvil.png" />
      <ScrollButton />
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
