import { motion } from "framer-motion";

function Projects() {

 const projects = [

  {
    title: "Blind Assistance System Using YOLOv8",
    desc:
      "AI based assistive system developed for visually impaired people using object detection and navigation support.",
    tech:
      "YOLOv8, Python, OpenCV, Deep Learning",
    github:
      "https://github.com/SinchanaM22/Blind-Assistance-System-using-YOLOv8.git"
  },

  {
    title: "College Help Chatbot",
    desc:
      "Java based chatbot developed to assist students with academic and college related queries.",
    tech:
      "Java, Spring Boot, MySQL",
    github:
      "https://github.com/SinchanaM22/college-help-chatbot.git"
  },

  {
    title: "Travel Website",
    desc:
      "Responsive travel website with modern user interface and dynamic layouts.",
    tech:
      "HTML, CSS, JavaScript, React",
    github:
      "https://github.com/SinchanaM22/Travel-website.git"
  }

];
  return (

    <div
      id="projects"
      style={{
        padding: "80px"
      }}
    >

      <h1 style={{
        fontSize: "50px",
        marginBottom: "40px",
        textAlign: "center"
      }}>
        Projects
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "30px"
      }}>

        {projects.map((project, index) => (

          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0px 0px 20px rgba(0,0,0,0.3)"
            }}
          >

            <h2>{project.title}</h2>

            <p style={{
              marginTop: "20px",
              lineHeight: "30px"
            }}>
              {project.desc}
            </p>
            <p
  style={{
    marginTop: "15px",
    color: "#38bdf8"
  }}
>
  Tech Stack: {project.tech}
</p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#38bdf8"
              }}
            >
              View GitHub Code
            </a>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Projects;