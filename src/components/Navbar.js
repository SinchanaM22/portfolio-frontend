function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 60px",
      background: "rgba(15,23,42,0.9)",
      backdropFilter: "blur(10px)",
      position: "sticky",
      top: "0",
      zIndex: "1000"
    }}>

      <h2 style={{
        color: "#38bdf8",
        fontSize: "30px"
      }}>
        Sinchana M
      </h2>

      <div style={{
        display: "flex",
        gap: "30px"
      }}>

        <a href="#about" style={linkStyle}>About</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#certifications" style={linkStyle}>Certifications</a>
        <a href="#contact" style={linkStyle}>Let's Connect</a>

      </div>

    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  transition: "0.3s"
};

export default Navbar;