"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  DribbbleIcon,
  GitHubIcon,
  LinkedInIcon,
  PinterestIcon,
  XIcon,
} from "./Icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="fixed w-full bg-slate-50 py-4 px-6 md:px-16 lg:px-32 xl:px-64">
        <div className="flex  items-center justify-between">
          <nav className="flex items-center space-x-4 md:space-x-8 text-slate-700">
            <Link
              href="/"
              className=" hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className=" hover:text-gray-300 transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/api"
              className=" hover:text-gray-300 transition duration-300"
            >
              Api
            </Link>
          </nav>

          <Link
            href="/"
            className="w-16 h-16 text-white flex items-center justify-center font-bold text-2xl rounded-full bg-violet-800 hover:bg-violet-400 transition duration-300"
          >
            MS
          </Link>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <XIcon />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinterestIcon />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DribbbleIcon />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
