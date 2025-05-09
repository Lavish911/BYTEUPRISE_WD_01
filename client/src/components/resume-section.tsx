import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { experiences, education } from "@/lib/data";

export default function ResumeSection() {
  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  const { ref: contentRef, inView: contentInView } = useScrollAnimation();

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-opacity duration-700 ease-in-out ${
            titleInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div 
          ref={contentRef}
          className={`max-w-4xl mx-auto transition-opacity duration-700 ease-in-out ${
            contentInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-bold mb-2">Lavish Rahangdale</h3>
                <p className="text-gray-600">Web Developer & Designer</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-lg shadow hover:bg-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    // In a real application, you would replace this with a link to an actual resume PDF
                    alert('Resume download would happen here in a real application');
                  }}
                >
                  <i className="fas fa-download mr-2"></i>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-12">
              {/* Experience Section */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <i className="fas fa-briefcase text-primary mr-2"></i>
                  <span>Work Experience</span>
                </h4>
                <div className="ml-6 space-y-6">
                  {experiences.map((experience, index) => (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200">
                      <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-400'}`}></div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h5 className="font-semibold text-lg">{experience.title}</h5>
                          <span className={`inline-block ${index === 0 ? 'bg-blue-100 text-primary' : 'bg-gray-100 text-gray-700'} text-sm px-2 py-1 rounded mt-1 sm:mt-0`}>
                            {experience.period}
                          </span>
                        </div>
                        <p className="text-gray-600 italic mb-2">{experience.company}</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {experience.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education Section */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <i className="fas fa-graduation-cap text-primary mr-2"></i>
                  <span>Education</span>
                </h4>
                <div className="ml-6 space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200">
                      <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-400'}`}></div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h5 className="font-semibold text-lg">{edu.degree}</h5>
                          <span className={`inline-block ${index === 0 ? 'bg-blue-100 text-primary' : 'bg-gray-100 text-gray-700'} text-sm px-2 py-1 rounded mt-1 sm:mt-0`}>
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-gray-600 italic mb-2">{edu.institution}</p>
                        <p className="text-gray-700">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
