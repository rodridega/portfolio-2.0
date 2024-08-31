"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, GithubIcon } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer';

export default function Contact() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        
    }

    return (
        <div className="flex flex-col min-h-screen bg-background text-primary">
            <Header />
            <main className="flex-1 p-4 md:px-20">
                <div className="bg-background text-foreground min-h-screen py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-secondary">
                                <CardHeader>
                                    <CardTitle>Información de Contacto</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Mail className="text-primary" />
                                        <span>rodridega@gmail.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone className="text-primary" />
                                        <span>+54-343-4723142</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="text-primary" />
                                        <span>Paraná, Argentina</span>
                                    </div>
                                    <div className="flex space-x-4 mt-6">
                                        <a href="https://www.linkedin.com/in/rodrigo-deganutti-330812223/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                            <Linkedin className="text-primary hover:text-primary/80" />
                                        </a>
                                        <a href="https://github.com/rodridega" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <GithubIcon className="text-primary hover:text-primary/80" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Envíame un mensaje</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nombre</Label>
                                            <Input
                                                id="name"
                                                value={contact.name}
                                                name="name"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={contact.email}
                                                name="email"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Mensaje</Label>
                                            <Textarea
                                                id="message"
                                                value={contact.message}
                                                name="message"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full bg-primary text-background hover:bg-primary/90">
                                            Enviar Mensaje
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}