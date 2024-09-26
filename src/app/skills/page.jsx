import { DataScienceSkillsComponent } from '@/components/skills/DataScienceSkillsComponent'
import { DesignSkillsComponent } from '@/components/skills/DesignSkillsComponent'
import { TechSkillsComponent } from '@/components/skills/TechSkillsComponent'
import React from 'react'

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Sección de Habilidades Técnicas */}
      <section id="tech-skills" className="py-20 border-b-4 border-black dark:border-white">
        <TechSkillsComponent />
      </section>

      {/* Sección de Habilidades de Diseño */}
      <section id="design-skills" className="py-20 border-b-4 border-black dark:border-white">
        <DesignSkillsComponent />
      </section>

      {/* Sección de Habilidades de Ciencia de Datos */}
      <section id="data-skills" className="py-20">
        <DataScienceSkillsComponent />
      </section>
    </div>
  )
}

export default page



