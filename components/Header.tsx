import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'

export const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <Link href="/" className="font-semibold tracking-tight hover:text-accent transition-colors whitespace-nowrap">
                <span className="sm:hidden">RD</span>
                <span className="hidden sm:inline">Rodrigo Deganutti</span>
            </Link>
            <nav className="ml-auto flex items-center gap-3 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors" href="/">
                    Home
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors" href="/projects">
                    Projects
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors" href="/about">
                    <span className="sm:hidden">About</span>
                    <span className="hidden sm:inline">About Me</span>
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors" href="/contact">
                    Contact
                </Link>
                <ThemeToggle />
            </nav>
        </header>
    )
}
