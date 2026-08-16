import { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const StartPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default StartPage;
