
export const DesignSkillsComponent = () => {
  return (
    <div className="container mx-auto px-4 text-center" transition-style="in:wipe:cinematic">
      <h2 className="text-4xl font-bold uppercase tracking-wider mb-8">Habilidades de Diseño UX/UI</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">Diseño Centrado en el Usuario</h3>
          <p className="text-lg mb-4">
          Me especializo en el diseño de interfaces que priorizan la experiencia del usuario. Desde la creación de wireframes hasta el desarrollo de productos finales, garantizo que cada diseño sea intuitivo y eficiente, alineado con las necesidades del usuario.
         
          </p>
          <ul className="list-disc list-inside">
          <li>Figma</li>
          <li>Miro</li>
            <li>Adobe XD</li>
            <li>Investigación de usuarios</li>
            <li>Pruebas de usabilidad</li>
            <li>Accesibilidad web (WCAG)</li>
          </ul>
        </div>
        <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">Prototipado y Diseño Visual</h3>
          <p className="text-lg mb-4">
          Desarrollo prototipos interactivos y wireframes funcionales, creando interfaces visualmente atractivas y coherentes con las guías de estilo, asegurando que cada elemento del diseño contribuya a una experiencia de usuario sobresaliente.
          </p>
          <ul className="list-disc list-inside">
            <li>Wireframing</li>
            <li>Prototipado de alta fidelidad</li>
            <li>Principios de diseño</li>
            <li>Colores y tipografía</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


