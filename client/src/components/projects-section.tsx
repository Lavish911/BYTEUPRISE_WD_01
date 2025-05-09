import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  const { ref: projectsRef, inView: projectsInView } = useScrollAnimation();
  const { ref: buttonRef, inView: buttonInView } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-opacity duration-700 ease-in-out ${
            titleInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            Check out some of my recent work
          </p>
        </div>
        
        <div 
          ref={projectsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700 ease-in-out ${
            projectsInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`bg-${index === 0 ? 'primary' : index === 1 ? 'secondary' : 'accent'} text-white text-xs font-medium px-2.5 py-1 rounded ${techIndex > 0 ? 'ml-1' : ''}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a href={project.liveLink} className="text-primary hover:text-blue-700 font-medium flex items-center">
                    <span>View Project</span>
                    <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                  <a href={project.githubLink} className="text-gray-700 hover:text-gray-900 transition-colors">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          ref={buttonRef}
          className={`mt-12 text-center transition-opacity duration-700 ease-in-out ${
            buttonInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          <a href="#" className="inline-flex items-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
            <span>View All Projects</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>

      {/* Project card styles moved to index.css */}
    </section>
  );
}
