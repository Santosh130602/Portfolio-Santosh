/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        
        id:"Sadhanashri Kutumb",
        techs: ["express", "node", "react","phonepe"],
        links: {},
        hasImage: true,
    },
    {
        id: "Talento",
        links: {
            live:"nouveau-client-jezp.vercel.app",
        },
        techs: ["react", "tailwindcss", "node", "mongodb"],
        hasImage: true,
    },
    {
        id:"Resume",
        links: {
            live: "resume-mu-lilac.vercel.app/",
            github: "Santosh130602/resume",
        },
        techs: ["react", "css" , "ts"],
        hasImage: true
    },
    {
        id:"Study-Notion",
        links: {
            github: "Santosh130602/study",
            live:"study-coral-eight.vercel.app/"
            
        },
        techs: ["node", "next", "react", "mongodb"],
        hasImage: true,
    },
    {
        id:"Krishi Doot",
        links: {
            live:"krishi-doot.vercel.app",
            github:"Santosh130602/Krishi_Doot"
        },
        techs: ["python", "flask", "scss","react"],
        hasImage: true,
    },
    {
        id:"G-Map",
        techs: ["react", "openMap"],
        links: {
            github:"Santosh130602/G-MAP",
            live:"g-map.vercel.app"
        },
        hasImage: true,
    }
];

export default projects;
