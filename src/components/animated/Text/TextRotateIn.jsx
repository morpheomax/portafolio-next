"use client";
// Importa la biblioteca necesaria
import { motion } from "framer-motion";

const textRotateIn = {
  initial: {
    opacity: 0,
    rotate: -90,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1, // Duración de la animación de cada palabra en segundos
    },
  },
};

// Componente "AnimatedTextRotateIn" que acepta las props "text" y "className"
export const AnimatedTextRotateIn = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-4xl ${className}`}
        variants={textRotateIn}
        initial="initial"
        animate="animate"
      >
        {text} {/* Agregar el texto dentro del elemento <h1> */}
      </motion.h1>
    </div>
  );
};
