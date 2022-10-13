import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="my-3">
      <div className="d-flex">
        <div
          class="offcanvas offcanvas-end d-flex align-items-end flex-column bgcolor text-end pe-3"
          id="demo"
        >
          <div class="offcanvas-header">
            <i
              type="button"
              class="fa-solid fa-xmark fs-2 bgcolor border-0 text-light close-btn me-3"
              data-bs-dismiss="offcanvas"
            ></i>
          </div>
          
            <div class="offcanvas-body bgcolor fw-bold ">
              <ul class="list-unstyled my-5 py-5">
                <li className="my-3">
                  <Link to="/" className="text-decoration-none text-light fs-2">
                    <btn>HOME</btn>
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="/discography"
                    className="text-decoration-none text-light fs-2"
                  >
                    <btn>DISCOGRAPHY</btn>
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="/concerts"
                    className="text-decoration-none text-light fs-2"
                  >
                    <btn>NEXT CONCERTS</btn>
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="/videos"
                    className="text-decoration-none text-light fs-2"
                  >
                    <btn>VIDEOS</btn>
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="/contact"
                    className="text-decoration-none text-light fs-2"
                  >
                    <btn>CONTACT</btn>
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

        <div className="header-title text-danger">
          <h3>XAN CAMPOS</h3>
        </div>

        {/* button */}
        <div className="ms-auto">
          <i
            className="fa fa-bars text-danger fs-3"
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
