import { Github, Linkedin, Mail, Twitter, X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Siddhant<span className="font-normal"> Shukla</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/SiddhantShukla4" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/siddhant-shukla-730a4820b" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" aria-label="Twitter">
                  <X className="w-5 h-5" />
                </a>
               
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;