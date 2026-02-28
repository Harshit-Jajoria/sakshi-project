import React from "react";
import logo from "../assets/logo.png"; // placeholder, add a real logo image

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav className="nav">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a href="#contact" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </header>
  );
}
