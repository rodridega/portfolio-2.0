import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from '@/components/Header'
import profile from '@/public/rodrigo.jpg'
import { Footer } from '@/components/Footer'
import { DownloadButton } from './DownloadButton'



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
                        <h1 className="text-4xl font-bold mb-8 text-center">About me</h1>
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-6">
                                <Card className="bg-secondary">
                                    <CardContent className="p-6">
                                        <h2 className="text-2xl font-semibold mb-4">Hi! I am Rodrigo</h2>
                                        <p className="mb-4">
                                        I am a full stack web developer passionate about creating exceptional digital experiences. With 3 years of experience in web development, I specialize in building robust and scalable applications using the latest technologies.
                                        </p>
                                        <p>
                                        Outside the world of code, I am a clinical doctor and enjoy spending time with my family, playing video games, exercising, and board games. I firmly believe in continuous learning and am always looking for new challenges to expand my skills.
                                        </p>
                                    </CardContent>
                                </Card>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">My skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, index) => (
                                            <Badge key={index} variant="secondary" className="bg-primary text-background">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                               <DownloadButton />
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
                                        <h3 className="text-xl font-semibold mb-3"> Work Experience </h3>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Full Stack Developer at Vivvidero, April 2022 - Present</li>
                                            <li>Full Stack Developer at Iris Properties, March 2024 - Present</li>
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