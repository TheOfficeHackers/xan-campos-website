import React, { useState, useEffect } from "react";
import { getSideman } from "../../../services/website-service";
import SidemanItem from "../sideman-item/SidemanItem";
import "../sideman-list/SidemanList.css";


function SidemanList() {
  const [sidemanWorks, setSidemanWorks] = useState(null);

  useEffect(() => {
    getSideman()
      .then((sidemanWorks) => setSidemanWorks(sidemanWorks.data))
      .catch((err) => console.error(err));
  }, []);



  return (
    <div className="sideman-list">
    <div className="container pt-3 pb-2 sideman-list">
      <div className="row">
          {sidemanWorks
            ? sidemanWorks.map((sidemanWork) => (
                <div key={sidemanWork.id} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <SidemanItem {...sidemanWork} />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      </div>
  );
}

export default SidemanList;