import React from "react";

const projects = [
  {
    title: "Barangay iRescue",
    description:
      "Barangay iRescue is a mobile emergency application made for the citizens of barangay for faster and accurate reporting of emergencies within their area. The system was developed using HTML, CSS, Javascript. My role is the UI/UX Designer and Full-Stack Developer for the project.",
    image: "/Project-1.jpg",
    tags: ["VS Code", "HTML", "CSS", "Javascript", "PHP", "Firebase"],
    github: "https://github.com/yourusername/project",
    external: "https://barangayirescue.com",
    featured: true,
  },

  {
    title: "FactAttack: Web App Quiz",
    description:
      "Fact Attack is an online quiz web application designed to test users’ knowledge through interactive and engaging quizzes. It provides a fun and accessible way to learn, review facts, and challenge users in various topics.",
    image: "/Project-2.jpg",
    tags: ["VS Code", "Django", "Python", "CSS", "HTML"],
    github: "https://github.com/yourusername/project",
    external: "https://factattack.web",
    featured: true,
  },

  {
    title: "Unleash: Pet and Lifestyle",
    description:
      "Unlock endless fun for you and your pet with our all-in-one app! Shop for trendy pet gear, connect with other pet lovers, and join a lively pet community—all in one place!",
    image: "/Project-3.jpg",
    tags: ["VS Code", "HTML", "CSS", "Javascript", "PHP"],
    github: "https://github.com/yourusername/project",
    external: "https://unleash.ph/",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="min-h-screen bg-black px-8 md:px-16 lg:px-32 py-20 fade-in-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            <span className="text-accent-cyan font-mono text-2xl mr-2">
              03.
            </span>
            Some Projects I've Built
          </h2>
          <div className="h-px bg-gray-700 w-full max-w-md"></div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              {index % 2 === 0 ? (
                <>
                  <div className="relative group max-w-2xl">
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative rounded overflow-hidden">
                        <div className="absolute inset-0 bg-accent-cyan mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-300"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300 cursor-pointer"
                        />
                      </div>
                    </a>
                  </div>

                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/2 z-20 px-8 md:px-0">
                    <div className="text-right">
                      <p className="text-accent-cyan font-mono text-sm mb-2">
                        Featured Project
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        {project.title}
                      </h3>
                      <div className="bg-[#112240] p-6 rounded text-gray-300 mb-5 shadow-lg">
                        <p className="text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <ul className="flex flex-wrap justify-end gap-4 mb-5 font-mono text-sm text-gray-400">
                        {project.tags.map((tag, i) => (
                          <li key={i}>{tag}</li>
                        ))}
                      </ul>
                      <div className="flex justify-end gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-cyan transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-cyan transition-colors"
                        >
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative group max-w-2xl ml-auto">
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative rounded overflow-hidden">
                        <div className="absolute inset-0 bg-accent-cyan mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-300"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300 cursor-pointer"
                        />
                      </div>
                    </a>
                  </div>

                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/2 z-20 px-8 md:px-0">
                    <div className="text-left">
                      <p className="text-accent-cyan font-mono text-sm mb-2">
                        Featured Project
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        {project.title}
                      </h3>
                      <div className="bg-[#112240] p-6 rounded text-gray-300 mb-5 shadow-lg">
                        <p className="text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <ul className="flex flex-wrap justify-start gap-4 mb-5 font-mono text-sm text-gray-400">
                        {project.tags.map((tag, i) => (
                          <li key={i}>{tag}</li>
                        ))}
                      </ul>
                      <div className="flex justify-start gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-cyan transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-cyan transition-colors"
                        >
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}

          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Other Noteworthy Projects
              </h2>
              <a
                href="/archive"
                className="text-accent-cyan font-mono text-sm hover:underline"
              >
                view the archive
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Inventory Management System",
                  description:
                    "Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                  tags: ["Next.js", "Tailwind CSS", "Supabase", "Javascript"],
                  github: "https://github.com",
                  external: "https://example.com",
                },
                {
                  title: "Jopman Corporation Recruitment System",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                  tags: ["Node", "Express", "Supabase", "Next.js"],
                  github: null,
                  external: "https://example.com",
                },
              ].map((project, index) => (
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="bg-[#112240] p-8 rounded group hover:bg-[#1a3a52] transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/20 hover:-translate-y-2 flex flex-col h-full cursor-pointer block"
                >
                  <div className="flex items-start justify-between mb-8">
                    <svg
                      className="w-12 h-12 text-accent-cyan"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>

                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-cyan transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-cyan transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-3 font-mono text-xs text-gray-500">
                    {project.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
