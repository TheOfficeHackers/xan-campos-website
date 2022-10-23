import React, { useState, useEffect } from "react";
import { getWorksXanTrio, getWorksXan } from "../../../services/website-service";
import WorkItem from "../work-item/WorkItem";


function WorkList({ className }) {
  const [worksXanTrio, setWorksXanTrio] = useState(null);
  const [worksXan, setWorksXan] = useState(null);

  useEffect(() => {
    getWorksXanTrio()
      .then((worksXanTrio) => setWorksXanTrio(worksXanTrio.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getWorksXan()
      .then((worksXan) => setWorksXan(worksXan.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(worksXanTrio);

  return (
    <div>
      <div className={className}>
        {worksXanTrio
          ? worksXanTrio.map((work) => (
              <div className="" key={work.id}>
                <WorkItem {...work} />
              </div>
            ))
          : "Loading..."}
      </div>

      <div className={className}>
        {worksXan
          ? worksXan.filter((work) => work.title === "ESD").map((work) => (
              <div className="" key={work.id}>
                <WorkItem {...work} />
              </div>
            ))
          : <></>}
      </div>
    </div>
  );
}

WorkList.defaultProps = {
  className: "",
};

export default WorkList;
