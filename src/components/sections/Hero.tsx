import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              Full Stack MERN Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Crafting Digital Experiences with 
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> Modern Tech</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              I build robust, scalable web applications using MongoDB, Express, React, and Node.js to solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="btn-primary"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#contact" 
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 w-full max-w-sm aspect-square filter grayscale hover:grayscale-0 transition duration-300 " >
                {/* Profile image placeholder - Replace URL with your actual image */}
                <img 
                  src="/utilities/images/robo.jpg" 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;