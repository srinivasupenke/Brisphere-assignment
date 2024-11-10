import React, { useState } from "react";
import "../assets/styles/Headers.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="nav-items">
        <Link to="/">
          <h1>Brisphere</h1>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#discover">Discover</a>
          <a href="#services">Services</a>
          <Link to="/booking">Book Now</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
