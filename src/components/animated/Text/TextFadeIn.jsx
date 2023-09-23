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

// Componente "AnimatedTextFadeIn" que acepta las props "text" y "className"
export const AnimatedTextFadeIn = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block  text-dark  capitalize text-sm ${className}`}
        variants={textFadeIn}
        whileInView={"animate"}
        initial="initial"
      >
        {text} {/* Agregar el texto dentro del elemento <h1> */}
      </motion.h1>
    </div>
  );
};
