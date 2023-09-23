"use client";
// Importa las bibliotecas y componentes necesarios
import React from "react";
import { motion } from "framer-motion"; // Importa motion de Framer Motion
import Image from "next/image";

// Define las propiedades de la animación
const swing = {
  initial: {
    rotate: -15, // Inicialmente, la imagen estará invisible
  },
  animate: {
    rotate: 15, // Cuando se active la animación, la imagen tendrá opacidad completa

    transition: {
      yoyo: Infinity,
      duration: 3, // Duración de la animación en segundos (puedes ajustar este valor)
    },
  },
};

// Componente de swingImage que acepta una prop "src"
export const swingImage = ({ src }) => {
  return (
    <>
      {/* Utiliza el componente "motion.div" para aplicar la animación */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={swing}
        className="w-1/2"
      >
        {/* Utiliza el componente "Image" de Next.js para mostrar la imagen */}
        <Image src={src} width={500} height={500} />
      </motion.div>
    </>
  );
};
