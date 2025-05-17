import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import code from "../assets/sample.jpg";

const Achievements = () => {
  // Sample projects data - you would replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "UI/UX Design Competition",
      description:
        "First Place – UI/UX Design 10th ICT Congress Competition 2024 (University of Cebu – Main)",
    },
    {
      id: 2,
      title: "CLI Payment System (Internship Project)",
      description:
        "An online payment system for its clients, powered by Paynamics Technologies. This integration enables buyers to settle payments through various channels, including e-wallets like GCash, online banking, and over-the-counter options such as 7-Eleven, SM Bills Payment, and MLhuillier. The system ensures real-time transaction notifications and efficient fund transfers, enhancing the overall customer experience.",
    },
  ];

  // State to track current project index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler functions for navigation
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Current project to display
  const currentProject = projects[currentIndex];

  return (
    <section id="works">
      <div className="relative min-h-screen bg-[#40474E] py-16 px-4 flex flex-col items-center justify-center">
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <img src={code} alt="code pattern" className="w-full h-full" />
        </div>
        {/* Works title */}
        <div className="text-center mb-8 mt-20">
          <h2 className="text-white text-4xl font-bold mb-2">Achievements</h2>
          <div className="flex justify-center items-center mb-4">
            <div className="h-px w-12 bg-white/50"></div>
            <div className="h-2 w-2 bg-white rounded-full mx-2"></div>
            <div className="h-px w-12 bg-white/50"></div>
          </div>
        </div>

        {/* Project showcase */}
        <div className="max-w-5xl w-full flex flex-col items-center">
          <div className="relative w-full flex justify-center items-center py-8">
            {/* Previous button */}
            <button
              onClick={prevProject}
              className="absolute left-0 z-10 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Project display */}
            <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-center gap-6 px-12">
              {/* Website preview */}
              <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="bg-white p-2 pt-6 rounded-lg shadow-lg">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-300 rounded-full"></div>
                  <img
                    src={currentProject.previewImage}
                    alt={`${currentProject.title} preview`}
                    className="w-full h-auto max-h-64 object-cover rounded"
                  />
                </div>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextProject}
              className="absolute right-0 z-10 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Project details */}
          <div className="mt-8 text-center max-w-2xl">
            <h3 className="text-white text-2xl font-bold mb-2">
              {currentProject.title}
            </h3>
            <p className="text-gray-300 mb-4">{currentProject.description}</p>
          </div>

          {/* Pagination indicators */}
          <div className="flex mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
