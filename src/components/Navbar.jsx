import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <a
          href="#"
          className="text-accent-cyan hover:text-accent-blue transition-colors"
        >
          <div
            className="w-12 h-12 border-2 border-accent-cyan flex items-center justify-center 
                          font-bold text-xl transform rotate-45 hover:rotate-0 transition-transform"
          >
            <span className="transform -rotate-45">AJ</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          <li>
            <a
              href="#about"
              className="!text-white hover:!text-accent-cyan transition-colors"
            >
              <span className="text-accent-cyan mr-1">01.</span>About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="!text-white hover:!text-accent-cyan transition-colors"
            >
              <span className="text-accent-cyan mr-1">02.</span>Experience
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="!text-white hover:!text-accent-cyan transition-colors"
            >
              <span className="text-accent-cyan mr-1">03.</span>Projects
            </a>
          </li>
          <li>
            <a
              href="#certificates"
              className="!text-white hover:!text-accent-cyan transition-colors"
            >
              <span className="text-accent-cyan mr-1">04.</span>Certificates
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="!text-white hover:!text-accent-cyan transition-colors"
            >
              <span className="text-accent-cyan mr-1">05.</span>Contact
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2 rounded border border-accent-cyan overflow-hidden group
             !text-white hover:!text-white
             transition-all duration-300
             hover:-translate-y-1 hover:scale-105
             hover:shadow-[0_0_30px_rgba(100,255,218,0.35)]"
            >
              <span className="absolute inset-0 bg-accent-cyan/15 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

              <span className="absolute inset-25 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10 font-mono tracking-wide !text-white">
                Resume
              </span>
            </a>
          </li>
        </ul>

        <button className="md:hidden text-accent-cyan">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
