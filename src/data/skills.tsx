import { Database, Server, Code, Globe, Layers, BarChart3} from 'lucide-react';
import React from 'react';

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
  bgColor: string;
}

type SkillsData = {
  [key: string]: Skill[];
}

export const skillsData: SkillsData = {
 
  frontend: [
    {
      name: 'Next.js',
      level: 80,
      icon: <Globe className="w-8 h-8 text-gray-800 dark:text-gray-200" />,
      bgColor: 'bg-gray-100 dark:bg-gray-800'
    },
    {
      name: 'React.js',
      level: 95,
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      name: 'JavaScript',
      level: 90,
      icon: <Code className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30'
    },
    {
      name: 'TypeScript',
      level: 85,
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      name: 'HTML5/CSS3',
      level: 95,
      icon: <Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    },
    
    {
      name: 'Tailwind CSS',
      level: 90,
      icon: <Code className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      bgColor: 'bg-teal-100 dark:bg-teal-900/30'
    }
  ],
  Languages:[
    {name: 'Java',
      level:80 ,
       icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      name: 'Python',
      level: 70,
      icon: <Code className="w-8 h-8 text-green-600" />,
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30'
    },
    {
      name: 'JavaScript',
      level: 90,
      icon: <Code className="w-8 h-8 text-green-600 dark:text-green-400" />,
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    }
  ],
  backend: [
    {
      name: 'Node.js',
      level: 90,
      icon: <Server className="w-8 h-8 text-green-600 dark:text-green-400" />,
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    },
    {
      name: 'Express.js',
      level: 90,
      icon: <Server className="w-8 h-8 text-gray-600 dark:text-gray-400" />,
      bgColor: 'bg-gray-100 dark:bg-gray-800'
    },
    {
      name: 'MongoDB',
      level: 85,
      icon: <Database className="w-8 h-8 text-green-600 dark:text-green-400" />,
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    },
    {
      name: 'REST API',
      level: 95,
      icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    
    {
      name: 'MySQL',
      level: 80,
      icon: <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    
    {
      name: 'JWT Auth',
      level: 85,
      icon: <Layers className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30'
    }
  ],
  tools: [
    {
      name: 'Git/GitHub',
      level: 90,
      icon: <Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    },
    {
      name: 'Docker',
      level: 70,
      icon: <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    
    
    {
      name: 'Postman',
      level: 85,
      icon: <BarChart3 className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      name: 'Figma',
      level: 80,
      icon: <Layers className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
      bgColor: 'bg-pink-100 dark:bg-pink-900/30'
    }
  ]
};