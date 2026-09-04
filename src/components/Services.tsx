import "../Services.css";

import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

const serviceCategories = [
  {
    id: "tjanster",
    title: "Digitala lösningar",
    description:
      "Jag hjälper dig att skapa, förbättra eller vidareutveckla tydliga och användarvänliga digitala lösningar.",
    packages: [
      {
        title: "Hemsidor & förbättringar",
        subtitle:
          "För dig som behöver en ny hemsida eller vill utveckla den du redan har",
        text: "Jag hjälper dig att skapa en tydlig, responsiv och användarvänlig hemsida som passar din verksamhet och gör det enkelt för besökaren att hitta rätt.",
        features: [
          "Ny hemsida eller förbättring av befintlig",
          "Responsiv design",
          "Struktur och användarvänlighet",
          "Tillgänglighet och tydlighet",
        ],
        icon: (
          <RiComputerLine aria-hidden="true" />
        ),
      },
      {
        title: "Appar & digitala produkter",
        subtitle:
          "För dig som har en idé du vill utveckla",
        text: "Jag hjälper dig att ta en digital idé från första tanke till en tydlig och fungerande första version som går att testa och utveckla vidare.",
        features: [
          "Strukturering av idé",
          "Prioritering av funktioner",
          "MVP-utveckling",
          "Användarflöden och gränssnitt",
        ],
        icon: (
          <MdOutlineRocketLaunch aria-hidden="true" />
        ),
      },
      {
        title: "Frontend & vidareutveckling",
        subtitle:
          "För dig som redan har en digital lösning",
        text: "Jag hjälper till att vidareutveckla befintliga hemsidor och applikationer med fokus på gränssnitt, funktionalitet och struktur.",
        features: [
          "Nya funktioner",
          "Förbättring av gränssnitt",
          "React och TypeScript",
          "Förbättring av befintlig kod",
        ],
        icon: (
          <IoMdTrendingUp aria-hidden="true" />
        ),
      },
    ],
  },
];
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__header">
        <span className="services__eyebrow">
          Tjänster
        </span>
        <h2>Hur kan jag hjälpa dig?</h2>
      </div>

      {serviceCategories.map(category => (
        <div
          className="services__category"
          key={category.id}
        >
          <div
            className="services__category-header"
            id={category.id}
          >
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>

          <div className="services__grid">
            {category.packages.map(
              servicePackage => (
                <article
                  className="services__card"
                  key={servicePackage.title}
                >
                  <span className="services__icon">
                    {servicePackage.icon}
                  </span>

                  <p className="services__subtitle">
                    {servicePackage.subtitle}
                  </p>

                  <h4>{servicePackage.title}</h4>

                  <p>{servicePackage.text}</p>

                  <ul>
                    {servicePackage.features.map(
                      feature => (
                        <li key={feature}>
                          {feature}
                        </li>
                      ),
                    )}
                  </ul>
                </article>
              ),
            )}
          </div>
        </div>
      ))}

      <div className="services__cta">
        <a
          href="mailto:hej@theresewebbdesign.se"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--primary"
        >
          Kontakta mig
        </a>
      </div>
    </section>
  );
};

export default Services;
