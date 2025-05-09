import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function HeroSection() {
  const { ref: textRef, inView: textInView } = useScrollAnimation();
  const { ref: imageRef, inView: imageInView } = useScrollAnimation();

  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div 
            ref={textRef}
            className={`md:w-1/2 transition-opacity duration-700 ease-in-out ${
              textInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-primary">Lavish Rahangdale</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              Backend Developer | AI Student | Blockchain Enthusiast
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Motivated and detail-oriented B.Tech student in Artificial Intelligence, 
              seeking to apply and expand technical skills in backend development, IoT, and blockchain.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-primary font-medium rounded-lg border border-primary hover:bg-gray-50 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div 
            ref={imageRef}
            className={`md:w-1/2 flex justify-center md:justify-end transition-opacity duration-700 ease-in-out ${
              imageInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            <img 
              src="/src/assets/profile-picture.png"
              alt="Lavish Rahangdale - Backend Developer" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl" 
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
