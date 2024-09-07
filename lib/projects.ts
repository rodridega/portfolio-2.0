import pokedex from '@/public/pokedex.png'
import cotibot from '@/public/cotibot.png'
import beachHouse from '@/public/beach-house.png'
import portfolio from '@/public/portfolio.png'
import vivvidero from '@/public/vivvidero.png'

export const projects = [
    {
        title: "Vivvidero website",
        description: "A landing page for a home renovation company built with Next.js, Tailwind CSS and TypeScript.",
        image: vivvidero,
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design", "Material-UI"],
        githubLink: "",
        liveLink: "https://vivvidero.com/"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built with Next.js, Tailwind CSS and TypeScript.",
        image: portfolio,
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design", "Shadcn/ui Components"],
        githubLink: "https://github.com/rodridega/portfolio-2.0",
        liveLink: "https://ecommerce-platform-demo.com"
    },
    {
        title: "Beach House reservation app",
        description: "A full-stack application for booking beach houses with React, Express, PostgreSQL and Material-UI.",
        image: beachHouse,
        tags: ["React", "Tailwind", "Node.js", "PostgreSQL", "Express", "Material-UI"],
        githubLink: "",
        liveLink: "https://saratoga-reservation.onrender.com/"
    },
    {
        title: "Cotibot",
        description: "A Full stack personalized real-time home renovation estimator for unfinished properties, capturing lead data.",
        image: cotibot,
        tags: ["React.js", "Bootstrap", "Node.js", "Express.js", "PostgreSQL", "Hubspot API Integration", "Responsive Design"],
        githubLink: "",
        liveLink: "https://cotibot.vivvidero.com"
    },
    {
        title: "Pokedex App",
        description: "A Pokedex application that fetches data from an external API and displays Pokemon information.",
        image: pokedex,
        tags: ["React.js", "SASS", "API Integration", "Responsive Design", "Infinite Scroll",],
        githubLink: "https://github.com/rodridega/pokedex/tree/master",
        liveLink: "https://pokedex-pi-two-64.vercel.app/"
    }
]
