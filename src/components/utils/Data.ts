import {
    Gamepad2,
    Headphones,
    Image,
    LucideIcon,
    Share2,
    Shirt,
    ShoppingCart,
    Ticket,
} from 'lucide-react';

export interface ISectionCardData {
    id: number;
    title: string;
    src: string;
    exp: string;
    snippetCount: number;
    progress: number;
    href?: string;
}

export interface IProjectSectionCardData {
    id: number;
    Icon: LucideIcon;
    title: string;
    bgColor: string;
    techStack: string;
    href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
    {
        id: 1,
        title: 'PostHive',
        techStack:
            'Node.js,Apollo Server,GraphQL,TypeORM,PostgreSQL,Next.js 13,Redis,TypeScript,Material-UI',
        Icon: Headphones,
        bgColor: '#264653',
        href: 'https://github.com/anshvert/PostHive',
    },
    {
        id: 2,
        title: 'CodeNub',
        techStack:
            'Next.js 13,Firebase-Auth,FireStore,Typescript, Tailwind CSS',
        Icon: Shirt,
        bgColor: '#2a9d8f',
        href: 'https://github.com/anshvert/CodeNub',
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        techStack:
            'NodeJs,Express Next.js 13,Typescript,Tailwind CSS',
        Icon: ShoppingCart,
        bgColor: '#e9c46a',
        href: 'https://github.com/anshvert/Portfolio',
    },
    {
        id: 4,
        title: 'Discode',
        techStack: 'Python,Django,HTML/CSS,JS,SQLite3',
        Icon: Ticket,
        bgColor: '#ff2c55',
        href: 'https://github.com/anshvert/Discode',
    },
    {
        id: 5,
        title: 'App Radiant',
        techStack: 'Reactjs,Nestjs,TypeScript,MongoDB',
        Icon: Share2,
        bgColor: '#e76f51',
        href: 'https://github.com/anshvert/App-Radiant',
    },
    {
        id: 6,
        title: 'Mender',
        techStack: 'Python,Streamlit,HTML/CSS,JS',
        Icon: Image,
        bgColor: '#933e05',
        href: 'https://github.com/anshvert/Mender',
    },
    {
        id: 7,
        title: 'Zombie Fighter',
        techStack: 'Vue.js,BabylonJS,TypeScript',
        Icon: Gamepad2,
        bgColor: '#353535',
        href: 'https://babylon-world.vercel.app/',
    },
];

export const frontendCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'HTML, CSS',
        src: '/tech/frontend/htmlcss.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: 'Tailwind',
        src: '/tech/frontend/tailwind.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 3,
        title: 'Javascript, Typescript',
        src: '/tech/frontend/jsts.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 85,
    },
    {
        id: 4,
        title: 'Reactjs',
        src: '/tech/frontend/reactjs.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 5,
        title: 'Nextjs 13',
        src: '/tech/frontend/nextjs13.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
];

export const backendCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'NodeJs',
        src: '/tech/backend/nodejs.webp',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: 'ExpressJs',
        src: '/tech/backend/express.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 3,
        title: 'DenoJs',
        src: '/tech/backend/denojs.webp',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 60,
    },
    {
        id: 4,
        title: 'Next Auth',
        src: '/tech/backend/nextauth.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 5,
        title: 'PHP',
        src: '/tech/backend/php.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];

export const databaseCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'MySQL',
        src: '/tech/database/mysql.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: 'MongoDB',
        src: '/tech/database/mongo.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: 'Redis',
        src: '/tech/database/redis.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 4,
        title: 'PostgreSQL',
        src: '/tech/database/postgres.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 5,
        title: 'Elastic Search',
        src: '/tech/database/elasticSearch.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];

export const devopsCards: ISectionCardData[] = [
    {
        id: 1,
        title: 'Docker',
        src: '/tech/devops/docker.webp',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: 'Kubernetes',
        src: '/tech/devops/k8s.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: 'GIT',
        src: '/tech/devops/git.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 4,
        title: 'Jenkins',
        src: '/tech/devops/jenkins.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 5,
        title: 'Terraform',
        src: '/tech/devops/terraform.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 60,
    },
];

export const web3Cards: ISectionCardData[] = [
    {
        id: 1,
        title: 'Solidity',
        src: '/tech/web3/solidity.jfif',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: 'Hardhat',
        src: '/tech/web3/hardhat.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: 'Metamask',
        src: '/tech/web3/metamask.webp',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 4,
        title: 'Chainlink',
        src: '/tech/web3/chainlink.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 5,
        title: 'OpenZeppelin',
        src: '/tech/web3/openzeppelin.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];

export const otherCards: ISectionCardData[] = [
    {
        id: 1,
        title: 'Rest API',
        src: '/tech/others/rest.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: 'SOAP API',
        src: '/tech/others/soap.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 3,
        title: 'GraphQl',
        src: '/tech/others/graphql.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];
