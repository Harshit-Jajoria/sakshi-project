import React from "react";
import challengesImg from "../assets/challenges.png";

export default function Challenges() {
  return (
    <section style={styles.section} id="challenges">
      <div style={styles.container}>
        <img
          src={challengesImg}
          alt="Key Challenges in Educational Access"
          style={styles.image}
        />
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    background: "linear-gradient(to bottom, #ffffff, #f4f7fb)",
  },
  container: {
    width: "100%",
    maxWidth: "1400px", // 🔥 Increased width
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "20px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
  },
};
