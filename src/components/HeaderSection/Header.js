import React from "react";
import logo from "../../assests/Logo.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
          <img className="logo" src={logo} alt="Logo" />

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#a"
                className="nav-link px-2 link-dark border-bottom border-2 border-warning"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link px-2 link-dark">
                Form
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link px-2 link-dark">
                Menu
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            {/* <button type="button" className="btn ">
              Login
            </button> */}
            <button
              type="button"
              className="btn btn-yellow rounded-pill px-4 py-2"
            >
              Log In
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
