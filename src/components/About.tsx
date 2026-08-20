import "../About.css";
import aboutImage from "../assets/images/profile2.webp";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__image-wrapper">
          <img
            src={aboutImage}
            alt="Therese, frontendutvecklare och webdesigner"
            className="about__image"
          />
        </div>

        <div className="about__content">
          <p className="section-eyebrow">
            Om mig
          </p>

          <h2>Hej! Jag heter Therese</h2>

          <p>
            För mig är det viktigt att design och
            struktur hänger ihop, så att det blir
            enkelt för besökaren att förstå
            innehållet och hitta rätt. En bra
            hemsida ska inte b
          </p>

          <p>
            För mig är det viktigt att design och
            struktur hänger ihop, så att det blir
            enkelt för besökaren att förstå
            innehållet och hitta rätt.
          </p>

          <p>
            En bra hemsida ska inte bara se bra
            ut. Den ska också kännas enkel att
            använda och hjälpa företaget att nå
            fram med det de vill erbjuda.
          </p>
          <p>
            Under min LIA på Region Halland fick
            jag arbeta med en riktig
            webbapplikation tillsammans med andra
            utvecklare. Det gav mig en bättre
            förståelse för hur utveckling fungerar
            i ett team och hur viktigt det är att
            bygga lösningar som är tydliga och
            enkla för användaren.
          </p>
        </div>
      </div>
    </section>
  );
}
