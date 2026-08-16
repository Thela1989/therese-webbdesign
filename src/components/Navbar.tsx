import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "../Navbar.css";
import logo from "../assets/logo/foretagslogga1.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="#home" className="navbar__brand">
          <img
            src={logo}
            alt="Therese Webdesign logotyp"
            className="navbar__logo"
          />

          <div>
            <h3 className="navbar__name">
              THERESE
            </h3>
            <p className="navbar__role">
              WEBBDESIGN
            </p>
          </div>
        </a>
        <button
          className="navbar__toggle"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen ? "Stäng meny" : "Öppna meny"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
        <ul
          className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}
        >
          <li>
            <a href="#home" onClick={closeMenu}>
              Hem
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={closeMenu}
            >
              Tjänster
            </a>

            <a href="#about" onClick={closeMenu}>
              Om mig
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
            >
              Projekt
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
