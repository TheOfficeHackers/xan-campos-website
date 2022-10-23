import React from "react";

function Bio() {
  return (
    <div className="container my-5 pb-5 pb-3">
      <h1 className="mt-5 mb-5 display-5">
        Xan Campos, <br />jazz pianist and composer {" "}
      </h1>
      <h5 className="fw-light fs-5">
        {" "}
        Xan Campos (Galicia, 1987) grew as a pianist and composer at
        conservatories in Galicia, Basque Country, Copenhagen, Amsterdam and
        Berlin, stages that allowed him to be in contact with the European jazz
        vanguard, playing at venues and festivals of a large part of the
        continent. <br />
        <br />
        Currently, Xan Campos is one of the most active pianists in the Iberian
        Peninsula, both leading his own projects and as a sideman of prominent
        artists from the Spanish and Portuguese jazz scenes. Still in his early
        thirties, he has a specially extensive career, having recorded 5 albums
        in his own name and more than 20 as an accompanist with big names of
        this musical genre.
        <br />
        <br />
        He also enjoys relevance in Latin America, where he has played at
        festivals in Argentina, Uruguay, Chile, Ecuador and Colombia, as well as
        performing at several venues in New York City (USA).
      </h5>

      <figure class="text-center mt-5 fw-light">
        <blockquote class="blockquote mb-4">
          <h6>An explosive tune from this wonderful piano trio. Like a jolt of coffee first thing in the morning, this song will get you awake and moving. Relentless.</h6>
        </blockquote>
        <figcaption class="blockquote-footer">
          Fiona Ross for <cite title="Source Title">All About Jazz</cite>
        </figcaption>
      </figure>
    </div>
  );
}

export default Bio;
