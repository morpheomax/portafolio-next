"use client";
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ src, alt }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md m-2"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <img src={src} alt={alt} className="w-16 h-16 mx-auto" />
      <p className="text-center mt-2">{alt}</p>
    </motion.div>
  );
};

export default SkillCard;
