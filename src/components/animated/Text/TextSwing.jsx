"use client";
// Importa la biblioteca necesaria
import { motion } from "framer-motion";

const textSwing = {
  initial: {
    rotate: -15,
  },
  animate: {
    rotate: 15,

    transition: {
      yoyo: Infinity,
      duration: 1, // Duración de la animación de cada palabra en segundos
    },
  },
};

// Componente "AnimatedTextSwing" que acepta las props "text" y "className"
export const AnimatedTextSwing = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-4xl ${className}`}
        variants={textSwing}
        initial="initial"
        animate="animate"
      >
        {text} {/* Agregar el texto dentro del elemento <h1> */}
      </motion.h1>
    </div>
  );
};
