"use client";
import { motion, AnimatePresence } from "framer-motion";

const textFadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1, // Duración de la animación de cada palabra en segundos
      delay: 2,
    },
  },
};

const SkillList = ({ skills }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Skills:</h2>
      <AnimatePresence>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-blue-200 px-3 py-2 m-2 rounded-md text-blue-800"
            >
              {/* Aplica el efecto de aparición de texto a cada habilidad */}
              <motion.h1
                className={`inline-block text-dark capitalize text-sm`}
                variants={textFadeIn}
                initial="initial"
                animate="animate"
              >
                {skill}
              </motion.h1>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default SkillList;
