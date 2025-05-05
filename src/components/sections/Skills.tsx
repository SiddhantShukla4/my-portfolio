import { useState } from 'react';
import { skillsData } from '../../data/skills';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Proficiencies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My comprehensive skillset allows me to build complete, scalable web applications 
            from the ground up, with a focus on performance and user experience.
          </p>
        </div>
        
        {/* Skills tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === category
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData[activeTab].map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col items-center"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-lg mb-4 ${skill.bgColor}`}>
                {skill.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;