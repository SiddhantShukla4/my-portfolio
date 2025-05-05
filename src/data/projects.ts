
export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[]
  year: string;
  demoUrl?: string;
  repoUrl?: string;
  detailUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Zuno - video conferncing app',
    description: 'A video conferencing application with real-time chat, screen sharing,schedule meetings and user authentication.',
    image: '/images/zuno-bg.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    category:[ 'fullstack','frontend', 'backend'],
    year: '2023',
    demoUrl: 'https://github.com/SiddhantShukla4/Zuno-video_conferencing.git',
    repoUrl: 'https://github.com/SiddhantShukla4/Zuno-video_conferencing.git',
    detailUrl: 'https://github.com/SiddhantShukla4/Zuno-video_conferencing.git'
  },
  {
    id: 'project-2',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.',
    image: '/images/e-commerce-bg.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Stripe API'],
    category:[ 'fullstack','frontend', 'backend'],
    year: '2024',
    demoUrl: 'https://github.com/SiddhantShukla4/E-Commerce-Platform.git',
    repoUrl: 'https://github.com/SiddhantShukla4/E-Commerce-Platform.git',
    detailUrl: 'https://github.com/SiddhantShukla4/E-Commerce-Platform.git'
  },
  {
    id: 'project-3',
    title: 'Project-Management tool',
    description: 'A full-stack Project Management Tool designed to Add Task , tracking your routine . This tool helps users manage projects, assign tasks, track progress, and improve productivity.',
    image: '/images/project-bg.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js'],
    category: [ 'fullstack','frontend', 'backend'],
    year: '2024',
    demoUrl: 'https://github.com/SiddhantShukla4/Project-Management-Tool.git',
    repoUrl: 'https://github.com/SiddhantShukla4/Project-Management-Tool.git',
    detailUrl: 'https://github.com/SiddhantShukla4/Project-Management-Tool.git'
  },
  // {
  //   id: 'project-4',
  //   title: 'Anonymous feedback app',
  //   description: 'An anonymous feedback application that allows users to submit and view feedback without revealing their identities.',
  //   image: '/src/images/feedback-bg.png',
  //   technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
  //   category: [ 'fullstack','frontend', 'backend'],
  //   year: '2024',
  //   demoUrl: 'https://github.com/SiddhantShukla4/Anonymous-Feedbacks.git',
  //   repoUrl: 'https://github.com/SiddhantShukla4/Anonymous-Feedbacks.git',
  //   detailUrl: 'https://github.com/SiddhantShukla4/Anonymous-Feedbacks.git'
  // },

  
  
];