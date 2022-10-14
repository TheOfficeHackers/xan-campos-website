import React from "react";
import { useState } from "react";
import { PastConcertsList, NextConcertList, Header } from "../../components";

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

      <button onClick={handleNextConcerts}>Next Concerts</button>

      <button onClick={handlePastConcerts}>Past Concerts</button>

      <div>{status ? <NextConcertList /> : <PastConcertsList />}</div>
    </>
  );
}

export default ConcertsScreen;
