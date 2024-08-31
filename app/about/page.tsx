import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from '@/components/Header'
import profile from '@/public/rodrigo.jpg'
import { Footer } from '@/components/Footer'

export default function AboutMe() {
    const skills = [
        "JavaScript", "React", "Node.js", "TypeScript", "Next.js",
        "HTML5", "CSS3", "Tailwind CSS", "Git", "RESTful APIs"
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background text-primary">
            <Header />
            <main className="flex-1 p-4 md:px-20">
                <div className="bg-background text-foreground min-h-screen py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-8 text-center">Sobre Mí</h1>
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-6">
                                <Card className="bg-secondary">
                                    <CardContent className="p-6">
                                        <h2 className="text-2xl font-semibold mb-4">¡Hola! Soy Rodrigo</h2>
                                        <p className="mb-4">
                                            Soy un desarrollador web full stack apasionado por crear experiencias digitales
                                            excepcionales. Con 3 años de experiencia en el desarrollo web, me especializo
                                            en construir aplicaciones robustas y escalables utilizando las últimas tecnologías.
                                        </p>
                                        <p>
                                            Fuera del mundo del código, soy médico clínico y disfruto de pasar el tiempo con mi familia, jugar videojuegos, hacer ejercicio y juegos de mesa. Creo firmemente
                                            en el aprendizaje continuo y siempre estoy buscando nuevos desafíos para expandir
                                            mis habilidades.
                                        </p>
                                    </CardContent>
                                </Card>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Mis Habilidades</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, index) => (
                                            <Badge key={index} variant="secondary" className="bg-primary text-background">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <Button className="bg-primary text-background hover:bg-primary/90">
                                    Descargar CV
                                </Button>
                            </div>
                            <div className="space-y-6">
                                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                                    <Image
                                        src={profile}
                                        alt="Tu foto"
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg"
                                    />
                                </div>
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-3">Experiencia Destacada</h3>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Desarrollador Full Stack en Vivvidero, 2022 - Presente</li>
                                            <li>Desarrollador Full Stack en Iris Properties, 2024 - Presente</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}