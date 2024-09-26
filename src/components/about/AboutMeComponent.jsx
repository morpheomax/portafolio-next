
import Image from 'next/image';
import ProfilePic from '../../../public/assets/images/MaxSandoval.png' // Si tienes una imagen de perfil

export const AboutMeComponent = () => {
  return (
    <div className="container mx-auto px-4 text-center" transition-style="in:circle:top-left">
      <h2 className="text-4xl font-bold uppercase tracking-wider mb-8">Sobre Mí</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8">
        {/* Imagen de Perfil */}
        <div className="w-48 h-48 mb-8 md:mb-0">
          <Image
            src={ProfilePic}
            alt="Max Sandoval"
            className="rounded-full border-4 border-black dark:border-white"
            width={192}
            height={192}
          />
        </div>
        
        {/* Texto Sobre Mí */}
        <div className="max-w-lg text-left">
          <p className="text-lg mb-4">
          Soy Max Sandoval, un apasionado programador FullStack especializado en la creación de soluciones digitales innovadoras y eficientes. Desde mis inicios en el desarrollo web, he adquirido una sólida experiencia en una variedad de tecnologías y herramientas que me permiten construir aplicaciones web robustas y escalables.
          </p>
          <p className="text-lg mb-4">
          Mi enfoque se centra en el desarrollo de interfaces de usuario dinámicas y responsivas, asegurando una experiencia de usuario fluida y atractiva. En el backend, implemento servidores escalables utilizando tecnologías como Node.js y Express, junto con bases de datos como MongoDB y MySQL, para garantizar que las aplicaciones no solo sean funcionales, sino también seguras y rápidas.
          </p>
          <p className="text-lg mb-4">
        Estoy siempre en la búsqueda de nuevos desafíos que me permitan aprender y crecer como profesional, contribuyendo a proyectos que no solo resuelven problemas, sino que también impactan positivamente en la vida de los usuarios.
      </p>
        </div>
      </div>
    </div>
  );
};


