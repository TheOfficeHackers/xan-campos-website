import React from "react";
import footerpic from "../../images/footer.png";
import "./Footer.css" 

function Footer() {
  return (
    <>
      
      <div className="footer">
      <div className="background-footer footer ">
        <div className="footer-text text-center mb-5">
          <span> Join the Newsletter </span>
          <br />
          <span className="fs-6"> & stay in touch with Xan Campos</span>
        </div>
        <div className="d-flex justify-content-center">
          <input className="border-0" type="text" />
          <input class="btn btn-dark rounded-0" type="button" value="Join" />
        </div>
        <div>
          <i className="fa-brands fa-facebook-f fs-3 text-light social-footer mx-2"></i>
          <i className="fa-brands fa-twitter fs-3 text-light social-footer mx-2"></i>
          <i className="fa-brands fa-youtube fs-3 text-light social-footer mx-2"></i>
          <i className="fa-brands fa-instagram fs-3 text-light social-footer mx-2"></i>
        </div>
        <div className="footer-text mt-5 m">
          Website made by The Office Hackers:
          <a href="https://github.com/marialalin" className="text-decoration-none footer-text"> María Vence</a> & <a href="https://github.com/Lechuza7" className="text-decoration-none footer-text">Marc Cuesta</a>.
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
