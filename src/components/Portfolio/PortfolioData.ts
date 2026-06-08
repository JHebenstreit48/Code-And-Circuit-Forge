export type ProjectGroup = 'Early Projects' | 'Current Projects' | 'Planned Projects';

export interface IPortfolioCard {
  image?: string;
  name: string;
  description: string;
  gitHubRepo?: string;
  deployment?: string;
  tags: string[];
  group?: ProjectGroup;
}

const portfolioData: IPortfolioCard[] = [
  // --------------------- Early Projects Start -------------------
  {
    image: 'star-wars-site.png',
    name: 'Star Wars v1',
    description: 'Non-React version of Star Wars website',
    gitHubRepo: 'https://github.com/JHebenstreit48/star-wars',
    deployment: 'https://jhebenstreit48.github.io/star-wars/',
    tags: ["HTML", "CSS"],
    group: 'Early Projects',
  },
  {
    image: 'coding-notes-v1.png',
    name: 'Portfolio v1',
    description: 'Non-React version of my portfolio',
    gitHubRepo: 'https://github.com/JHebenstreit48/portfolio',
    deployment: 'https://jhebenstreit48.github.io/coding-study-guide/',
    tags: [],
    group: 'Early Projects',
  },
  {
    image: 'asphalt-legends-unite-non-react.png',
    name: 'Asphalt Legends v1',
    description: 'Non-React version of Asphalt Legends Unite video game site',
    gitHubRepo: 'https://github.com/JHebenstreit48/asphalt-legends-unite',
    deployment: 'https://jhebenstreit48.github.io/asphalt-legends-unite/',
    tags: [],
    group: 'Early Projects',
  },
  // --------------------- Early Projects End -------------------

  // --------------------- Current Projects Start -------------------
  {
    image: 'ALUTracker.png',
    name: 'ALU Tracker',
    description: 'React version of Asphalt Legends Unite video game site',
    gitHubRepo: 'https://github.com/JHebenstreit48/asphalt-legends-unite-react',
    deployment: 'https://asphaltlegendsunitetracker.netlify.app/',
    tags: ["React", "TypeScript", "SCSS", "Node.js", "MongoDB", "Express", "Netlify", "Render.com"],
    group: 'Current Projects',
  },
  {
    image: 'DevScriptStax.png',
    name: 'DevScriptStax',
    description: 'React version of Coding Notes website',
    gitHubRepo: 'https://github.com/JHebenstreit48/DevScriptStax',
    deployment: 'https://devscriptstax.netlify.app/',
    tags: ["React", "TypeScript", "SCSS", "Node.js", "MongoDB", "Express", "Netlify", "Render.com"],
    group: 'Current Projects',
  },
  {
    image: 'NetNotes.png',
    name: 'NetNotes',
    description: 'A web application for my notes on all things Cisco and IT networking related.',
    gitHubRepo: 'https://github.com/JHebenstreit48/NetNotes',
    deployment: 'https://netnotes.netlify.app/',
    tags: ["React", "TypeScript", "SCSS", "Node.js", "MongoDB", "Express", "Netlify", "Render.com"],
    group: 'Current Projects',
  },
  {
    image: 'PixelProse.png',
    name: 'PixelProse',
    description: "A web application for my notes on all things console gaming related.",
    gitHubRepo: 'https://github.com/JHebenstreit48/PixelProse',
    deployment: 'https://pixelprose.netlify.app/',
    tags: ["React", "TypeScript", "SCSS", "Node.js", "MongoDB", "Express", "Netlify", "Render.com"],
    group: 'Current Projects',
  },
  {
    image: 'AppFoundry.png',
    name: 'App Foundry',
    description: 'A web application for my notes on all things mobile app and game development.',
    gitHubRepo: 'https://github.com/JHebenstreit48/AppFoundry',
    deployment: 'https://appfoundry.netlify.app/',
    tags: ["React", "TypeScript", "SCSS", "Node.js", "MongoDB", "Express", "Netlify", "Render.com"],
    group: 'Current Projects',
  },
  // --------------------- Current Projects End -------------------

  // --------------------- Planned Projects Start -------------------
  {
    name: 'Film2Bytes',
    description: 'A web application for my film scanning and retouch services business.',
    gitHubRepo: 'https://github.com/JHebenstreit48/Film2Bytes',
    deployment: '',
    tags: ["Angular", "TypeScript", "SCSS", "Node.js"],
    group: 'Planned Projects',
  },
  // --------------------- Planned Projects End -------------------
];

export default portfolioData;