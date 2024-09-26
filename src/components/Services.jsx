"use client";

export const Services = () => {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center" transition-style="in:square:top-right">
      <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
        <h3 className="text-xl font-bold">Desarrollo Web</h3>
        <p className="text-gray-600 dark:text-gray-300">Creación de aplicaciones y sitios responsivos.</p>
      </div>
      <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
        <h3 className="text-xl font-bold">Diseño UX/UI</h3>
        <p className="text-gray-600 dark:text-gray-300">Experiencias visuales atractivas y funcionales.</p>
      </div>
      <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
        <h3 className="text-xl font-bold">Data Science</h3>
        <p className="text-gray-600 dark:text-gray-300">Análisis de datos para decisiones informadas.</p>
      </div>
    </div>
  );
};

