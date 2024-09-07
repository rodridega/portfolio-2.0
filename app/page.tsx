import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Briefcase, Code, User } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { projects } from '@/lib/projects'

export default function Component() {

  const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"]

  const handleNavigate = () => {
    console.log('Navigating to projects')
  }


  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                  Rodrigo Deganutti
                </h1>

                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Full Stack Web Developer especialized in creating exceptional digital experiences.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={'/projects'} className='p-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90'>See Projects</Link>
                <Link href={'/contact'} className='p-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground' >Contact</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <Badge key={index} className="text-lg py-2 px-4 bg-primary text-background">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        {/* Featured Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center"> Featured Projects </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.slice(2, 4).map((project) => (
                <Card key={project.title}>
                  <CardHeader>
                    <CardTitle> {project.title}</CardTitle>
                    <CardDescription> {project.description} </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src={project.image}
                        alt={`${project.title}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/projects/#${project.title}`} >See Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/projects" className="flex items-center">
                  See all projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center"> Explore More </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2" /> Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p> Discover my latest projects and works.</p>
                  <Button asChild className="mt-4">
                    <Link href="/projects">See Projects</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2" /> About me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn more about my experience and background.</p>
                  <Button asChild className="mt-4">
                    <Link href="/about">Read More</Link>
                    
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2" /> Contact
                    
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Interested in working together? Contact me.</p>
                  
                  <Button asChild className="mt-4">
                    <Link href="/contact">Contact</Link>
                    
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}