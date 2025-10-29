import { Images } from '@/assets/images/images';

export interface IPortfolioCard {
    image?: string;
    name: string;
    description: string;
    gitHubRepo?: string;
    deployment?: string;
    tags: string[];                        // NEW
    group?: 'Recent Projects' | 'Early Projects';  // NEW (for section titles)
  }

const portfolioData: IPortfolioCard[] = [
    {
        image: Images.StarWars,
        name: 'Star Wars v1',
        description: 'Non-React version of Star Wars website',
        gitHubRepo: 'https://github.com/JHebenstreit48/star-wars',
        deployment: 'https://jhebenstreit48.github.io/star-wars/',
        tags: []
    },
    {
        image: Images.CodingNotesV1,
        name: 'Portfolio v1',
        description: 'Non-React version of my portfolio',
        gitHubRepo: 'https://github.com/JHebenstreit48/portfolio',
        deployment: 'https://jhebenstreit48.github.io/coding-study-guide/',
        tags: []
    },
    {
        image: Images.AsphaltLegendsv1,
        name: 'Asphalt Legends v1',
        description: 'Non-React version of Asphalt Legends Unite video game site',
        gitHubRepo: 'https://github.com/JHebenstreit48/asphalt-legends-unite',
        deployment: 'https://jhebenstreit48.github.io/asphalt-legends-unite/',
        tags: []
    },
    {
        image: Images.ALUTracker,
        name: 'ALU Tracker',
        description: 'React version of Asphalt Legends Unite video game site',
        gitHubRepo: 'https://github.com/JHebenstreit48/asphalt-legends-unite-react',
        deployment: 'https://asphaltlegendsunitetracker.netlify.app/',
        tags: []
    },
    {
        image: Images.DevScriptStax,
        name: 'DevScriptStax',
        description: 'React version of Coding Notes website',
        gitHubRepo: 'https://github.com/JHebenstreit48/DevScriptStax',
        deployment: 'https://devscriptstax.netlify.app/',
        tags: []
    },
    {
        image: Images.NetNotes,
        name: 'NetNotes',
        description: 'A web application for my notes on all things Cisco and IT networking related.',
        gitHubRepo: 'https://github.com/JHebenstreit48/NetNotes',
        deployment: 'https://netnotes.netlify.app/',
        tags: []
    },
    {
        image: Images.PixelProse,
        name: 'PixelProse',
        description: "A web application for my notes on all things console gaming related.",
        gitHubRepo: 'https://github.com/JHebenstreit48/PixelProse',
        deployment: 'https://pixelprose.netlify.app/',
        tags: []
    },
    {
        image: Images.AppFoundry,
        name: 'App Foundry',
        description: 'A web application for my notes on all things mobile app and game development.',
        gitHubRepo: 'https://github.com/JHebenstreit48/AppFoundry',
        deployment: 'https://appfoundry.netlify.app/',
        tags: []
    },
    {
        // image: Images.Film2Bytes,
        name: 'Film2Bytes',
        description: 'A web application for my film scanning and retouch services business.',
        gitHubRepo: '',
        deployment: '',
        tags: []
    }
];

export default portfolioData
