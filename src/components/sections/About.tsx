import { Server, Database, Code, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column with image */}
          <div className="lg:w-5/12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 dark:bg-blue-900/30 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-100 dark:bg-purple-900/30 rounded-lg z-0"></div>
              
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/src/utilities/images/hacked.jpg" 
                  alt="Developer working on code" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
    
          <div className="lg:w-7/12">
            <div className="space-y-6">
              <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                About Me
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {/* Passionate MERN Stack Developer Creating Impactful Web Solutions */} Siddhant Shukla
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg">
              A passionate and driven developer with a focus on Java, Mern Stack Development. Currently on a journey to expand my skill set and make a meaningful impact in the tech world, I’m always looking to explore new technologies and tackle complex challenges.
              With a solid foundation in Java , I enjoy building responsive web applications and solving real-world problems through code. 
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                My approach focuses on building scalable, maintainable applications with clean code and modern 
                best practices. I'm passionate about creating intuitive user experiences and solving complex 
                problems through elegant solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                      <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Language</h3>
                    <p className="text-gray-600 dark:text-gray-400">Java & Python</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                      <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Frontend Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">React.js & Next.js</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                      <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Backend</h3>
                    <p className="text-gray-600 dark:text-gray-400">Express.js & Node.js</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                      <Globe className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Database Management</h3>
                    <p className="text-gray-600 dark:text-gray-400">MongoDB & MYSQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;