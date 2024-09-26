import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black p-6 border-t-4 border-white dark:border-black">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <p className="mb-4">¡Me encantaría saber de ti! Aquí tienes mis datos de contacto:</p>
      <ul className="list-none mb-4">
        <li>Email: <a href="mailto:maximiliano.sandoval@example.com" className="text-blue-500 hover:underline">maximiliano.sandoval@gmail.com</a></li>
       
      </ul>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://github.com/morpheomax" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons/github.svg" alt="GitHub" className="w-8 h-8 transition-transform transform hover:scale-110 invert dark:invert-0" />
        </a>
        <a href="https://www.linkedin.com/in/maxsandovalc/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 transition-transform transform hover:scale-110 invert dark:invert-0" />
        </a>
        
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Max Sandoval. Todos los derechos reservados.
      </p>
    </div>
  </footer>
  );
};

export default Footer;
