import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-music"></i>
            Tom's Music
          </a>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../Chords/ChordsContainer.jsx">
                  Chords
                </Link>
              </li>
              <li className="nav-item dropdown lessons">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lessons
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Guitar
                    </a>
                    <a className="dropdown-item" href="#">
                      Piano
                    </a>
                    <a className="dropdown-item" href="#">
                      Ukelele
                    </a>
                    <a className="dropdown-item" href="#">
                      Harmonic
                    </a>
                    <a className="dropdown-item" href="#">
                      Bass
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown tools">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Tuner
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="../Metronome/MetronomeContainer.jsx"
                    >
                      Metronome
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="../Composer/ComposerContainer.jsx"
                    >
                      Piano composer
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Piano chord creator
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="nav-item-login">
            <Link className="nav-link-login" to="/">
              <button type="button" className="btn-login">
                <i className="fa-solid fa-house-user"></i>
              </button>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <button className="btn-menu">
              <i className="fa-solid fa-bars"></i>
            </button>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
