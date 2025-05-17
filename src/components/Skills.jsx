
import React from "react";
import { Monitor, Smartphone, GitBranch } from "lucide-react";
import code from "../assets/code.jpg";

const Skills = () => {
  const technicalSkills = {
    backend: [
      { name: "PHP (Laravel)", level: "Intermediate", percentage: 70 },
      { name: "Node.js", level: "Intermediate", percentage: 60 },
      { name: "Python", level: "Intermediate", percentage: 50 },
      { name: "Java", level: "Intermediate", percentage: 45 },
    ],
    frontend: [
      { name: "React", level: "Intermediate", percentage: 70 },
      { name: "Tailwind CSS", level: "Intermediate", percentage: 65 },
      { name: "HTML/CSS/JavaScript", level: "Intermediate", percentage: 75 },
    ],
    database: [
      { name: "MySQL", level: "Intermediate", percentage: 70 },
      { name: "PostgreSQL", level: "Intermediate", percentage: 65 },
      { name: "MongoDB", level: "Beginner", percentage: 40 },
    ],
    versionControl: [
      { name: "Git Core", level: "Advanced", percentage: 85 },
      { name: "GitHub", level: "Intermediate", percentage: 75 },
    ],
  };

  const designTools = [
    { name: "Figma", level: "Proficient", percentage: 80 },
    { name: "Canva", level: "Intermediate", percentage: 75 },
    { name: "Lightroom", level: "Proficient", percentage: 75 },
    { name: "Photoshop", level: "Advanced", percentage: 90 },
  ];

  // Helper function for progress bars
  const ProgressBar = ({ percentage, color }) => {
    return (
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${percentage}%`, cursor: "pointer" }}
          title={`${percentage}%`}
        ></div>
      </div>
    );
  };

  return (
    <section id="skills">
      <div className="relative min-h-screen bg-gray-900 py-16 px-4">
        {/* Background code pattern */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <img src={code} alt="code pattern" className="w-full h-full" />
        </div>

        {/* Code brackets */}
        <div className="relative z-10 flex justify-center mb-6 mt-10">
          <div className="text-white text-6xl font-bold animate-pulse">
            &lt;/&gt;
          </div>
        </div>

        {/* Skills heading */}
        <div className="relative z-10 text-center mb-4">
          <h2 className="text-white text-4xl font-bold mb-2">Skills</h2>
          <div className="flex justify-center items-center mb-4">
            <div className="h-px w-12 bg-white/50"></div>
            <div className="h-2 w-2 bg-white rounded-full mx-2"></div>
            <div className="h-px w-12 bg-white/50"></div>
          </div>
          <p className="text-gray-300 italic">
            I am striving to never stop learning and improving
          </p>
        </div>

        {/* Development Categories */}
        <div className="relative z-10 flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-teal-200 rounded-lg p-4 flex items-center w-64 hover:scale-105">
            <Monitor className="text-gray-800 mr-3" size={24} />
            <div>
              <h3 className="text-gray-800 font-medium">Web Development</h3>
              <p className="text-gray-700 text-sm">HTML・CSS・JS・REACT</p>
            </div>
          </div>

          <div className="bg-teal-200 rounded-lg p-4 flex items-center w-64 hover:scale-105">
            <Smartphone className="text-gray-800 mr-3" size={24} />
            <div>
              <h3 className="text-gray-800 font-medium">App Development</h3>
              <p className="text-gray-700 text-sm">iOS・Android</p>
              <p className="text-gray-600 text-xs italic mt-1">
                *Currently learning
              </p>
            </div>
          </div>

          <div className="bg-teal-200 rounded-lg p-4 flex items-center w-64 hover:scale-105">
            <GitBranch className="text-gray-800 mr-3" size={24} />
            <div>
              <h3 className="text-gray-800 font-medium">Version Control</h3>
              <p className="text-gray-700 text-sm">Git・GitHub</p>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="relative z-10 container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Technical Skills Column */}
            <div>
              {/* Backend Development */}
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-6 hover:scale-105">
                <h3 className="text-white text-xl font-bold mb-4 border-b border-gray-700 pb-2">
                  Backend Development
                </h3>
                <div className="space-y-5">
                  {technicalSkills.backend.map((skill, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}</span>
                      </div>
                      <ProgressBar
                        percentage={skill.percentage}
                        color="bg-orange-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend Development */}
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-6 hover:scale-105">
                <h3 className="text-white text-xl font-bold mb-4 border-b border-gray-700 pb-2">
                  Frontend Development
                </h3>
                <div className="space-y-5">
                  {technicalSkills.frontend.map((skill, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}</span>
                      </div>
                      <ProgressBar
                        percentage={skill.percentage}
                        color="bg-blue-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Git/Version Control - New Section */}
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-6 hover:scale-105">
                <h3 className="text-white text-xl font-bold mb-4 border-b border-gray-700 pb-2">
                  Git & Version Control
                </h3>
                <div className="space-y-5">
                  {technicalSkills.versionControl.map((skill, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}</span>
                      </div>
                      <ProgressBar
                        percentage={skill.percentage}
                        color="bg-green-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-6 hover:scale-105">
                <h3 className="text-white text-xl font-bold mb-4 border-b border-gray-700 pb-2">
                  Database
                </h3>
                <div className="space-y-5">
                  {technicalSkills.database.map((skill, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}</span>
                      </div>
                      <ProgressBar
                        percentage={skill.percentage}
                        color="bg-yellow-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Design Tools - Full Width */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mt-6 hover:scale-105">
            <h3 className="text-white text-xl font-bold mb-4 border-b border-gray-700 pb-2">
              Design and Editing Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designTools.map((tool, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{tool.name}</span>
                    <span className="text-gray-400">{tool.level}</span>
                  </div>
                  <ProgressBar
                    percentage={tool.percentage}
                    color="bg-teal-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;