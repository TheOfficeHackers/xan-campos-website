import React from 'react'

function CoverPicture({src}) {
  return (
    <div style={{ height: "100" }}>
    <img
      src={src}
      alt="xan-campos"
      style={{ position: "relative", width: "100%" }}
    />
    {/* <h2
      className="header-text"
      style={{
        position: "absolute",
        fontSize: "10rem",
        color: "white",
        top: "1000px",
        right: "200px",
      }}
    >
      WORKS
    </h2> */}
  </div>
  )
}

export default CoverPicture