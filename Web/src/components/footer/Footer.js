import React from "react";
import footerpic from "../../images/footer.png";

function Footer() {
  return (
    <div className="position-relative">
      <img src={footerpic} alt="footer"  style={{width: "100%" }}/>
      <div className="text-center text-light fs-2 position-absolute top-50 start-50 translate-middle">
        <div className="mb-3">
          <span> Join the Newsletter </span>
          <br />
          <span className="fs-6"> & stay in touch with Xan Campos</span>
        </div>
        <div className="d-flex justify-content-center">
          <input className="border-0" type="text" />
          <input class="btn btn-dark rounded-0" type="button" value="Join" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
