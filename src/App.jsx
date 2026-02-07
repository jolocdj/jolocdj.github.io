import React from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import MouseGradient from "./components/MouseGradient";

import "./App.css";

function App() {
  useScrollAnimation();
  return (
    <div className="bg-primary-dark min-h-screen">
      <MouseGradient />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
