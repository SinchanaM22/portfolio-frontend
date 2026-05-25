import {
  FaGithub,
  FaLinkedin,
  FaHackerrank
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { motion } from "framer-motion";

function Contact() {
  return (

    <div
      id="contact"
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background:
          "linear-gradient(to right,#0f172a,#1e293b)"
      }}
    >

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "55px",
          marginBottom: "20px",
          color: "white"
        }}
      >
        Let's Connect
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          color: "#cbd5e1",
          fontSize: "22px",
          marginBottom: "50px",
          maxWidth: "700px",
          marginInline: "auto",
          lineHeight: "40px"
        }}
      >
        I’m always excited to collaborate on innovative projects,
        explore new opportunities and connect with developers
        and tech enthusiasts.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          fontSize: "45px",
          marginBottom: "60px",
          flexWrap: "wrap"
        }}
      >

        <a
          href="mailto:sinchana1922@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <MdEmail />
        </a>

        <a
          href="https://github.com/SinchanaM22"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sinchana-m-ab6201269"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.hackerrank.com/profile/sinchana1922"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaHackerrank />
        </a>

      </motion.div>

      
      
    </div>
  );
}

const iconStyle = {
  color: "white",
  textDecoration: "none",
  transition: "0.3s"
};

export default Contact;