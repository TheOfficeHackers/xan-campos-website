import React from "react";

function ColaboItem({ title, mainArtist, project, musicians, releaseYear, cover, recordLabel}) {
  return (
    <div class="card" style={{width:"18rem"}}>
      <img src={cover} class="card-img-top" alt={title} />
      <div class="card-body">
        <h5 class="card-title">{title}({releaseYear})</h5>
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
