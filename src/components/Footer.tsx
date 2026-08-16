import "../Footer.css";
import logo from "../assets/logo/foretagslogga1.png";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img
          src={logo}
          alt="Therese Webdesign logotyp"
          className="footer__logo"
        />

        <div>
          <p className="footer__name">
            Therese Webdesign
          </p>
          <p className="footer__role">
            Frontend & Webdesign
          </p>
        </div>
      </div>

      <div className="footer__links">
        <p className="footer__heading">
          Snabblänkar
        </p>
        <a href="#home">Hem</a>
        <a href="#services">Tjänster</a>
        <a href="#about">Om mig</a>
        <a href="#projects">Projekt</a>
        <a href="#contact">Kontakt</a>
      </div>

      <div className="footer__services">
        <p className="footer__heading">
          Tjänster
        </p>
        <a href="#services">Webbdesign</a>
        <a href="#services">Frontend</a>
        <a href="#services">Appar</a>
      </div>

      <div className="footer__contact">
        <p className="footer__heading">Kontakt</p>
        <p>hej@theresewebdesign.se</p>
        <p>Varberg / Distans</p>
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/therese-lagerh%C3%A4ll-b13743307/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Thela1989"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <p className="footer__copy">
        © 2026 Therese Webdesign. Alla rättigheter
        förbehållna.
      </p>
    </footer>
  );
};

export default Footer;
