import { useState } from 'react';
import { projectsData } from '../../data/projects';
import { Globe, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(activeFilter)
        );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A collection of my recent projects that showcase my skills and experience in building robust web applications.
          </p>
        </div>

        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'frontend', 'fullstack', 'backend'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          aria-label="Live Demo"
                        >
                          <Globe className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          aria-label="Source Code"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Categories + Year */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2 flex-wrap">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs font-medium py-1 px-2 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300"
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs py-1 px-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.detailUrl}
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm mt-auto"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
