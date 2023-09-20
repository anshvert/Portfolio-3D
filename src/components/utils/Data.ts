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
        progress: 70,
    },
    {
        id: 2,
        title: 'Tailwind',
        src: '/tech/frontend/tailwind.jpg',
        progress: 60,
    },
    {
        id: 3,
        title: 'Javascript, Typescript',
        src: '/tech/frontend/jsts.jpeg',
        progress: 90,
    },
    {
        id: 4,
        title: 'Reactjs',
        src: '/tech/frontend/reactjs.jpg',
        progress: 90,
    },
    {
        id: 5,
        title: 'Nextjs 13',
        src: '/tech/frontend/nextjs13.jpeg',
        progress: 75,
    },
    {
        id: 6,
        title: 'Vuejs',
        src: '/tech/frontend/vue.png',
        progress: 50,
    },
    {
        id: 7,
        title: 'MUI',
        src: '/tech/frontend/mui.png',
        progress: 50,
    },
];

export const backendCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'NodeJs',
        src: '/tech/backend/nodejs.webp',
        progress: 90,
    },
    {
        id: 2,
        title: 'ExpressJs',
        src: '/tech/backend/express.png',
        progress: 90,
    },
    {
        id: 3,
        title: 'NestJs',
        src: '/tech/backend/nestjs.jpg',
        progress: 80,
    },
    {
        id: 4,
        title: 'URQL',
        src: '/tech/backend/urql.png',
        progress: 40,
    },
    {
        id: 5,
        title: 'Firebase',
        src: '/tech/backend/fireBase.png',
        progress: 60,
    },
    {
        id: 6,
        title: 'TypeORM',
        src: '/tech/backend/typeorm.png',
        progress: 60,
    }
];

export const threeDCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'Three.js',
        src: '/tech/3D/threejs.png',
        progress: 50
    }
] 

export const databaseCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'MySQL',
        src: '/tech/database/mysql.jpeg',
        progress: 90,
    },
    {
        id: 2,
        title: 'MongoDB',
        src: '/tech/database/mongo.png',
        progress: 90,
    },
    {
        id: 3,
        title: 'Redis',
        src: '/tech/database/redis.jpeg',
        progress: 90,
    },
    {
        id: 4,
        title: 'PostgreSQL',
        src: '/tech/database/postgres.png',
        progress: 60,
    },
    {
        id: 5,
        title: 'Firestore',
        src: '/tech/database/fireStore.png',
        progress: 60,
    },
];

export const devopsCards: ISectionCardData[] = [
    {
        id: 1,
        title: 'Docker',
        src: '/tech/devops/docker.webp',
        progress: 40,
    },
    {
        id: 2,
        title: 'GIT',
        src: '/tech/devops/git.png',
        progress: 90,
    }
];

export const web3Cards: ISectionCardData[] = [
    {
        id: 1,
        title: 'Metamask',
        src: '/tech/web3/metamask.webp',
        progress: 50,
    }
];

export const otherCards: ISectionCardData[] = [
    {
        id: 1,
        title: 'Rest API',
        src: '/tech/others/restapi.png',
        progress: 90,
    },
    {
        id: 2,
        title: 'GraphQl',
        src: '/tech/others/graphql.png',
        progress: 70,
    },
];
