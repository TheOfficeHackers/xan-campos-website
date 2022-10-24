import React, { useState, useEffect } from "react";
import {
  getWorksXanTrio,
  getWorksXan,
} from "../../../services/website-service";
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
        {worksXanTrio ? (
          worksXanTrio.map((work) => (
            <div className="" key={work.id}>
              <WorkItem {...work} />
            </div>
          ))
        ) : (
          <div className="m-0 vh-100 row justify-content-center">
            <div className="col-auto">
              <img
                className=" justify-content-center"
                src="https://media.giphy.com/media/FMW20upY7JfTRfhVq7/giphy.gif" style={{width:"40rem"}}
                alt="loading"
              />
            </div>
          </div>
        )}
      </div>

      <div className={className}>
        {worksXan ? (
          worksXan
            .filter((work) => work.title === "ESD")
            .map((work) => (
              <div className="" key={work.id}>
                <WorkItem {...work} />
              </div>
            ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

WorkList.defaultProps = {
  className: "",
};

export default WorkList;
