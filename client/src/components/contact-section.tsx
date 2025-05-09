import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ContactForm from "@/components/contact-form";

export default function ContactSection() {
  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  const { ref: infoRef, inView: infoInView } = useScrollAnimation();
  const { ref: formRef, inView: formInView } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-opacity duration-700 ease-in-out ${
            titleInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            Have a project in mind or want to know more? Feel free to contact me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div 
            ref={infoRef}
            className={`lg:col-span-2 space-y-8 transition-opacity duration-700 ease-in-out ${
              infoInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-blue-50 rounded-xl p-6 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <i className="fas fa-envelope text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <p className="text-gray-600">lavishr213@gmail.com</p>
                <a href="mailto:lavishr213@gmail.com" className="text-primary hover:text-blue-700 text-sm mt-1 inline-block">
                  Send an email
                </a>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <i className="fas fa-phone text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Phone</h4>
                <p className="text-gray-600">+91 7768829106</p>
                <a href="tel:+917768829106" className="text-primary hover:text-blue-700 text-sm mt-1 inline-block">
                  Give me a call
                </a>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <i className="fas fa-map-marker-alt text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Location</h4>
                <p className="text-gray-600">Nagpur, Maharashtra, India</p>
                <p className="text-gray-500 text-sm mt-1">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center transition-colors">
                  <i className="fab fa-github text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center transition-colors">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors">
                  <i className="fab fa-youtube text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={formRef}
            className={`lg:col-span-3 transition-opacity duration-700 ease-in-out ${
              formInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-6">Send Me a Message</h4>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
