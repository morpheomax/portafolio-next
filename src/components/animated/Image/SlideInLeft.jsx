"use client";
// Importa las bibliotecas y componentes necesarios
import React from "react";
import { motion } from "framer-motion"; // Importa motion de Framer Motion
import Image from "next/image";

// Define las propiedades de la animación
const slideInLeft = {
  initial: {
    opacity: 0, // Inicialmente, la imagen estará invisible
    x: -50, // Inicialmente, la imagen estará desplazada -50 unidades hacia la izquierda
  },
  animate: {
    opacity: 1, // Cuando se active la animación, la imagen tendrá opacidad completa
    x: 0, // Cuando se active la animación, la imagen volverá a su posición original (0 en el eje X)
    transition: {
      duration: 3, // Duración de la animación en segundos (puedes ajustar este valor)
    },
  },
};

// Componente de slideInLeftImage que acepta una prop "src"
export const slideInLeftImage = ({ src }) => {
  return (
    <>
      {/* Utiliza el componente "motion.div" para aplicar la animación */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={slideInLeft}
        className="w-1/2"
      >
        {/* Utiliza el componente "Image" de Next.js para mostrar la imagen */}
        <Image src={src} width={500} height={500} />
      </motion.div>
    </>
  );
};
