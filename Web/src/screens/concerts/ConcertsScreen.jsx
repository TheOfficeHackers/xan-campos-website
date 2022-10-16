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
      <Section title="Concerts" icon="edit">
      <button onClick={handleNextConcerts}>Next Concerts</button>
      <button onClick={handlePastConcerts}>Past Concerts</button>
      <div>{status ? <NextConcertList /> : <PastConcertsList />}</div>
      </Section>
    </>
  );
}

export default ConcertsScreen;
