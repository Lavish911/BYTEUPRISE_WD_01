import { useState, useEffect } from "react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const activeSection = useScrollSpy(['home', 'about', 'skills', 'projects', 'resume', 'contact']);
  
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Add shadow when scrolled
      setIsScrolled(scrollY > 100);
      
      // Hide navbar when scrolling down past hero section
      if (scrollY > 500) {
        setIsHidden(scrollY > lastScrollY);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      id="navbar" 
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : ''
      }`}
      style={{ 
        top: isHidden ? '-80px' : '0',
        transition: 'top 0.3s ease-in-out'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold text-primary font-accent">LR</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className={`nav-link text-gray-800 hover:text-primary transition-colors relative ${
                activeSection === 'home' ? 'nav-active after:w-full' : 'after:w-0'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`nav-link text-gray-800 hover:text-primary transition-colors relative ${
                activeSection === 'about' ? 'nav-active after:w-full' : 'after:w-0'
              }`}
            >
              About
            </a>
            <a 
              href="#skills" 
              className={`nav-link text-gray-800 hover:text-primary transition-colors relative ${
                activeSection === 'skills' ? 'nav-active after:w-full' : 'after:w-0'
              }`}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className={`nav-link text-gray-800 hover:text-primary transition-colors relative ${
                activeSection === 'projects' ? 'nav-active after:w-full' : 'after:w-0'
              }`}
            >
              Projects
            </a>
            <a 
              href="#resume" 
              className={`nav-link text-gray-800 hover:text-primary transition-colors relative ${
                activeSection === 'resume' ? 'nav-active after:w-full' : 'after:w-0'
              }`}
            >
              Resume
            </a>
            <a 
              href="#contact" 
              className={`nav-link text-gray-800 hover:text-primary transition-colors relative ${
                activeSection === 'contact' ? 'nav-active after:w-full' : 'after:w-0'
              }`}
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              id="menu-toggle" 
              className="text-gray-800 hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden bg-white border-t border-gray-200 animate-fade-in ${mobileMenuOpen ? '' : 'hidden'}`}
      >
        <div className="container mx-auto px-4 py-3 space-y-2">
          <a 
            href="#home" 
            className="block py-2 text-gray-800 hover:text-primary"
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block py-2 text-gray-800 hover:text-primary"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="block py-2 text-gray-800 hover:text-primary"
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="block py-2 text-gray-800 hover:text-primary"
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#resume" 
            className="block py-2 text-gray-800 hover:text-primary"
            onClick={closeMobileMenu}
          >
            Resume
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-gray-800 hover:text-primary"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Navigation styles moved to index.css */}
    </nav>
  );
}
