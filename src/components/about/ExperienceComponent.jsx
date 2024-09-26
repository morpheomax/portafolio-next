export const ExperienceComponent = () => {
  return (
    <div className="container mx-auto px-4 text-center" transition-style="in:square:top-left">
      <h2 className="text-4xl font-bold uppercase tracking-wider mb-8">Experiencia</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 dark:bg-gray-800 p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">Desarrollo FullStack MERN</h3>
          <p>
            Más de 5 años de experiencia en el desarrollo de aplicaciones web modernas utilizando el stack MERN (MongoDB, Express.js, React.js, Node.js). He trabajado en proyectos de ecommerce, dashboards de gestión y plataformas SaaS.
          </p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">Diseño UX/UI</h3>
          <p>
            En mi carrera como diseñador UX/UI, he colaborado con equipos multidisciplinarios para desarrollar productos centrados en el usuario, priorizando la simplicidad y eficiencia en la experiencia de usuario.
          </p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">Ciencia de Datos</h3>
          <p>
            Con experiencia en análisis de datos y automatización de reportes, he ayudado a las empresas a tomar decisiones basadas en datos utilizando Python y SQL, maximizando la eficiencia de los procesos y reduciendo costos.
          </p>
        </div>
      </div>
    </div>
  );
};

