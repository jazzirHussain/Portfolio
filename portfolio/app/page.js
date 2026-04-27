import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <p style={{ display: "none" }}>
        Jazzir Hussain is a full stack engineer specializing in React, Node.js, AWS, and scalable production systems. He has
        built SaaS platforms, mobile apps, and IoT systems with hundreds of daily active users and is open to software
        engineering roles in Germany.
      </p>

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <CaseStudies />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
