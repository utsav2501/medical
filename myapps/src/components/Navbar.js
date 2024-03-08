import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
        <div className="container">
          <a className="navbar-brand mx-auto d-lg-none" href="index.html">
            Medic Care
            <strong className="d-block">Health Specialist</strong>
          </a>

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
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#hero">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#timeline">
                  Timeline
                </a>
              </li>

              <a className="navbar-brand d-none d-lg-block" href="index.html">
                Medic Care
                <strong className="d-block">Health Specialist</strong>
              </a>

              <li className="nav-item">
                <a className="nav-link" href="#reviews">
                  Testimonials
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#booking">
                  Booking
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
