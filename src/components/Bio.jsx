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
        <h3 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
          Notable Achievements
        </h3>
        <ul>
          <li>
            Founding Chairperson – National Commission for Protection of Child
            Rights (2007–2014)
          </li>
          <li>
            Founder & Director – Mahita Village Foundation (MVF), working in
            rural Maharashtra
          </li>
          <li>
            Ramon Magsaysay Award for Peace & International Understanding (2003)
          </li>
          <li>
            Padma Shri Award – India's civilian honor for exceptional service
          </li>
          <li>
            Architect of India's Right to Free & Compulsory Education Act (RTE),
            2009
          </li>
        </ul>
      </div>
    </section>
  );
}
