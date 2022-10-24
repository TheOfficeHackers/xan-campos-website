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
      <div className="text-danger fw-bold fs-4">
        {moment(date).format("MMM DD")}, {hour}h.
      </div>
      <div className="fw-bold fs-5">{band} </div>
      <div className="text-secondary fw-bold fs-5">
        {event} @ {venue}, {city}
      </div>
      <div className="text-secondary fs-5">{country}</div>
      <span className="border-bottom mt-4 mb-2 " style={{ width: "100px" }}></span>
      
      
    </div>
  );
}
