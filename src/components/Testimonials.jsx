import React from "react";

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <h2>Impact & Recognition</h2>
        <div className="testimonial-item">
          <blockquote>
            "Prof. Sinha's work bridges the gap between academic rigor and
            grassroots activism. 'Battle for Schools' is not merely an
            analysis—it's a clarion call for educators and policymakers to
            dismantle the systems that perpetuate educational inequality."
          </blockquote>
          <p className="author">— Educational Leadership Forum, India</p>
        </div>
        <div className="testimonial-item">
          <blockquote>
            "This portfolio crystallizes decades of research and lived
            experience into actionable insights. Communities using Prof. Sinha's
            frameworks have transformed their local schools and proven that
            educational entitlement is achievable."
          </blockquote>
          <p className="author">— Child Rights Coalition, South Asia</p>
        </div>
      </div>
    </section>
  );
}
