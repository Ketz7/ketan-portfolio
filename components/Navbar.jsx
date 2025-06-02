// components/Navbar.jsx
"use client"

import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-2xl font-bold ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}
        >
          <a href="/">Ketan<span className="text-secondary">.</span></a>
        </div>

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex space-x-8 transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}
        >
          <li>
            <ScrollLink
              to="hero"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-primary"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-primary"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-primary"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-primary"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <MobileMenu isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  )
}

function MobileMenu({ isScrolled }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`focus:outline-none transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}
      >
        <span className="block w-6 h-0.5 bg-current mb-1"></span>
        <span className="block w-6 h-0.5 bg-current mb-1"></span>
        <span className="block w-6 h-0.5 bg-current"></span>
      </button>

      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-8">
          {['hero', 'projects', 'about', 'contact'].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-2xl text-gray-800 cursor-pointer hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      )}
    </div>
  )
}
