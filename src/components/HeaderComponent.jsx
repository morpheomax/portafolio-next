'use client'

import Link from "next/link";

export const HeaderComponent = () => {
  return (
    <header className="relative w-full h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center items-center p-8 overflow-hidden">
      {/* Nombre y presentación */}
      <h1
        className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-extrabold leading-none tracking-tight mb-4 uppercase text-black dark:text-white"
        transition-style="in:circle:bottom-right"
        style={{ '--transition__delay': '0.2s' }}
      >
        Max Sandoval
      </h1>
      
      <p
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 uppercase text-gray-700 dark:text-gray-300"
        transition-style="in:square:center"
        style={{ '--transition__delay': '0.4s' }}
      >
        FullStack MERN Developer
      </p>
      
      <p
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 uppercase text-gray-700 dark:text-gray-300"
        transition-style="in:square:center"
        style={{ '--transition__delay': '0.6s' }}
      >
        UX/UI Designer
      </p>

      <p
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 uppercase text-gray-700 dark:text-gray-300"
        transition-style="in:square:center"
        style={{ '--transition__delay': '0.8s' }}
      >
        Data Science Specialist
      </p>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        {/* <button
          className="bg-yellow-500 text-black dark:text-black px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-bold uppercase border-4 border-black dark:border-white hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
          transition-style="in:wipe:top-right"
          style={{ '--transition__delay': '1s' }}
        >
          Descargar CV
        </button> */}
        <Link href="/projects">
        <button
          className="bg-transparent text-black dark:text-white px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-bold uppercase border-4 border-yellow-500 hover:bg-yellow-500 hover:text-black dark:hover:bg-yellow-500 dark:hover:text-black transition-all duration-300"
          transition-style="in:wipe:bottom-left"
          style={{ '--transition__delay': '1.2s' }}
        >
          Ver Proyectos
        </button>
        </Link>
      </div>

      {/* Líneas decorativas animadas con animación infinita */}
      <div
        className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500 dark:bg-yellow-400 animate-infinite"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-red-600 dark:bg-red-400 animate-infinite"
      ></div>
      <div
        className="absolute top-0 right-5 w-28 h-28 sm:w-40 sm:h-40 bg-white dark:bg-gray-800 border border-black dark:border-white animate-infinite"
      ></div>

      {/* Tipografía grande en el fondo */}
      <div
        className="absolute top-1/3 left-5 md:left-10 text-6xl sm:text-8xl md:text-9xl font-extrabold text-gray-300 dark:text-gray-600 opacity-10"
        transition-style="in:wipe:cinematic"
        style={{ '--transition__delay': '2s' }}
      >
        PORTFOLIO
      </div>

      {/* Animaciones infinitas usando @keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        .animate-infinite {
          animation: pulse 2s infinite;
        }
      `}</style>
    </header>
  );
};
