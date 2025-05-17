import { Mail, Code, User, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["main", "about-me", "skills", "projects", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 bg-gray-800 rounded-full p-2 flex flex-col space-y-6 z-50">
      <div className="flex items-center justify-center">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={`p-2 rounded-full ${
            activeSection === "main" ? "bg-gray-700" : "hover:bg-gray-700 text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-layout-dashboard"
          >
            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#about-me"
          className={`p-2 rounded-full ${
            activeSection === "about-me" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          <User
            className={`${
              activeSection === "about-me"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#skills"
          className={`p-2 rounded-full ${
            activeSection === "skills" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          <Code
            className={`${
              activeSection === "skills"    
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          />
        </a>
      </div>
      <div className="p-2 hover:bg-gray-700 rounded-full">
        <Monitor className="text-gray-400 hover:text-white" />
      </div>
      <div className="p-2 hover:bg-gray-700 rounded-full">
        <Mail className="text-gray-400 hover:text-white" />
      </div>
    </div>
  );
};

export default Sidebar;
