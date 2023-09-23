"use client";
// Importa las bibliotecas y componentes necesarios
import React from "react";
import { motion } from "framer-motion"; // Importa motion de Framer Motion
import Image from "next/image";

// Define las propiedades de la animación
const elegantRotateIn = {
  initial: {
    opacity: 0,
    rotate: -90, // Inicialmente, la imagen estará invisible
  },
  animate: {
    opacity: 1, // Cuando se active la animación, la imagen tendrá opacidad completa
    rotate: 0,
    transition: {
      duration: 1, // Duración de la animación en segundos (puedes ajustar este valor)
      ease: "easeOut",
    },
  },
};

// Componente de elegantImageRotateIn que acepta una prop "src"
export const elegantImageRotateIn = ({ src }) => {
  return (
    <>
      {/* Utiliza el componente "motion.div" para aplicar la animación */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={elegantRotateIn}
        className="w-1/2"
      >
        {/* Utiliza el componente "Image" de Next.js para mostrar la imagen */}
        <Image src={src} width={500} height={500} />
      </motion.div>
    </>
  );
};
