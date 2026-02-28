import React from "react";
import profileImage from "../assets/images.jpeg";

export default function Bio() {
  return (
    <section className="section" id="bio">
      <div className="container">
        <h2>Prof. Shantha Sinha – Champion of Child Rights</h2>
        <img src={profileImage} alt="Prof. Shantha Sinha" className="profile" />
        <p>
          Prof. Shantha Sinha is an internationally recognized educationist,
          child rights activist, and social reformer. With over three decades of
          dedicated work, she has been instrumental in shifting India's approach
          to child welfare from charity to rights-based frameworks.
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          As the founding Chairperson of India's National Commission for
          Protection of Child Rights (NCPCR), Prof. Sinha championed
          constitutional protections for vulnerable children and pioneered
          innovative programs addressing child labor, trafficking, and
          educational exclusion. Her research seamlessly bridges academic rigor
          with grassroots activism.
        </p>
 
      </div>
    </section>
  );
}
