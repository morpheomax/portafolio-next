"use client";
// Importa las bibliotecas y componentes necesarios
import React from "react";
import { motion } from "framer-motion"; // Importa motion de Framer Motion
import Image from "next/image";

// Define las propiedades de la animación
const elegantZoomFade = {
  initial: {
    opacity: 0,
    scale: 0.8, // Inicialmente, la imagen estará invisible
  },
  animate: {
    opacity: 1, // Cuando se active la animación, la imagen tendrá opacidad completa
    scale: 1,
    transition: {
      duration: 0.8, // Duración de la animación en segundos (puedes ajustar este valor)
      ease: "easeOut",
    },
  },
};

// Componente de fadeInImage que acepta una prop "src"
export const elegantImageZoomFade = ({ src }) => {
  return (
    <>
      {/* Utiliza el componente "motion.div" para aplicar la animación */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={elegantZoomFade}
        className="w-1/2"
      >
        {/* Utiliza el componente "Image" de Next.js para mostrar la imagen */}
        <Image src={src} width={500} height={500} />
      </motion.div>
    </>
  );
};
