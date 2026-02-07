import React, { useEffect, useState } from "react";
const Hero = () => {
  const fullText = "Alfred Jolo </>";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 60 : 110;
    const pauseAfterType = 1200;
    const pauseAfterDelete = 400;

    const handleTyping = () => {
      if (!isDeleting) {
        const next = fullText.slice(0, text.length + 1);
        setText(next);

        if (next === fullText) {
          setTimeout(() => setIsDeleting(true), pauseAfterType);
          return;
        }
      } else {
        const next = fullText.slice(0, text.length - 1);
        setText(next);

        if (next === "") {
          setTimeout(() => setIsDeleting(false), pauseAfterDelete);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);
  return (
    <section className="min-h-screen w-screen bg-primary-dark flex items-center px-8 md:px-16 lg:px-32 relative overflow-hidden">
      {" "}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-45 z-0"
        style={{ objectPosition: "100% right" }}
      >
        <source src="/bg-gradient.mp4" type="video/mp4" />
      </video>
      <div className="fixed left-12 bottom-0 hidden lg:flex flex-col gap-5 items-center z-50">
        <a
          href="https://github.com/jolocdj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-accent-cyan hover:-translate-y-1 transition-all"
        >
          <svg className="w-7 h-7" fill="#ffffff" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://instagram.com/joloxdj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white hover:-translate-y-1 transition-all"
        >
          <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
            {" "}
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white hover:-translate-y-1 transition-all"
        >
          <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
            {" "}
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/alfred-jolo-de-jesus-5227b7379/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white hover:-translate-y-1 transition-all"
        >
          <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
            {" "}
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="https://codepen.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white hover:-translate-y-1 transition-all"
        >
          <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
            {" "}
            <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c.01.025.02.047.035.07l.01.015.04.064.04.045.04.06.06.04.04.04.06.04.04.04.015.015.04.015c.015.015.035.025.05.04l.04.015L11.41 23.76c.18.12.385.18.59.18s.423-.06.59-.18l11.012-7.3.015-.015.046-.03.06-.045.045-.045.046-.045.06-.06.045-.05.04-.065.04-.045.03-.06.015-.045c.02-.03.03-.06.04-.095l.02-.045.02-.09.02-.045V8.12l-.02-.058h.01zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39v5.816zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.73zm1.857 1.25l4.473 2.99v5.815l-8.086-5.39 3.613-2.417zm7.537 8.8v-5.816l4.473-2.99 3.613 2.42-8.086 5.387zm6.33-8.8l2.583-1.72v3.456l-2.583-1.73z" />
          </svg>
        </a>
        <div className="w-px h-24 bg-accent-cyan"></div>
      </div>
      <div className="fixed right-12 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50">
        <a
          href="mailto:alfredjolodejesus@gmail.com"
          className="!text-white hover:!text-white visited:!text-white active:!text-white transition-colors writing-mode-vertical text-sm font-mono tracking-wider"
        >
          alfredjolodejesus@gmail.com
        </a>
        <div className="w-px h-24 bg-accent-cyan"></div>
      </div>
      <div
        className="max-w-4xl mx-auto w-full relative z-10"
        style={{ marginLeft: "20%" }}
      >
        <p className="text-accent-cyan font-mono text-xl mb-2">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
          {text}
          <span className="ml-2 text-accent-cyan animate-pulse">|</span>
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight whitespace-nowrap">
          I was created to create.
        </h2>

        <p className="text-white text-lg max-w-4xl mb-12 leading-relaxed">
          {" "}
          I’m a software and web developer who builds clean, efficient, and
          engaging digital experiences. As a recent graduate, I bring hands-on
          experience in designing and developing websites and applications that
          combine functionality with thoughtful design.
        </p>
      </div>
    </section>
  );
};

export default Hero;
