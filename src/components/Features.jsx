import React from "react";

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <h2>Core Principles & Insights</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Structural Inequity</h3>
            <p>
              Educational access is shaped by caste, class, and gender—not
              simply individual merit. Systemic barriers perpetuate cycles of
              poverty and exclusion.
            </p>
          </div>
          <div className="feature-item">
            <h3>Rights-Based Approach</h3>
            <p>
              Education is an entitlement, not a privilege. Every child deserves
              quality schooling regardless of economic or social background.
            </p>
          </div>
          <div className="feature-item">
            <h3>Community Accountability</h3>
            <p>
              Local monitoring, transparency, and citizen engagement transform
              educational systems from within, ensuring schools serve the poor
              effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
