import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg nac">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          &lt;Amir /&gt;
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/document/Amirhossein_Resume.pdf" download>
                Resume
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" >
                Projects
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                Education
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/education/software">Software Engineering</Link></li>
                <li><Link className="dropdown-item" to="/education/chemistry">Chemistry</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



export default Navbar;
