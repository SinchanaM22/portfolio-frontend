import profile from "../assets/profile.jpg";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

function Hero() {

  return (

    <div
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "60px 20px",
        flexWrap: "wrap",
        background:
          "linear-gradient(to right,#0f172a,#1e293b)"
      }}
    >

      {/* LEFT SECTION */}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          flex: "1",
          minWidth: "300px"
        }}
      >

        <p style={{
          color: "#38bdf8",
          fontSize: "22px",
          marginBottom: "10px"
        }}>
          Hello, I'm
        </p>

        <h1 style={{
          fontSize: "clamp(40px, 8vw, 70px)",
          marginBottom: "20px",
          color: "white"
        }}>
          Sinchana M
        </h1>

        <TypeAnimation
          sequence={[
            "Java Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Problem Solver",
            2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{
            fontSize: "clamp(20px, 4vw, 32px)",
            color: "#38bdf8",
            fontWeight: "bold"
          }}
        />

        <p style={{
          fontSize: "clamp(16px, 2vw, 22px)",
          lineHeight: "42px",
          maxWidth: "700px",
          color: "#cbd5e1",
          marginTop: "30px"
        }}>
          Information Science and Engineering graduate passionate
          about developing scalable web applications and modern
          software solutions using Java Full Stack technologies.

          <br /><br />

          Skilled in Java, Spring Boot, React.js, MySQL,
          frontend development and cloud-native tools with
          strong interest in backend architecture and UI design.

          <br /><br />

          Familiar with Docker, Kubernetes, Jenkins, Git and GitHub.
          Enthusiastic about learning emerging technologies,
          solving real-world problems and building impactful projects.
        </p>

        {/* BUTTONS */}

        <div style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            style={buttonStyle}
          >
            Download Resume
          </a>

        </div>

      </motion.div>

      {/* RIGHT IMAGE */}

      <motion.img
        src={profile}
        alt="profile"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        style={{
          width: "340px",
          maxWidth: "90vw",
          height: "340px",
          maxHeight: "90vw",
          borderRadius: "50%",
          objectFit: "cover",
          border: "5px solid #38bdf8",
          boxShadow: "0px 0px 40px #38bdf8",
          marginTop: "40px"
        }}
      />

    </div>

  );
}

const buttonStyle = {
  backgroundColor: "#38bdf8",
  color: "black",
  padding: "15px 30px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px",
  boxShadow: "0px 0px 20px rgba(56,189,248,0.5)",
  transition: "0.3s"
};

export default Hero;