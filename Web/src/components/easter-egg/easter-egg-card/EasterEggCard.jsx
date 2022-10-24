import React from "react";

function EasterEggCard({ name, pic, link }) {
  return (
    <div
      className="card border-0 rounded-0 text-light bg-dark mb-3"
      style={{ minHeight: "450px" }}
    >
      <img src={pic} className="card-img-top rounded-0" alt={name} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <a href={link}>Contacto en LinkedIn</a>
      </div>
    </div>
  );
}

export default EasterEggCard;
