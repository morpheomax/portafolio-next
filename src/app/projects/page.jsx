import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Proyectos ",
  description:
    "Proyectos realizados utilizando,HTML, CSS, Bootstrap, Tailwind CSS, Javascript, ReactJS, NEXT JS, NodeJS, ExpressJS, Mongodb, Firebase, NEXTUI,  ",
};

const page = () => {
  const projects = [
    {
      title: "Gestión de Inventarios",
      description: "Aplicación FullStack para gestionar inventarios con React.js, Node.js y MongoDB.",
      tags: ["FullStack", "React.js", "Node.js", "MongoDB"],
    },
    {
      title: "Blog Personal",
      description: "Proyecto frontend de blog personal con funcionalidades CRUD utilizando Next.js y TailwindCSS.",
      tags: ["Frontend", "Next.js", "TailwindCSS"],
    },
    // Otros proyectos académicos aquí
  ];
  return (
    <>
     <section className="w-full min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-style" transition-style="in:circle:bottom-right">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transition-style"
            transition-style="in:wipe:bottom-right"
            style={{ "--transition__delay": `${index * 0.3}s` }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap space-x-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Placeholder for upcoming projects */}
        <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center transition-style" transition-style="in:custom:circle-swoop">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Próximos Proyectos</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Proyectos profesionales realizados estarán disponibles pronto.</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="https://github.com/morpheomax" passHref>
          <p className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold uppercase hover:bg-yellow-600 transition-all">
            Ver más proyectos en GitHub
          </p>
        </Link>
      </div>
    </section>
    </>
  );
};

export default page;


