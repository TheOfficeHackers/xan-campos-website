import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/Xancamposlogo.png"

function Header() {
  return (
    <div className="py-2 px-5 fixed-top">
      <div className="d-flex my-4 header-text">
        <div
          className="offcanvas offcanvas-end d-flex align-items-end flex-column bgcolor text-end pe-3 "
          data-bs-scroll="true"
          id="demo"
        >
          <div className="offcanvas-header">
            <i
              type="button"
              className="fa-solid fa-xmark fs-2 border-0 text-light close-btn me-3"
              data-bs-dismiss="offcanvas"
            ></i>
          </div>
          
            <div className="offcanvas-body bgcolor fw-bold d-flex flex-column justify-content-evenly " >
              <ul className="list-unstyled d-flex flex-column">
                <li>
                  <Link to="/" className="text-decoration-none text-light fs-2">
                    <p>HOME</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/discography"
                    className="text-decoration-none text-light fs-2"
                  >
                    <p>DISCOGRAPHY</p>
                  </Link>
                </li>
                <li >
                  <Link
                    to="/concerts"
                    className="text-decoration-none text-light fs-2"
                  >
                    <p>NEXT CONCERTS</p>
                  </Link>
                </li>
                <li >
                  <Link
                    to="/videos"
                    className="text-decoration-none text-light fs-2"
                  >
                    <p>VIDEOS</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-decoration-none text-light fs-2"
                  >
                    <p>CONTACT</p>
                  </Link>
                </li>
              </ul>

              <div className="d-flex justify-content-around">
                <i className="fa-brands fa-facebook-f fs-3 text-light social"></i>
                <i className="fa-brands fa-twitter fs-3 text-light social"></i>
                <i className="fa-brands fa-youtube fs-3 text-light social"></i>
                <i className="fa-brands fa-instagram fs-3 text-light social"></i>
              </div>
            </div>
          
        </div>

        <div className="header-title text-dark">
          <img src={logo} alt="xan campos" style={{width:"70%"}}/>
        </div>

        {/* button */}
        <div className="ms-auto">
          <i
            className="fa fa-bars text-dark fs-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
