import { Images } from '@/assets/images/images';

export type Featured = {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  to: string;         // internal route (or external url)
  tags?: string[];
};

// keep this small and focused on what the Home page actually needs
export const featuredProjects: Featured[] = [
  {
    id: 'early',
    title: 'Asphalt Legends v1',
    subtitle: 'Early Projects',
    image: Images.Asphalt,
    to: '/portfolio#proj-asphalt-legends-v1',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 'recent',
    title: 'DevScriptStax',
    subtitle: 'Recent Projects',
    image: Images.CodeQuest,     // adjust to your actual key
    to: '/portfolio#proj-devscriptstax',
    tags: ['React', 'Node', 'TypeScript', 'MongoDB', 'Express', 'JSON',],
  },
];