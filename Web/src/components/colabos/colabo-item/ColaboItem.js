import React from "react";

function ColaboItem({ title, mainArtist, project, musicians, releaseYear, cover, recordLabel}) {
  return (
    <div className="card" style={{width:"18rem"}}>
      <img src={cover} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}({releaseYear})</h5>
        <p>{mainArtist}</p>
        <p>{project}</p>
        <p>{recordLabel}</p>
        <br />
        
        <ul>
        {musicians ? musicians.map((musician, i) => (
          <li key={i}>{musician}</li>
         ))
         : <li></li>
         }
        
        </ul>
        
      </div>
    </div>
  );
}

export default ColaboItem;
