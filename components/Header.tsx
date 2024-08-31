import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                    Home
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
                    Projects
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
                    About Me
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
                    Contact
                </Link>
            </nav>
        </header>
    )
}
