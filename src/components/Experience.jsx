import React, { useState } from "react";

const jobs = [
  {
    company: "Highly Succeed",
    role: "Web Developer Intern",
    date: "January 2026 – Present",
    points: [
      "Developed and maintained responsive web pages and application features for client projects.",
      "Assisted in implementing scalable frontend components using modern web technologies.",
      "Collaborated with designers and backend developers to deliver functional and user-friendly solutions.",
      "Participated in code reviews, debugging, and performance optimization tasks.",
      "Contributed to testing and deployment processes to ensure smooth project releases.",
    ],
  },

  {
    company: "Freelancing",
    role: "Graphic Designer",
    date: "2026 – 2025",
    points: [
      "Designed brand identities, social media graphics, and marketing materials for various clients.",
      "Created visually compelling layouts for digital and print platforms.",
      "Collaborated with clients to translate concepts into impactful visual designs.",
      "Ensured consistency in branding, typography, and color systems across projects.",
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemHeight = 56;
  const activeJob = jobs[activeIndex];
  return (
    <section
      id="experience"
      className="min-h-screen bg-primary-dark px-8 md:px-16 lg:px-32 py-24 fade-in-section"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
          <span className="text-accent-cyan font-mono text-xl">02.</span>
          My Experiences
          <span className="flex-1 h-px bg-gray-700 ml-6"></span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="relative md:w-56">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700"></div>

          <div
            className="absolute left-0 w-0.5 bg-accent-cyan transition-all duration-300"
            style={{
              top: `${activeIndex * itemHeight}px`,
              height: `${itemHeight}px`,
            }}
          ></div>

          {jobs.map((job, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{ height: `${itemHeight}px` }}
              className={`block w-full text-left px-6 py-4 font-mono text-sm transition-all duration-200
border-l-2 border-  
    ${activeIndex === index ? "text-accent-cyan" : "text-gray-500 hover:text-accent-cyan"}
  `}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="flex-1 text-gray-300 transition-all duration-500">
          <h3 className="text-xl font-semibold text-white">
            {activeJob.role}{" "}
            <span className="text-accent-cyan">@ {activeJob.company}</span>
          </h3>

          <p className="text-med text-gray-400 font-mono mt-2 mb-6">
            {activeJob.date}
          </p>
          <ul className="space-y-4">
            {activeJob.points.map((point, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-accent-cyan mt-1">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
