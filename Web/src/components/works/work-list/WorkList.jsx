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
          <div className="m-0 vh-50 row justify-content-center">
            <div className="col-auto mt-5">
              {/* <img
                className=" justify-content-center"
                src="http://lepassetempsderose.l.e.pic.centerblog.net/9d6e9cbb.gif" style={{width:"15rem"}}
                alt="loading"
                 
              /> */}
              <span className="spinner-grow me-1"> </span><span className="spinner-grow me-1"></span><span className="spinner-grow me-1"></span>
              <div className="row justify-content-center display-6 mt-4">Loading...</div>
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
