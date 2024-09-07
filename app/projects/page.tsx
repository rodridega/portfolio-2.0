import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { projects } from '@/lib/projects'

export default function Projects() {
    

    return (
        <div className="flex flex-col min-h-screen bg-background text-primary">
            <Header />
            <main className="flex-1 p-4 md:px-20">
                <div className="bg-background text-foreground min-h-screen py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <Card key={index} className="flex flex-col" id={project.title} >
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
                                                        Code
                                                    </Link>
                                                </Button>
                                            }

                                            <Button asChild className="ml-auto flex items-center gap-2 bg-primary text-background hover:bg-primary/90">
                                                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live Demo
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