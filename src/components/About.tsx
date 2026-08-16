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
            Jag är frontendutvecklare och
            webdesigner med passion för att skapa
            moderna, tydliga och användarvänliga
            webbplatser.
          </p>

          <p>
            Jag tycker om att kombinera design,
            struktur och kod för att skapa
            lösningar som både känns genomtänkta
            och fungerar bra i praktiken.
          </p>

          <p>
            För mig handlar en hemsida inte bara
            om utseende, utan om att skapa en
            trygg och enkel upplevelse för både
            företagaren och besökaren.
          </p>
        </div>
      </div>
    </section>
  );
}
