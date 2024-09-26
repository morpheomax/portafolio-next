
export const TechSkillsComponent = () => {
  return (
    <div className="container mx-auto px-4 text-center" transition-style="in:square:bottom-right">
      <h2 className="text-4xl font-bold uppercase tracking-wider mb-8">Habilidades Técnicas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
          <p className="text-lg mb-4">
          Soy un especialista en la creación de interfaces de usuario altamente interactivas y optimizadas para SEO, utilizando **React.js**, **ASTRO** y **Next.js**. Mi enfoque es desarrollar aplicaciones modernas y rápidas que mejoren la experiencia del usuario.
          
          </p>
          <ul className="list-disc list-inside">
          <li>React.js</li>
          <li>Astro</li>
            <li>Next.js</li>
            <li>JavaScript (ES6+)</li>
            <li>TailwindCSS / CSS3</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
          <p className="text-lg mb-4">
          Tengo experiencia en la creación de servidores robustos y escalables utilizando **Node.js** y **Express.js**, integrando bases de datos como **MongoDB** y **MySQL** para proporcionar soluciones eficientes y seguras.
          
          </p>
          <ul className="list-disc list-inside">
          <li>Node.js / Express.js</li>
            <li>MongoDB / Mongoose</li>
            <li>MySQL</li>
            <li>API REST / GraphQL</li>
            <li>Autenticación JWT / OAuth</li>
          </ul>
        </div>
        <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">DevOps & Cloud</h3>
          <p className="text-lg mb-4">
          He implementado soluciones de despliegue en la nube utilizando plataformas como **Heroku** y **Vercel** entre otros, optimizando tanto el rendimiento como la seguridad, asegurando que las aplicaciones estén siempre disponibles y funcionando de manera óptima.
     
          </p>
          <ul className="list-disc list-inside">
          <li>CI/CD Pipelines</li>
            <li>Vercel / Heroku</li>
            <li>Docker (básico)</li>
            <li>Firebase (Autenticación, Firestore)</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

