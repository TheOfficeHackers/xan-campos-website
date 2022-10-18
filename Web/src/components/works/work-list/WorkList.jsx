import React, { useState, useEffect } from "react";
import { getWorks } from "../../../services/website-service";
import WorkItem from "../work-item/WorkItem";

function WorkList({ className }) {
  const [works, setWorks] = useState(null);

  useEffect(() => {
    getWorks()
      .then((works) => setWorks(works.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(works);

  return (
    <>
      <div className="container">
        <div className="text-danger display-3 mt-2 ">Leader</div>
      </div>
      <div className={className}>
        {works
          ? works.map((work) => (
              <div className="" key={work.id}>
                <WorkItem {...work} />
              </div>
            ))
          : "Loading..."}
      </div>
    </>
  );
}

WorkList.defaultProps = {
  className: "",
};

export default WorkList;
