import React from "react";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2>Connect & Engage</h2>
        <p>
          Join the conversation around educational equity and child rights.
          Share your insights, ask questions, or discuss how Prof. Sinha's
          framework can be applied in your context.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            placeholder="Your Message or Reflection"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
