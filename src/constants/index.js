import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Training and Internship",
        company_name: "IBM Skillbuild",
        icon: react,
        iconBg: "#accbe1",
        date: "June 2024 - August 2024",
        points: [
            "Led web design for Civique, an Urban Planning and Citizen Engagement Platform, boosting user engagement through React.js and Leaﬂet.js.",
            "Utilized React.js, Leaﬂet.js, Tailwind CSS, and Git/GitHub for versioncontrol.",
            "Integrated GIS features with MapTiler OSM for real-time mapping and citizen interaction.",
            "Deployed on Vercel: civique.vercel.app",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/amansingh35895',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/amansingh6187',
    }
];

export const projects = [
    {
        iconUrl: nextjs,
        theme: 'btn-back-black',
        name: 'Hilink',
        description: 'Website for a travel agency',
        link: 'https://travel-and-tour-indol.vercel.app/',
    },
    {
        iconUrl: git,
        theme: 'btn-back-red',
        name: 'Jadoo',
        description: 'Website for a travel agency',
        link: 'https://travel-two-virid.vercel.app/',
    },
    {
        iconUrl: redux,
        theme: 'btn-back-black',
        name: 'Sunny Fitness',
        description: 'Website for a gym business',
        link: 'https://sunnyfitness.vercel.app/',
    },
    {
        iconUrl: typescript,
        theme: 'btn-back-red',
        name: 'Evogym',
        description: 'Website for a gym business',
        link: 'https://gym-digital-dwaar.vercel.app/',
    },
    {
        iconUrl: javascript,
        theme: 'btn-back-black',
        name: 'Urban Planning Website',
        description: 'Made it during my training and internship in IBM Skillbuild',
        link: 'https://github.com/AmanSingh35895/CIVIQUE',
    },
    {
        iconUrl: tailwindcss,
        theme: 'btn-back-blue',
        name: 'Sorting Visualizer',
        description: 'A frontend application that show how different types of sorting works',
        link: 'https://github.com/AmanSingh35895/sorting_visualiser',
    },
    {
        iconUrl: css,
        theme: 'btn-back-pink',
        name: 'Cat Photo App',
        description: 'A simple frontend app using html css and javascript which shows the cat photo storing it in the local storage',
        link: 'https://github.com/AmanSingh35895/CatPhotoApp',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];
