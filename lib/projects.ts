import portfolio from '@/public/portfolio.png'
import vivvidero from '@/public/vivvidero.png'
import amplity from '@/public/amplity-site.png'
import inPracticeOncology from '@/public/inpractice-oncology.png'
import cronosMed from '@/public/cronos-med.png'
import clinicApp from '@/public/clinic-app.png'

export const projects = [
    {
        title: "Cronos Med",
        description: "A digital electronic health record (EHR) platform for doctors to manage patient clinical history, medications, lab results and AI-generated clinical case challenges.",
        image: cronosMed,
        tags: ["Next.js", "React", "Healthcare", "SaaS"],
        githubLink: "",
        liveLink: "https://cronos-med.com/login"
    },
    {
        title: "Amplity website",
        description: "Corporate WordPress website for a global pharma commercialization company, built with Elementor, ACF and a custom theme.",
        image: amplity,
        tags: ["WordPress", "Elementor", "ACF", "PHP", "Responsive Design"],
        githubLink: "",
        liveLink: "https://amplity.com/"
    },
    {
        title: "Clinic App",
        description: "An AI-assisted tool for healthcare professionals to organize and review clinical notes, summarize patient history and audit ICU-to-ward handoffs.",
        image: clinicApp,
        tags: ["React", "TypeScript", "Vite", "React Router", "AI Integration", "Healthcare"],
        githubLink: "https://github.com/rodridega/clinic-app",
        liveLink: "https://rodridega.github.io/clinic-app/"
    },
    {
        title: "In Practice Oncology",
        description: "WordPress news and insights platform covering oncology research, treatments and clinical trials, built with Elementor, ACF and a custom theme.",
        image: inPracticeOncology,
        tags: ["WordPress", "Elementor", "ACF", "PHP", "Responsive Design"],
        githubLink: "",
        liveLink: "https://inpracticeoncology.com/"
    },
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
        liveLink: "https://portfolio-2-0-puce-tau.vercel.app/"
    }
]
