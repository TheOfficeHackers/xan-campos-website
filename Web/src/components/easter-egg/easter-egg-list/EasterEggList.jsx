import React, { useState, useEffect } from "react";
import { getEasterEggs } from "../../../services/website-service";
import EasterEggCard from "../easter-egg-card/EasterEggCard";
import "../easter-egg-list/EasterEggList.css"


function EasterEggList() {
  const [easterEggCards, setEasterEggCards] = useState(null);

  useEffect(() => {
    getEasterEggs()
      .then((easterEggCards) => setEasterEggCards(easterEggCards.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="easteregg-list">
    <div className="container pt-3 pb-4 easteregg-list">
      <div className="row">
          {easterEggCards
            ? easterEggCards.map((easterEggCard) => (
                <div key={easterEggCard.id} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <EasterEggCard {...easterEggCard} />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      </div>
  )
}

export default EasterEggList