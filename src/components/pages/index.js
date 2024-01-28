import React from 'react'
import Home from './home'
import Contact from './contact'
import AboutCounter from './aboutCounter'
import Experience from './experience'
import Service from './services'
import Portfolio from './portfolio'
import Testimonials from './testimonials'

const Index = () => {
    return (
        <main className='min-h-screen'>
            <Home />
            <Service />
            <AboutCounter />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contact />
        </main>
    )
}

export default Index