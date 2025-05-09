import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { frontendSkills, backendSkills, toolsSkills } from "@/lib/data";

export default function SkillsSection() {
  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  const { ref: frontendRef, inView: frontendInView } = useScrollAnimation();
  const { ref: backendRef, inView: backendInView } = useScrollAnimation();
  const { ref: toolsRef, inView: toolsInView } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-opacity duration-700 ease-in-out ${
            titleInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            Here are the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div 
            ref={frontendRef}
            className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow transition-opacity duration-700 ease-in-out ${
              frontendInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <i className="fas fa-code text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <div className="space-y-3">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between skill-badge">
                    <span className="font-medium">{skill.name}</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Backend Development */}
          <div 
            ref={backendRef}
            className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow transition-opacity duration-700 ease-in-out ${
              backendInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <i className="fas fa-server text-secondary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <div className="space-y-3">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between skill-badge">
                    <span className="font-medium">{skill.name}</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-secondary h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tools & Others */}
          <div 
            ref={toolsRef}
            className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow transition-opacity duration-700 ease-in-out ${
              toolsInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <i className="fas fa-tools text-accent text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
              <div className="space-y-3">
                {toolsSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between skill-badge">
                    <span className="font-medium">{skill.name}</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-accent h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill styles moved to index.css */}
    </section>
  );
}
