import React, { useState, useEffect } from "react";
import { getColabos } from "../../../services/website-service";
import ColaboItem from "../colabo-item/ColaboItem";

function ColabosList() {
  const [colabos, setColabos] = useState(null);

  useEffect(() => {
    getColabos()
      .then((colabos) => setColabos(colabos.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(colabos);

  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {colabos
            ? colabos.map((colabo) => (
                <div key={colabo.id}>
                  <ColaboItem {...colabo} />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
}

export default ColabosList;
