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
            Har du en idé du vill ta vidare?
          </h2>

          <p className="contact__description">
            Behöver du en ny hemsida, vill
            förbättra den du redan har eller har
            en idé du vill utveckla? Hör gärna av
            dig så pratar vi om vad du behöver och
            hur jag kan hjälpa dig vidare. Första
            samtalet är kostnadsfritt.
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
            Skicka mejl
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
