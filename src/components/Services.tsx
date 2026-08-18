import "../Services.css";
import { IoBulbOutline } from "react-icons/io5";
import { PiPackageDuotone } from "react-icons/pi";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const serviceCategories = [
  {
    id: "webb",
    title: "Webbplatser",
    description:
      "För dig som behöver en ny hemsida eller vill förbättra en befintlig.",
    packages: [
      {
        title: "Mini-analys",
        subtitle:
          "För dig som redan har en hemsida",
        text: "Jag går igenom din nuvarande hemsida och ger konkreta förbättringsförslag.",
        features: [
          "Genomgång av din hemsida",
          "3 konkreta förbättringsförslag",
          "Fokus på mobil och användarvänlighet",
        ],
        icon: <FiSearch aria-hidden="true" />,
      },
      {
        title: "Webbstart",
        subtitle:
          "För dig som behöver en enkel hemsida",
        text: "Ett mindre hemsidepaket för en tydlig och professionell närvaro online.",
        features: [
          "Responsiv hemsida",
          "Modern design",
          "Kontaktsektion",
        ],
        icon: (
          <RiComputerLine aria-hidden="true" />
        ),
      },
      {
        title: "Webbpaket",
        subtitle:
          "För dig som behöver en mer komplett hemsida",
        text: "En större webbplats med fler sektioner och mer anpassat innehåll.",
        features: [
          "Flera sidor eller sektioner",
          "Anpassad design",
          "Mobilanpassning",
          "Kontaktformulär",
        ],
        icon: (
          <PiPackageDuotone aria-hidden="true" />
        ),
      },
    ],
  },
  {
    id: "appar",
    title: "Appar och digitala lösningar",
    description:
      "För dig som har en idé och vill ta fram en tydlig och fungerande digital lösning.",
    packages: [
      {
        title: "Idé och MVP-planering",
        subtitle:
          "För dig som vill strukturera din idé",
        text: "Vi går igenom målgrupp, behov och vilka funktioner som bör ingå först.",
        features: [
          "Genomgång av idén",
          "Prioritering av funktioner",
          "Förslag på MVP-upplägg",
        ],
        icon: (
          <IoBulbOutline aria-hidden="true" />
        ),
      },
      {
        title: "Första MVP-versionen",
        subtitle:
          "För dig som vill testa idén i praktiken",
        text: "Jag bygger en enklare första version med de viktigaste funktionerna.",
        features: [
          "Grundläggande användarflöde",
          "Responsivt gränssnitt",
          "Utvalda kärnfunktioner",
        ],
        icon: (
          <MdOutlineRocketLaunch aria-hidden="true" />
        ),
      },
      {
        title: "Vidareutveckling",
        subtitle:
          "För dig som redan har en digital produkt",
        text: "Jag hjälper dig att förbättra, bygga ut eller modernisera en befintlig lösning.",
        features: [
          "Nya funktioner",
          "Förbättrat gränssnitt",
          "Kodförbättringar",
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
          href="https://calendar.app.google/tA5U3EA2UXkc5hoU6"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--primary"
        >
          Boka kostnadsfritt möte
        </a>
      </div>
    </section>
  );
};

export default Services;
