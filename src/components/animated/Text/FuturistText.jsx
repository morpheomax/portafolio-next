"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const FuturisticAnimation = ({ futuristicText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const animateSequentially = async () => {
      await controls.start({ opacity: 1, x: 0 });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo
      await controls.start({ opacity: 0, x: 50 });
      setCurrentIndex((prevIndex) =>
        prevIndex === futuristicText.length - 1 ? 0 : prevIndex + 1
      );
    };

    animateSequentially();
  }, [controls, futuristicText, currentIndex]);

  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center">
        {futuristicText.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            exit={{ opacity: 0, x: 50 }}
            transition={{
              duration: 0.2,
              ease: "anticipate",
              delay: index * 0.5,
            }}
            className={`text-3xl font-extrabold m-2 ${
              index === currentIndex ? "text-indigo-600" : "text-slate-100"
            }`}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FuturisticAnimation;
