import React from "react";
import "./App.css";

// portfolio components
// portfolio components
import Bio from "./components/Bio";
import Challenges from "./components/Challenges";
import Stories from "./components/Stories";
import Solutions from "./components/Solutions";
import Reflections from "./components/Reflections";
import References from "./components/References";
import Awards from "./components/Awards";

// layout components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="portfolio">
      <Header />
      <Hero />
      {/* core sections for design purposes */}
      <About />
      {/* <Services /> */}
      {/* <Features /> */}
      <Testimonials />

      {/* portfolio content sits after the generic sections */}
      <Bio />
      <Awards />
      <Challenges />
      <Stories />
      <Solutions />
      <Reflections />
      <References />

      {/* <Contact /> */}
    </div>
  );
}

export default App;
