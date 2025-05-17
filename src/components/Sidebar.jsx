import { Mail, Code, User, Monitor, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const sections = ["main", "about-me", "skills", "works", "contact"];
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

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    // Initial checks
    handleResize();
    handleScroll();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      id: "main",
      icon: (
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
      ),
      onClick: scrollToTop,
    },
    { id: "about-me", icon: <User />, title: "About Me" },
    { id: "skills", icon: <Code />, title: "Skills" },
    { id: "works", icon: <Monitor />, title: "Works" },
    { id: "contact", icon: <Mail />, title: "Contact" },
  ];

  const renderNavItem = (item) => {
    const isActive = activeSection === item.id;
    
    if (item.id === "main") {
      return (
        <button
          key={item.id}
          onClick={item.onClick}
          className={`p-2 rounded-full ${
            isActive ? "bg-gray-700" : "hover:bg-gray-700 text-gray-400 cursor-pointer"
          }`}
          title="Home"
        >
          {item.icon}
        </button>
      );
    }
    
    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={`p-2 rounded-full ${
          isActive ? "bg-gray-700" : "hover:bg-gray-700"
        }`}
        title={item.title}
      >
        <div className={isActive ? "text-white" : "text-gray-400 hover:text-white"}>
          {item.icon}
        </div>
      </a>
    );
  };

  // Mobile hamburger button
  const hamburgerButton = (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="fixed top-[70px] left-4 z-50 p-2 rounded-full bg-gray-800 text-white"
    >
      {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );

  // Mobile menu overlay
  const mobileMenu = isMobileMenuOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg p-6 flex flex-col space-y-6">
        {navItems.map(renderNavItem)}
      </div>
    </div>
  );

  // Desktop sidebar
  const desktopSidebar = !isMobile && (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 bg-gray-800 rounded-full p-2 flex flex-col space-y-6 z-30">
      {navItems.map(renderNavItem)}
    </div>
  );

  return (
    <>
      {isMobile && hamburgerButton}
      {mobileMenu}
      {desktopSidebar}
    </>
  );
};

export default Sidebar;