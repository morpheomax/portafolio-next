
export const DataScienceSkillsComponent = () => {
  return (
    <div className="container mx-auto px-4 text-center" transition-style="in:custom:circle-swoop">
      <h2 className="text-4xl font-bold uppercase tracking-wider mb-8">Habilidades en Ciencia de Datos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">Análisis de Datos</h3>
          <p className="text-lg mb-4">
          Poseo una sólida experiencia en la extracción de insights significativos de grandes conjuntos de datos utilizando **Python** y **SQL**. Me especializo en la automatización de reportes, lo que optimiza la eficiencia y mejora la toma de decisiones empresariales.
     
          </p>
          <ul className="list-disc list-inside">
            <li>Python (Pandas, NumPy)</li>
            <li>SQL Server</li>
            <li>Data Wrangling</li>
            <li>Automatización de reportes</li>
          </ul>
        </div>
        <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4">Visualización de Datos</h3>
          <p className="text-lg mb-4">
          Me destaco en la creación de dashboards interactivos y visualizaciones efectivas utilizando herramientas como **Power BI** y **Matplotlib**. Mi objetivo es facilitar la comprensión de los datos y apoyar la toma de decisiones informadas.
          
          </p>
          <ul className="list-disc list-inside">
            <li>Power BI</li>
            <li>Matplotlib / Seaborn</li>
            <li>Automatización de dashboards</li>
            <li>Reporting interactivo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


