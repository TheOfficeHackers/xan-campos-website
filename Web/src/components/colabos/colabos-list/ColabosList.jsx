import React, { useState, useEffect } from "react";
import { getColabos } from "../../../services/website-service";
import ColaboItem from "../colabo-item/ColaboItem";
import "../colabos-list/ColabosList.css";

function ColabosList() {
  const [colabos, setColabos] = useState(null);

  useEffect(() => {
    getColabos()
      .then((colabos) => setColabos(colabos.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(colabos);

  return (
    <div className="colabos-list">
    <div className="container pt-4 pb-5 colabos-list">
      <div className="row">
          {colabos
            ? colabos.map((colabo) => (
                <div key={colabo.id} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <ColaboItem {...colabo} />
                </div>
              ))
            : "Loading..."}
      </div>
    </div>
    </div>
  );
}

export default ColabosList;
