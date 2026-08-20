import { Title, Text } from "@mantine/core";
import "../Hero.css";
import heroImage from "../assets/images/grow1.png";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiFigma,
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Frontendutvecklare & Webdesigner
          </p>

          <Title
            className="hero__title"
            order={1}
          >
            Tydliga och användarvänliga
            webbplatser för{" "}
            <span className="colored_word">
              Småföretag
            </span>
          </Title>

          <Text className="hero__text">
            För mig handlar bra digitala lösningar
            om att de ska vara tydliga, enkla att
            använda och faktiskt fylla ett behov.
            Därför hjälper jag företag att skapa
            webbplatser och appar som är anpassade
            efter just deras verksamhet.
          </Text>

          <div className="hero__buttons">
            <a
              href="https://calendar.app.google/tA5U3EA2UXkc5hoU6"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
            >
              Boka kostnadsfritt möte
            </a>
            <a
              href="#projects"
              className="button button--secondary"
            >
              Se projekt
            </a>
          </div>

          <div className="hero__skills">
            <div className="hero__skill">
              <SiReact />
              <span>React</span>
            </div>

            <div className="hero__skill">
              <SiTypescript />
              <span>TypeScript</span>
            </div>

            <div className="hero__skill">
              <SiJavascript />
              <span>JavaScript</span>
            </div>

            <div className="hero__skill">
              <SiHtml5 />
              <span>HTML & CSS</span>
            </div>

            <div className="hero__skill">
              <SiGit />
              <span>Git</span>
            </div>

            <div className="hero__skill">
              <SiFigma />
              <span>Figma</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src={heroImage}
            alt="Bild på en grön växt i kruka som symboliserar tillväxt och utveckling"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}
