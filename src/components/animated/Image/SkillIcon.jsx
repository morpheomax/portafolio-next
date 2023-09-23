"use client";

import { motion } from "framer-motion";

const SkillIcon = ({ src, alt }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 my-2"
      whileHover={{ scale: 1.1 }}
    />
  );
};

export default SkillIcon;
