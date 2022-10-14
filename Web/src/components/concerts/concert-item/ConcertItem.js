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
    
    <div className="card">
    
      <div>
        {moment(date).format("MMM DD")}, {hour}h.
      </div>
      <div>{band} </div>
      <div>
        {event} @ {venue}, {city}
      </div>
      <div>{country}</div>
    </div>
   
  );
}
