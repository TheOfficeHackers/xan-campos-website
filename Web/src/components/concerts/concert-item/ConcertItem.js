import React from "react";
import moment from "moment";

export default function ConcertItem({
  date,
  hour,
  band,
  venue,
  country,
  city,
  event,
}) {
  return (
    
    <div className="card border-0 my-3 t-3">
    
      <div className="text-danger fw-bold" >
        {moment(date).format("MMM DD")}, {hour}h.
      </div>
      <div className="fw-bold">{band} </div>
      <div className="text-secondary fw-bold">
        {event} @ {venue}, {city}
      </div>
      <div className="text-secondary">{country}</div>
      <span className="border-bottom mt-3" style={{width:"100px"}}></span>
    </div>
   
  );
}
