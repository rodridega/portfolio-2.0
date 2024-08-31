import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import pokedex from '@/public/pokedex.png'
import cotibot from '@/public/cotibot.png'
import beachHouse from '@/public/beach-house.png'
import portfolio from '@/public/portfolio.png'

export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio website built with Next.js, Tailwind CSS and TypeScript.",
            image: portfolio,
            tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design", "Shadcn/ui Components"],
            githubLink: "https://github.com/yourusername/ecommerce-platform",
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

    return (
        <div className="flex flex-col min-h-screen bg-background text-primary">
            <Header />
            <main className="flex-1 p-4 md:px-20">
                <div className="bg-background text-foreground min-h-screen py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-8 text-center">Mis Proyectos</h1>
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <Card key={index} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="relative h-48 mb-4">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-md"
                                            />
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="secondary" className="bg-primary text-background">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        <div className="flex justify-between w-full">
                                            {
                                                project.githubLink !== "" &&
                                                <Button asChild variant="outline" className="flex items-center gap-2">
                                                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                        <Github className="w-4 h-4" />
                                                        Código
                                                    </Link>
                                                </Button>
                                            }

                                            <Button asChild className="ml-auto flex items-center gap-2 bg-primary text-background hover:bg-primary/90">
                                                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4" />
                                                    Demo en vivo
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}