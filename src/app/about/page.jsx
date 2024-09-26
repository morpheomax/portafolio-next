
import { AboutMeComponent } from "@/components/about/AboutMeComponent";
import { ExperienceComponent } from "@/components/about/ExperienceComponent";
import { SkillsComponent } from "@/components/about/SkillsComponent";
import React from "react";

export const metadata = {
  title: "Sobre mí",
  description: "Información sobre Max",
};

const page = () => {
  return (
    <>
     <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Sección Sobre Mí */}
      <section id="about" className="py-20 border-b-4 border-black dark:border-white">
        <AboutMeComponent />
      </section>

      {/* Sección de Habilidades */}
      <section id="skills" className="py-20 border-b-4 border-black dark:border-white">
        <SkillsComponent />
      </section>

      {/* Sección de Experiencia */}
      <section id="experience" className="py-20">
        <ExperienceComponent />
      </section>
    </div>
    </>
  );
};


export default page;