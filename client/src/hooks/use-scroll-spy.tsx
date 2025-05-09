import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Find the current section by checking which section's top is closest to the current scroll position
      // Use a section's offsetTop and height to determine if it's in the viewport
      let currentSection: string | null = null;
      let minDistance = Number.MAX_VALUE;
      
      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        
        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionHeight = section.offsetHeight;
          const distance = Math.abs(scrollY - sectionTop);
          
          // Check if we are within the section's bounds
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = sectionId;
            }
          }
        }
      });
      
      // Special case for the first section when at the top of the page
      if (scrollY < offset && sectionIds.includes('home')) {
        currentSection = 'home';
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset, activeSection]);

  return activeSection;
}
