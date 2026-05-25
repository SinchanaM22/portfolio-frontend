function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python Basics",
    "Java",
    "React.js",
    "MySQL",
    "JDBC",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "GitHub"
  ];

  return (

    <div
      style={{
        padding: "90px 20px",
        backgroundColor: "#0f172a",
        color: "white",
        textAlign: "center"
      }}
    >

      <h1 style={{
        fontSize: "50px",
        marginBottom: "50px"
      }}>
        Skills
      </h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "1000px",
        margin: "auto"
      }}>

        {skills.map((skill, index) => (

          <div
            key={index}
            style={{
              padding: "15px 30px",
              borderRadius: "30px",
              background:
                "linear-gradient(to right,#38bdf8,#0ea5e9)",
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
              boxShadow: "0px 0px 15px rgba(56,189,248,0.4)",
              transition: "0.3s"
            }}
          >
            {skill}
          </div>

        ))}

      </div>

    </div>
  );
}

export default Skills;