"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollY = window.scrollY;
      const progress = (scrollY / scrollableHeight) * 100;
      setScrollProgress(progress);
    };

    const scrollListener = () => {
      calculateScrollProgress();
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    controls.start({ width: `${scrollProgress}%` });
  }, [scrollProgress, controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-blue-700"
      style={{ width: "0%" }}
      animate={controls}
    ></motion.div>
  );
};

export default ScrollProgress;
