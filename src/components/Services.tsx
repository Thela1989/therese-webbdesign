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
      "För dig som behöver en ny hemsida eller vill förbättra den du redan har.",
    packages: [
      {
        title: "Mini-analys",
        subtitle:
          "För dig som redan har en hemsida",
        text: "Jag går igenom din hemsida och lyfter fram vad som kan bli tydligare och enklare för dina besökare.",
        features: [
          "Genomgång av din hemsida",
          "3 konkreta förbättringsförslag",
          "Fokus på tydlighet, mobil och användarvänlighet",
        ],
        icon: <FiSearch aria-hidden="true" />,
      },
      {
        title: "Webbstart",
        subtitle:
          "För dig som behöver en mindre hemsida",
        text: "För dig som vill komma igång med en tydlig hemsida där kunder enkelt kan förstå vad du erbjuder och kontakta dig.",
        features: [
          "Responsiv hemsida",
          "Tydlig presentation av ditt företag",
          "Kontaktsektion",
        ],
        icon: (
          <RiComputerLine aria-hidden="true" />
        ),
      },
      {
        title: "Webbpaket",
        subtitle:
          "För dig som behöver en större hemsida",
        text: "För dig som behöver mer utrymme för att presentera ditt företag, dina tjänster och ditt innehåll.",
        features: [
          "Flera sidor eller sektioner",
          "Design anpassad efter ditt företag",
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
      "För dig som har en appidé eller digital idé och vill ta den vidare till en första fungerande version.",
    packages: [
      {
        title: "Idé och MVP-planering",
        subtitle:
          "För dig som vill få struktur på din idé",
        text: "Vi går igenom vem lösningen är till för, vilket problem den ska lösa och vad som behöver finnas med i en första version.",
        features: [
          "Genomgång av idén",
          "Målgrupp och behov",
          "Prioritering av funktioner",
          "Förslag på första MVP",
        ],
        icon: (
          <IoBulbOutline aria-hidden="true" />
        ),
      },
      {
        title: "Första MVP-versionen",
        subtitle:
          "För dig som vill börja testa din idé",
        text: "Jag bygger en första fungerande version med de viktigaste delarna, så att idén går att testa och utveckla vidare.",
        features: [
          "Grundläggande användarflöde",
          "Responsivt gränssnitt",
          "De viktigaste funktionerna",
        ],
        icon: (
          <MdOutlineRocketLaunch aria-hidden="true" />
        ),
      },
      {
        title: "Vidareutveckling",
        subtitle:
          "För dig som redan har en digital lösning",
        text: "Jag hjälper dig att förbättra det som redan finns genom att utveckla funktioner, gränssnitt eller struktur.",
        features: [
          "Nya funktioner",
          "Förbättrat gränssnitt",
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
