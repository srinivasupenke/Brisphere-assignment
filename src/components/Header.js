import React from "react";
import "../assets/styles/Headers.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <a href="#brisphere">Brisphere</a>
        </Link>
      </h1>
      <nav>
        <a href="#discover">Discover</a>
        <a href="#services">Services</a>

        <a href="#book">Book Now</a>
      </nav>
    </header>
  );
}

export default Header;
