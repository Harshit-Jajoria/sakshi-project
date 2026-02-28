import React from "react";

export default function Solutions() {
  const data = [
    {
      challenge: "Lack of awareness of traditional textile arts.",
      solution: "Conduct cultural awareness sessions",
      outcome: "Cultural appreciation & interest in art",
    },
    {
      challenge: "Limited materials for tie-dye.",
      solution: "Use low-cost or recycled supplies",
      outcome: "Inclusive & hands-on participation",
    },
    {
      challenge: "Not enough time for art activities.",
      solution: "Integrate with core subjects",
      outcome: "Efficient & integrated learning",
    },
    {
      challenge: "Art not linked to academics.",
      solution: "Use interdisciplinary lesson plans",
      outcome: "Cross-curricular understanding",
    },
    {
      challenge: "Student fear of making mistakes.",
      solution: "Encourage safe experimentation",
      outcome: "Creative confidence & growth",
    },
  ];

  return (
    <>
      <section style={styles.section}>
        <h1 style={styles.title}>
          <span style={{ color: "#d62828" }}>Challenge</span> →
          <span style={{ color: "#1d4ed8" }}> Solution</span> →
          <span style={{ color: "#2f9e44" }}> Outcome</span>
        </h1>

        <p style={styles.subtitle}></p>

        {/* Headers */}
        <div style={styles.headerRow}>
          <div style={{ ...styles.headerBox, background: "#d62828" }}>
            CHALLENGE
          </div>
          <div style={{ ...styles.headerBox, background: "#1d4ed8" }}>
            SOLUTION
          </div>
          <div style={{ ...styles.headerBox, background: "#2f9e44" }}>
            OUTCOME
          </div>
        </div>

        {/* Rows */}
        {data.map((item, index) => (
          <div key={index} style={styles.row}>
            <div style={{ ...styles.box, background: "#ef4444" }}>
              {item.challenge}
            </div>

            <div style={styles.arrow}>→</div>

            <div style={{ ...styles.box, background: "#2563eb" }}>
              {item.solution}
            </div>

            <div style={styles.arrow}>→</div>

            <div
              style={{
                ...styles.box,
                background: "#43a047",
                borderRadius: "50px",
              }}
            >
              {item.outcome}
            </div>
          </div>
        ))}

        {/* Framework Section */}
        
      </section>
    </>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    background: "#f4f6f8",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "5px",
  },

  subtitle: {
    letterSpacing: "3px",
    marginBottom: "40px",
    color: "#666",
  },

  headerRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    marginBottom: "30px",
    maxWidth: "1100px",
    marginInline: "auto",
  },

  headerBox: {
    padding: "12px",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1fr 60px 1fr 60px 1fr",
    alignItems: "center",
    gap: "10px",
    marginBottom: "25px",
    maxWidth: "1100px",
    marginInline: "auto",
  },

  box: {
    padding: "18px",
    borderRadius: "12px",
    color: "white",
    fontSize: "1.3rem",
    lineHeight: "1.5",
  },

  arrow: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#555",
  },

  framework: {
    marginTop: "60px",
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    marginInline: "auto",
    textAlign: "left",
  },

  frameworkItem: {
    marginBottom: "15px",
    fontSize: "14px",
  },

  badge: {
    color: "white",
    padding: "6px 12px",
    borderRadius: "6px",
    marginRight: "10px",
    fontSize: "12px",
  },
};
