"use client";
// Importa la biblioteca necesaria
import { motion } from "framer-motion";

// Define las propiedades de la animación para el componente "quote"
const quote = {
  initial: {
    opacity: 1, // Opacidad inicial del texto (visible)
  },
  animate: {
    opacity: 1, // Opacidad durante la animación (visible)
    transition: {
      delay: 0.5, // Retraso antes de que comience la animación
      staggerChildren: 0.1, // Retraso entre la animación de cada palabra
    },
  },
};

// Define las propiedades de la animación para cada palabra individual ("singleWord")
const singleWord = {
  initial: {
    opacity: 0, // Opacidad inicial de cada palabra (invisible)
    y: 50, // Desplazamiento inicial en el eje Y (oculta la palabra hacia abajo)
  },
  animate: {
    opacity: 1, // Opacidad durante la animación (visible)
    y: 0, // Desplazamiento final en el eje Y (vuelve a la posición original)
    transition: {
      duration: 1, // Duración de la animación de cada palabra en segundos
    },
  },
};

// Componente "AnimatedText" que acepta las props "text" y "className"
export const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize md:text-4xl sm:text-xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {
          // Divide el texto en palabras y aplica animación a cada palabra individual
          text.split(" ").map((word, index) => (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          ))
        }
      </motion.h1>
    </div>
  );
};
