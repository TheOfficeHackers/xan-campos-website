import React, { useState, useEffect } from 'react';
import { getWorks } from '../../../services/website-service';
import WorkItem from '../work-item/WorkItem';

function WorksList() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getWorks()
      .then(works => setWorks(works))
      .catch(err => console.error(err));
  });

  return (
    <div className="row row-cols-12 row-cols-sm-6 row-cols-md-3">
      {works.map((work) => (
        <div className="col" key={work.id}>
          <WorkItem {...work} />
        </div>
      ))}
    </div>
  );
};

export default WorksList