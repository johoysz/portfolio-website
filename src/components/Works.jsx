import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Works = () => {
  // Sample projects data - you would replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "EnviScape Website (Capstone Project)",
      description: "A virtual tour service provider that enables schools to engage students through interactive and personalized virtual tours, helping them explore campus life, facilities, and community in an immersive way.",
      technologies: ["React", "Tailwind CSS", "Laravel", "MySQL", "Cloudinary", "Heroku", "Google Analytics", "CloudPano", "Tawk.to" , "Vite", "PayMongo"],
      previewImage: "/images/enviscape.png", // Website preview placeholder
      websiteUrl: "https://enviscape-972a5cd3556e.herokuapp.com/"
    },
    {
      id: 2,
      title: "CLI Payment System (Internship Project)",
      description: "An online payment system for its clients, powered by Paynamics Technologies. This integration enables buyers to settle payments through various channels, including e-wallets like GCash, online banking, and over-the-counter options such as 7-Eleven, SM Bills Payment, and MLhuillier. The system ensures real-time transaction notifications and efficient fund transfers, enhancing the overall customer experience.",
      technologies: ["React", "Tailwind CSS", "Laravel", "PostgreSQL", "Paynamics", "Vite"],
      previewImage: "/images/cli.png",
      websiteUrl: "/cli-payment"
    },
    {
      id: 3,
      title: "AI Chatbot with Hugging Face & Flowise",
      description:
        "An AI-powered chatbot built using Hugging Face models and Flowise AI. This project showcases a visual NLP pipeline and a conversational interface capable of answering queries with contextual understanding. It integrates pre-trained models with a user-friendly frontend for real-time interactions.",
      technologies: ["Flowise", "Hugging Face", "Node.js", "React", "Tailwind CSS"],
      previewImage: "/images/chatbot.png",
      websiteUrl: "https://johoysz-elai-project.hf.space/chatbot/3c55fad4-e165-4f88-b40c-b0ee59e0930c"
    },
    {
      id: 4,
      title: "My Portfolio Website",
      description:
        "A responsive and user-friendly portfolio website built using React and Tailwind CSS, in a Vite Development. The website showcases my skills, experience, and works, providing a personalized and professional touch.",
      technologies: ["React", "Tailwind CSS", "Vite", "Node.js", "Heroku", "EmailJS", "Flowise"],
      previewImage: "/images/portfolio.png",
      websiteUrl: "/"
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
        <div className="relative min-h-screen bg-gray-900 py-16 px-4 flex flex-col items-center justify-center">
        {/* Works title */}
        <div className="text-center mb-8 mt-20">
            <h2 className="text-white text-4xl font-bold mb-2">Works</h2>
            <div className="flex justify-center items-center mb-4">
            <div className="h-px w-12 bg-white/50"></div>
            <div className="h-2 w-2 bg-white rounded-full mx-2"></div>
            <div className="h-px w-12 bg-white/50"></div>
            </div>
            <p className="text-gray-400 italic">I had the pleasure of working with these awesome projects</p>
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
                
                {/* View website link */}
                <a 
                    href={currentProject.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute -top-6 right-0 bg-transparent text-white hover:text-teal-300 transition-colors flex items-center gap-1 text-sm"
                >
                    View Website <ExternalLink size={14} />
                </a>
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
            <h3 className="text-white text-2xl font-bold mb-2">{currentProject.title}</h3>
            <p className="text-gray-300 mb-4">{currentProject.description}</p>
            <div className="flex flex-wrap justify-center gap-2">
                {currentProject.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-800 text-teal-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                </span>
                ))}
            </div>
            </div>

            {/* Pagination indicators */}
            <div className="flex mt-8 gap-2">
            {projects.map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-6" : "bg-gray-600 hover:bg-gray-500"
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

export default Works;