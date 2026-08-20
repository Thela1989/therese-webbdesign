import "../Projects.css";

import WeatherApp from "../assets/images/weather-app.webp";
import Portfolio from "../assets/images/portfolio.webp";
import Theresewebbdesign from "../assets/images/theresewebbdesign.webp";
import MovieApp from "../assets/images/movie-app.webp";

const projects = [
  {
    title: "Therese Webdesign",
    category: "Företagshemsida",
    text: "En modern och tydlig företagshemsida för mina tjänster inom webbdesign och frontendutveckling.",
    tags: ["React", "Webbdesign", "UX"],
    image: Theresewebbdesign,
    liveUrl: "DIN-PUBLICERADE-LÄNK",
  },
  {
    title: "Portfolio",
    category: "Personlig hemsida",
    text: "Min personliga portfolio där jag visar mina projekt, min erfarenhet och min profil som frontendutvecklare.",
    tags: ["React", "TypeScript", "CSS"],
    image: Portfolio,
    liveUrl:
      "https://portfolio-ecru-nine-83.vercel.app/",
  },
  {
    title: "Movie App",
    category: "Webbapp",
    text: "En filmapp där användaren kan söka efter filmer och ta del av information om olika titlar.",
    tags: ["React", "TypeScript", "API"],
    image: MovieApp,
  },
  {
    title: "Weather App",
    category: "Webbapp",
    text: "En väderapp där användaren kan söka efter en plats och se aktuell väderinformation.",
    tags: ["React", "API", "CSS"],
    image: WeatherApp,
    liveUrl: "DIN-PUBLICERADE-LÄNK",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p className="section-eyebrow">Projekt</p>
        <h2>Utvalda projekt</h2>
        <p>
          Här visar jag några projekt och idéer
          jag har arbetat med, där fokus ligger på
          tydlighet, användarvänlighet och
          genomtänkta digitala lösningar.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map(project => (
          <article
            className="project-card"
            key={project.title}
          >
            <div className="project-card__image">
              <img
                src={project.image}
                alt={`Förhandsvisning av ${project.title}`}
              />

              <span>{project.category}</span>
            </div>

            <div className="project-card__content">
              <h3>{project.title}</h3>
              <p>{project.text}</p>

              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href="#contact"
                className="project-card__link"
              ></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
