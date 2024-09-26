"use client";
import { DarkThemeToggle } from "flowbite-react";
import { useState } from 'react';
import Link from 'next/link';
import LogoNav from '../../public/assets/images/logo.PNG'
import Image from "next/image";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 w-full border-b-4 border-black dark:border-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-4xl font-bold uppercase tracking-wide text-black dark:text-white">
        <Image src={LogoNav} alt="Max Sandoval" srcset="" className="invert-0 dark:invert" 
        width={90}
        height={90}/>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 uppercase font-bold text-black dark:text-white">
        <li>
            <Link href="/" className="hover:underline">Inicio</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">Sobre Mí</Link>
          </li>
          <li>
            <Link href="/skills" className="hover:underline">Habilidades</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">Proyectos</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contacto</Link>
          </li>
        </ul>
        <div className="flex md:order-2">
      <DarkThemeToggle/>
      </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white focus:outline-none mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-8 h-1 bg-black dark:bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-black dark:bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-black dark:bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-4 uppercase font-bold text-black dark:text-white">
          <li>
            <Link href="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Sobre Mí</Link>
          </li>
          <li>
            <Link href="/skills" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Habilidades</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Proyectos</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};


