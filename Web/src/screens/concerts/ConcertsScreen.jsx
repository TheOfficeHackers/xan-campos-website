import React from "react";
import { useState } from "react";
import { PastConcertsList, NextConcertList, Header } from "../../components";
import Section from "../../components/section/Section";

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
      
      <div className="container">
      <Section title="Concerts" icon="edit">
      <div className="d-flex flex-column">
      <span className="header-text fs-5 me-5" onClick={handleNextConcerts}>Next Concerts</span> 
      <span className="header-text fs-5" onClick={handlePastConcerts}>Past Concerts</span>
      </div>
      <div>{status ? <NextConcertList /> : <PastConcertsList />}</div>
      </Section>
      </div>
    </>
  );
}

export default ConcertsScreen;
