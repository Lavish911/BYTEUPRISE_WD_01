import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const { ref: textRef, inView: textInView } = useScrollAnimation();
  const { ref: imageRef, inView: imageInView } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={textRef}
            className={`space-y-6 order-2 lg:order-1 transition-opacity duration-700 ease-in-out ${
              textInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm Lavish Rahangdale, a motivated B.Tech student in Artificial Intelligence at G. H. Raisoni College of Engineering 
              and Management, Nagpur. I'm passionate about backend development, blockchain technology, and IoT systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I have hands-on experience developing smart contracts using Solidity and building robust backend systems with Node.js. 
              My recent projects include a blockchain-based voting system and an IoT-based smart helmet for enhanced safety. 
              I'm also proud to have co-authored a publication on smart helmet technology in the ACT-2025 conference.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary mt-1 mr-2"></i>
                    <span>B.Tech in Artificial Intelligence<br/>G. H. Raisoni College of Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-certificate text-primary mt-1 mr-2"></i>
                    <span>Expected Graduation: June 2026<br/>CGPA: 7.1/10</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-briefcase text-primary mt-1 mr-2"></i>
                    <span>Backend Developer<br/>Blockchain-Based Voting System</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-briefcase text-primary mt-1 mr-2"></i>
                    <span>Backend Developer<br/>IoT-Based Smart Helmet System</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-6">
              <a href="#resume" className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors">
                <span>View Full Resume</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`order-1 lg:order-2 flex justify-center transition-opacity duration-700 ease-in-out ${
              imageInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              <img 
                src="/src/assets/profile-picture.png" 
                alt="Lavish Rahangdale - Backend Developer" 
                className="w-full max-w-md h-auto rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg">
                <span className="text-lg font-semibold">Backend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
