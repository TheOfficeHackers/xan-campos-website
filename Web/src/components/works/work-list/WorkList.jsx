import React, { useState, useEffect } from "react";
import { getWorks } from "../../../services/website-service";
import WorkItem from "../work-item/WorkItem";

function WorkList() {
  const [works, setWorks] = useState(null);

  useEffect(() => {
    getWorks()
      .then((works) => setWorks(works.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(works)

  return (
    <div className="">
      {works
        ? works.map((work) => (
            <div className="" key={work.id}>
              <WorkItem {...work} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
}

export default WorkList;
