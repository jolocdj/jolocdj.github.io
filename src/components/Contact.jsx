import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black flex items-center justify-center px-8 py-20 fade-in-section"
    >
      <div className="max-w-2xl text-center animate-fade-in">
        <p className="text-accent-cyan font-mono text-base mb-5 animate-fade-in-delay-1">
          05. What's Next?
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-delay-2">
          Get In Touch with Me!
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto animate-fade-in-delay-3">
          I am currently looking for any opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll will surely
          get back to you!
        </p>

        <a
          href="mailto:alfredjolodejesus@gmail.com"
          className="inline-block px-6 py-3 border-2 border-accent-cyan !text-white text-sm
   rounded font-mono hover:bg-accent-cyan/5 hover:!text-white transition-all 
   hover:-translate-y-1 animate-fade-in-delay-4"
        >
          Email Me!
        </a>
      </div>
    </section>
  );
};

export default Contact;
