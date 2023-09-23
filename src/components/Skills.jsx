"use client";

import { AnimatedTextFadeIn } from "./animated/Text/TextFadeIn";
import { motion } from "framer-motion";

const images = [
  "/assets/images/mongodb.svg",
  "/assets/images/expressjs.svg",
  "/assets/images/reactjs.svg",
  "/assets/images/nodejs.svg",
  "/assets/images/next.svg",
  "/assets/images/javascript.svg",
  "/assets/images/tailwindcss.svg",
  "/assets/images/bootstrap.svg",
  "/assets/images/html.svg",
  "/assets/images/css.svg",
];

const Skills = () => {
  return (
    <AnimatedTextFadeIn
      text={
        <>
          <h2 className="text-4xl font-bold mb-6">SKILLS</h2>

          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-2">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-32 h-32"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </>
      }
    />
  );
};

export default Skills;
