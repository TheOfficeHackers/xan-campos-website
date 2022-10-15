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

  console.log(colabos)

  return (
    <div className="">
      {colabos
        ? colabos.map((colabo) => (
            <div className="" key={colabo.id}>
              <ColaboItem {...colabo} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default ColabosList;
