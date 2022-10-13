import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div class="offcanvas offcanvas-end" id="demo">
          <div class="offcanvas-header bgcolor">
            <button
              type="button"
              class="btn-close text-reset "
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div class="offcanvas-body bgcolor fw-bold">
            <ul class="list-unstyled">
              <li className="my-3">
                <Link
                  to="/discography"
                  className="text-decoration-none text-dark fs-3"
                >
                  <btn>DISCOGRAPHY</btn>
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/concerts"
                  className="text-decoration-none text-dark fs-3"
                >
                  <btn>NEXT CONCERTS</btn>
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/videos"
                  className="text-decoration-none text-dark fs-3"
                >
                  <btn>VIDEOS</btn>
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/contact"
                  className="text-decoration-none text-dark fs-3"
                >
                  <btn>CONTACT</btn>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-title">
          <h3>Xan Campos</h3>
        </div>
        <div><i className="fa fa-bars text-danger fs-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo">
            
        </i> 
        </div>
      </div>
    </>
  );
}

export default Header;
