"use client";
// Importa la biblioteca necesaria
import { motion } from "framer-motion";

const textFadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 1, // Duración de la animación de cada palabra en segundos
      // delay: 2,
    },
  },
};

// Componente "FadeInComponents" que acepta las props "text" y "className"
export const FadeInComponents = ({ text, className = "" }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center">
      <motion.div
        className={`inline-block  text-dark  capitalize text-sm ${className}`}
        variants={textFadeIn}
        whileInView={"animate"}
        initial="initial"
      >
        {text} {/* Agregar el texto dentro del elemento <h1> */}
      </motion.div>
    </div>
  );
};
