import React, { useState } from "react";

const certificates = [
  {
    title: "JavaScript and PHP Programming Certification",
    date: "Nov. 28, 2025",
    image: "/Cert-1.png",
    link: "https://ude.my/UC-4bda0713-7daa-4588-ba6f-d40eb35403eb",
    source: "Udemy",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    date: "Aug. 15, 2025",
    image: "/Cert-2.png",
    link: "https://coursera.org/verify/9UP29AT230U",
    source: "Coursera",
  },

  {
    title: "Build Dynamic User Interfaces (UI) for Websites",
    date: "Aug. 17, 2025",
    image: "/Cert-3.png",
    link: "https://coursera.org/verify/CLAJOCK9I3U2",
    source: "Coursera",
  },

  {
    title: "POSHED to Excellence: Web Development & Career Growth",
    date: "Feb. 21, 2025",
    image: "/Seminar-1.png",
    source: "DICT",
  },

  {
    title: "Figma: UI UX Design Essentials Course",
    date: "Oct. 6, 2025",
    image: "/Cert-4.png",
    link: "ude.my/UC-1a2999a2-12b4-4697-8299-3c86adcea247",
    source: "Udemy",
  },

  {
    title: "xx",
    date: "Aug. 17, 2025",
    image: "/Cert-3.png",
    link: "https://coursera.org/verify/CLAJOCK9I3U2",
    source: "Coursera",
  },
  {
    title: "Build Dynamic User Interfaces (UI) for Websites",
    date: "Aug. 17, 2025",
    image: "/Cert-3.png",
    link: "https://coursera.org/verify/CLAJOCK9I3U2",
    source: "Coursera",
  },
];

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const displayedCerts = showAll ? certificates : certificates.slice(0, 6);

  return (
    <section
      id="certificates"
      className="min-h-screen bg-black px-8 md:px-16 lg:px-32 py-20 fade-in-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            <span className="text-accent-cyan font-mono text-2xl mr-2">
              04.
            </span>
            My Certificates and Seminars
          </h2>
          <div className="h-px bg-gray-700 w-full max-w-md"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCerts.map((cert, index) => (
            <div key={index} className="group block">
              <div className="bg-[#112240] rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/20">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent-cyan mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-all duration-300"></div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    onClick={() => setSelectedImage(cert.image)}
                    className="relative z-20 w-full h-48 object-cover cursor-pointer grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3
                    onClick={() => {
                      if (!cert.link) return;
                      window.open(cert.link, "_blank", "noopener,noreferrer");
                    }}
                    className="text-xl font-bold text-white mb-2 cursor-pointer hover:text-accent-cyan transition-colors"
                  >
                    {cert.title}
                  </h3>

                  <p className="text-accent-cyan font-mono text-sm mb-2">
                    {cert.certId}
                  </p>

                  <p className="text-gray-400 text-sm mb-3">{cert.date}</p>

                  <span className="inline-block text-xs font-semibold bg-accent-cyan/20 text-accent-cyan px-3 py-1 rounded-full">
                    {cert.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {certificates.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border-2 border-accent-cyan text-accent-cyan rounded font-mono 
                       hover:bg-accent-cyan/10 transition-all hover:-translate-y-1"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
