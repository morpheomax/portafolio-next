"use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import {
//   DribbbleIcon,
//   GitHubIcon,
//   LinkedInIcon,
//   PinterestIcon,
//   XIcon,
// } from "./Icons";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <header className="fixed z-10 w-full bg-slate-50 py-4 px-6 md:px-16 lg:px-32 xl:px-64">
//         <div className="flex  items-center justify-between">
//           <nav className="flex items-center space-x-4 md:space-x-8 text-slate-700">
//             <Link
//               href="/"
//               className=" hover:text-gray-300  transform  hover:scale-105 transition duration-300"
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className=" hover:text-gray-300  transform  hover:scale-105 transition duration-300"
//             >
//               About
//             </Link>
//             <Link
//               href="/projects"
//               className=" hover:text-gray-300  transform  hover:scale-105 transition duration-300"
//             >
//               Projects
//             </Link>
//             <Link
//               href="/api"
//               className=" hover:text-gray-300  transform  hover:scale-105 transition duration-300"
//             >
//               Api Example
//             </Link>
//           </nav>

//           <Link
//             href="/"
//             className="w-16 h-16 text-white flex items-center justify-center font-bold text-2xl rounded-full bg-violet-800 hover:bg-violet-400 transform  hover:scale-110 transition duration-300

//             "
//           >
//             MS
//           </Link>

//           <nav className="hidden md:block">
//             <div className="flex items-center space-x-4 ">
//               <a href="https://x.com" target="_blank" rel="noopener noreferrer">
//                 <XIcon
//                   className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
//                 />
//               </a>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <GitHubIcon
//                   className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
//                 />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <LinkedInIcon
//                   className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
//                 />
//               </a>
//               <a
//                 href="https://pinterest.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <PinterestIcon
//                   className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
//                 />
//               </a>
//               <a
//                 href="https://dribbble.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <DribbbleIcon
//                   className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
//                 />
//               </a>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default NavBar;

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  DribbbleIcon,
  GitHubIcon,
  LinkedInIcon,
  PinterestIcon,
  XIcon,
} from "./Icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768); // Define el ancho a partir del cual se considera móvil
    };

    // Verificar el tamaño de la ventana cuando se carga la página y cuando se cambia su tamaño
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  useEffect(() => {
    // Escuchar eventos de clic en el documento para cerrar el menú desplegable
    const handleDocumentClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeNavbar();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <header className="fixed z-10 w-full bg-slate-50 py-4 px-6 md:px-16 lg:px-32 xl:px-64">
      <div className="flex items-center justify-between">
        {/* Menú izquierda centrado */}
        {!isMobile && (
          <nav
            ref={navRef}
            className={`md:flex items-center space-x-4 md:space-x-8 text-slate-700 md:w-1/3`}
          >
            <Link
              href="/"
              className="hover:text-gray-300 transform hover:scale-105 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transform hover:scale-105 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-gray-300 transform hover:scale-105 transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/api"
              className="hover:text-gray-300 transform hover:scale-105 transition duration-300"
            >
              Api Example
            </Link>
          </nav>
        )}

        {/* Logotipo centrado */}
        <div className="flex justify-center items-center w-1/3">
          <Link
            href="/"
            className={`w-16 h-16 text-white flex items-center justify-center font-bold text-2xl rounded-full bg-violet-800 hover:bg-violet-400 transform hover:scale-110 transition duration-300 ${
              isMobile ? "md:hidden" : ""
            }`}
          >
            MS
          </Link>
        </div>

        {/* Iconos derecha centrados */}
        {!isMobile && (
          <nav className="md:flex md:w-1/3">
            <div className="flex items-center justify-end space-x-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <XIcon
                  className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
                />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
                />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinterestIcon
                  className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
                />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DribbbleIcon
                  className={`transform hover:translate-y-0.5 hover:scale-110 duration-300`}
                />
              </a>
            </div>
          </nav>
        )}

        {/* Botón de hamburguesa para pantallas md o más pequeñas */}
        {isMobile && (
          <div className="md:hidden flex items-center justify-end">
            {isOpen ? (
              <button
                onClick={closeNavbar}
                className={`text-slate-700 hover:text-gray-300 focus:outline-none focus:text-gray-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={toggleNavbar}
                className={`text-slate-700 hover:text-gray-300 focus:outline-none focus:text-gray-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Opciones del menú desplegable para dispositivos móviles */}
      {isMobile && (
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } mt-4 md:hidden text-slate-700`}
        >
          <Link
            href="/"
            className="block py-2 hover:text-gray-300 transform hover:scale-105 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:text-gray-300 transform hover:scale-105 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block py-2 hover:text-gray-300 transform hover:scale-105 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="/api"
            className="block py-2 hover:text-gray-300 transform hover:scale-105 transition duration-300"
          >
            Api Example
          </Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
