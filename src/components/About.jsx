import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black flex items-center px-8 md:px-16 lg:px-32 py-20 fade-in-section"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            <span className="text-accent-cyan font-mono text-2xl mr-2">
              01.
            </span>
            About Me
          </h2>
          <div className="h-px bg-gray-700 w-full max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-4 text-gray-400 text-base leading-relaxed">
            <p>
              Hello! My name is Alfred Jolo De Jesus from the Philippines and I
              enjoy creating things that live on the internet. My interest in
              web development started back in 2022 when I decided to pursue
              software development — turns out it will be my college degree and
              will be graduating as Latin Honor of my batch. Coding is such a
              challenging yet fulfilling career choice for me.
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working on
              various projects as a{" "}
              <span className="text-accent-cyan">fresh graduate</span>,{" "}
              <span className="text-accent-cyan">freelancer</span>, and{" "}
              <span className="text-accent-cyan">aspiring developer</span>. My
              main focus these days is building accessible, user-friendly
              products and digital experiences.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>

            <div className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">▹</span>
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">▹</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">▹</span>
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">▹</span>
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">▹</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">▹</span>
                <span>HTML</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative w-full max-w-xs mx-auto">
              <div
                className="absolute inset-0 bg-accent-cyan mix-blend-multiply rounded-lg z-10 
                            group-hover:bg-transparent transition-all duration-300"
              ></div>

              <div
                className="absolute -inset-2 border-2 border-accent-cyan rounded-lg 
                            translate-x-4 translate-y-4 group-hover:translate-x-2 
                            group-hover:translate-y-2 transition-all duration-300"
              ></div>

              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="public/profile.jpg"
                  alt="Alfred Jolo"
                  className="w-full h-auto rounded-lg grayscale group-hover:grayscale-0 
                           transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
