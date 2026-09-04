import "../Contact.css";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <article className="contact__card">
          <p className="section-eyebrow">
            Kontakt
          </p>

          <h2>
            Har du en{" "}
            <span className="colored_word">
              idé{" "}
            </span>
            du vill ta vidare?
          </h2>

          <p className="contact__description">
            Behöver du hjälp med en hemsida, app
            eller annan digital lösning? Hör gärna
            av dig och berätta vad du vill skapa,
            förbättra eller utveckla, så ser vi
            hur jag kan hjälpa dig vidare.
          </p>

          <div className="contact__info">
            <div className="contact__item">
              <span>E-post</span>

              <a href="mailto:hej@theresewebdesign.se">
                hej@theresewebbdesign.se
              </a>
            </div>

            <div className="contact__item">
              <span>Plats</span>
              <p>Varberg / Distans</p>
            </div>

            <div className="contact__item">
              <span>Fokus</span>

              <p>
                Webbdesign, frontend och tydliga
                digitala lösningar
              </p>
            </div>
          </div>

          <a
            href="mailto:hej@theresewebbdesign.se"
            className="contact__button"
          >
            Kontakta mig
            <FiMail
              className="contact__button-icon"
              aria-hidden="true"
            />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Contact;
