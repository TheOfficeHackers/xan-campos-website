import React, { useState, useEffect } from "react";
import { getSideman } from "../../../services/website-service";
import SidemanItem from "../sideman-item/SidemanItem"


function SidemanList() {
  const [sidemanworks, setSidemanWorks] = useState(null);

  useEffect(() => {
    getSideman()
      .then((sidemanworks) => setSidemanWorks(sidemanworks.data))
      .catch((err) => console.error(err));
  }, []);



  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {sidemanworks
            ? sidemanworks.map((sidemanwork) => (
                <div key={sidemanwork.id}>
                  <SidemanItem {...sidemanwork} />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
}

export default SidemanList;