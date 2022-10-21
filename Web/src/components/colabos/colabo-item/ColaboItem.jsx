import React from "react";

function ColaboItem({
  title,
  mainArtist,
  project,
  musicians,
  releaseYear,
  cover,
  recordLabel,
}) {
  return (
    <div className="container">
    
    <div className="col-6">
      <div className="card border-0 rounded-0 text-light bg-dark">
        <img src={cover} className="card-img-top rounded-0" alt={title} />
        <div className="card-body">
          <h5 className="card-title fw-bold">
            {title}({releaseYear})
          </h5>
          <h6 className="text-secondary">{mainArtist}</h6>
          <h6>{recordLabel}</h6>
          <br />

          {musicians ? (
            musicians.map((musician, i) => <h6 key={i}>{musician}</h6>)
          ) : (
            <li></li>
          )}
        </div>
      </div>
    
      </div>
    </div>
  );
}

export default ColaboItem;
