import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (

    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "Arial",
        position: "relative",
        zIndex: "1"
      }}
    >

     

      <Navbar />

      <Hero />

      <Skills />

      <Education />

      <Internship />

      <Projects />

      <Certifications />

      <Contact />

      <Footer />

    </div>

  );
}

export default App;