import "../About.css";
import aboutImage from "../assets/images/profile2.webp";
import {
  UserRound,
  BriefcaseBusiness,
  Accessibility,
} from "lucide-react";
import { FiEye } from "react-icons/fi";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__hero">
          <div className="about__content">
            <p className="section-eyebrow">
              Om mig
            </p>

            <h2>
              Mer än kod – jag skapar digitala
              lösningar som gör skillnad
            </h2>

            <p className="about__lead">
              Jag är frontendutvecklare och
              webbdesigner med ett öga för
              detaljer, struktur och
              användarvänlighet. Mitt mål är att
              skapa lösningar som inte bara ser
              bra ut, utan som faktiskt fyller ett
              behov och gör vardagen enklare.
            </p>
          </div>

          <div className="about__image-wrapper">
            <img
              src={aboutImage}
              alt="Therese, frontendutvecklare och webbdesigner"
              className="about__image"
            />
          </div>
        </div>

        <div className="about__cards">
          <article className="about-card">
            <div className="about-card__header">
              <p className="about-card__eyebrow">
                Vem jag är
              </p>

              <div className="about-card__icon-wrapper">
                <UserRound className="about-card__icon" />
              </div>
            </div>

            <h3>
              Frontendutvecklare & webbdesigner
            </h3>

            <p>
              Jag gillar att kombinera teknik,
              design och användarvänlighet för att
              skapa moderna och genomtänkta
              hemsidor och appar.
            </p>

            <p>
              För mig är det viktigt att det jag
              bygger är tydligt, användbart och
              fyller ett verkligt behov.
            </p>
            <div className="about-card__tags">
              <span>Tydlighet</span>
              <span>Kreativitet</span>
              <span>Problemlösning</span>
              <span>Användarfokus</span>
            </div>
          </article>

          <article className="about-card">
            <div className="about-card__header">
              <p className="about-card__eyebrow">
                Erfarenhet
              </p>

              <div className="about-card__icon-wrapper">
                <BriefcaseBusiness className="about-card__icon" />
              </div>
            </div>

            <h3>LIA på Region Halland</h3>

            <p>
              Under min LIA på Region Halland
              arbetade jag med en intern
              webbapplikation. Jag byggde
              formulär, utvecklade logik för
              självincheckning, hanterade
              API-anrop och förbättrade strukturen
              i React-komponenter.
            </p>

            <div className="about-card__tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Mantine</span>
              <span>React Query</span>
              <span>Git</span>
            </div>
          </article>

          <article className="about-card about-card--accessibility">
            <div className="about-card__accessibility-content">
              {" "}
              <div className="about-card__header">
                <p className="about-card__eyebrow">
                  Tilgänglighet
                </p>

                <div className="about-card__icon-wrapper">
                  <FiEye className="about-card__icon" />
                </div>
              </div>
              <h3>Tillgänglighet för alla</h3>
              <p>
                Tillgänglighet handlar om att alla
                ska kunna ta del av och använda en
                hemsida på ett enkelt och tryggt
                sätt.
              </p>
              <p>
                Därför vill jag skapa tydliga och
                genomtänkta digitala lösningar,
                med målet att göra webben mer
                tillgänglig och inkluderande för
                alla.
              </p>
              <div className="about-card__tags">
                <span>Kontrast</span>
                <span>Navigation</span>
                <span>Tydlig struktur</span>
                <span>Inkludering</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
