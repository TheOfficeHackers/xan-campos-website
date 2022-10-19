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
      <div className="bgcolor">
        
          <div className=" bg-primary">
            <div className="text-light display-3 mt-2">Co-leader</div>
          </div>
          <div>
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
