function Certifications() {

  const certs = [
    "HTML5 Certification - Infosys Springboard",
    "Python Basics - Infosys Springboard",
    "Python Essentials - Cisco",
    "Networking Basics - Cisco",
    "Hackathon Participation - SJBIT Bangalore"
  ];

  return (

    <div
      id="certifications"
      style={{
        padding: "80px"
      }}
    >

      <h1 style={{
        fontSize: "50px",
        marginBottom: "40px",
        textAlign: "center"
      }}>
        Certifications
      </h1>

      <div style={{
        display: "grid",
        gap: "20px"
      }}>

        {certs.map((cert, index) => (

          <div
            key={index}
            style={{
              backgroundColor: "#1e293b",
              padding: "25px",
              borderRadius: "15px"
            }}
          >
            {cert}
          </div>

        ))}

      </div>

    </div>
  );
}

export default Certifications;