function Education() {

  const education = [

  {
    year: "2022 - 2026",
    title: "B.E - Information Science & Engineering",
    place: "Kalpataru Institute Of Technology, Tiptur",
    score: "CGPA : 9.04"
  },

  {
    year: "2021 - 2022",
    title: "2nd PUC - PCMB",
    place: "Govt. PU College For Boys, Tiptur",
    score: "84.3%"
  },

  {
    year: "2018 - 2020",
    title: "SSLC",
    place: "K P S High School, Nonavinakere",
    score: "89.7%"
  }

];

  return (

    <div
      id="education"
      style={{
        padding: "80px 20px",
        color: "white"
      }}
    >

      <h1 style={{
        textAlign: "center",
        fontSize: "42px",
        marginBottom: "70px"
      }}>
        Education
      </h1>

      <div style={{
        position: "relative",
        maxWidth: "900px",
        margin: "auto"
      }}>

        <div style={{
          position: "absolute",
          left: "20px",
          top: "0",
          width: "4px",
          height: "100%",
          backgroundColor: "#38bdf8"
        }} />

        {

          education.map((item, index) => (

            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "50px",
                position: "relative"
              }}
            >

              <div style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#38bdf8",
                marginRight: "30px",
                marginTop: "8px",
                zIndex: "1"
              }} />

              <div style={{
                backgroundColor: "#1e293b",
                padding: "25px",
                borderRadius: "15px",
                width: "100%",
                boxShadow:
                  "0px 0px 15px rgba(56,189,248,0.15)"
              }}>

                <p style={{
                  color: "#38bdf8",
                  fontSize: "15px",
                  marginBottom: "8px"
                }}>
                  {item.year}
                </p>

                <h2 style={{
                  fontSize: "24px",
                  marginBottom: "10px"
                }}>
                  {item.title}
                </h2>

                <p style={{
                  color: "#cbd5e1",
                  marginBottom: "8px",
                  fontSize: "17px"
                }}>
                  {item.place}
                </p>

                <p style={{
                  color: "#94a3b8",
                  fontSize: "16px"
                }}>
                  {item.score}
                </p>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );
}

export default Education;