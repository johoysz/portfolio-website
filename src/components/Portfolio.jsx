import { Mail, Download } from "lucide-react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Works from "./Works";
import ContactForm from "./ContactForm";

const titles = ["Developer", "Editor"];

// Main Portfolio Component
const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setIsFlipping(false);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Header />

      <Sidebar />

      <section id="main" className="container mx-auto px-4 pt-16 pb-32 text-center mt-20">
        <h1
          className={`text-7xl font-bold mb-8 text-teal-300 transform transition-transform duration-300 ${
            isFlipping ? "rotate-x-90 opacity-0" : "rotate-x-0 opacity-100"
          }`}
          style={{
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
          }}
        >
          {titles[index]}
        </h1>

        <div className="mb-6 text-xl">
          <p className="text-3xl mb-2">
            Hey
            <br />
            I'm <span className="text-teal-300">Joy</span>,<br />
            Web Developer
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg max-w-xl mx-auto text-gray-300">
            I’m a graduating IT student passionate about turning ideas into real, working websites. I may be new to the field, but I know how to get things done and keep learning as I go.
          </p>
          <br />
        </div>
        <div className="flex justify-center items-center space-x-4">
          {/* Let's Talk - Mail */}
          <a
            href="#contact"
            className="flex items-center px-6 py-3 rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 transition-colors"
          >
            Let's Talk <Mail className="ml-2 w-5 h-5" />
          </a>

          {/* Download CV */}
          <a
            href="/files/Buangjug_CV.pdf" // update the filename and path as needed
            download="Buangjug_CV.pdf"
            className="flex items-center px-6 py-3 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition-colors"
          >
            Download CV <Download className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
      <AboutMe />
      <Skills />
      <Works />
      <ContactForm />
    </div>
  );
};

export default Portfolio;
