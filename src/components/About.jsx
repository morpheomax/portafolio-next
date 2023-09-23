const About = () => {
  return (
    <div className="w-full  flex flex-col justify-center ">
      <article className="p-4 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col md:flex-row">
        <section className="w-full bg-white/20 rounded-lg shadow-lg p-6 md:p-8 space-y-6">
          <h1 className="text-3xl font-semibold  text-slate-400 text-center">
            ABOUT ME
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Hello! I'm Max, a passionate 37-year-old FullStack programmer.
                My experience in the world of web development spans a wide range
                of technologies and programming languages, enabling me to create
                high-level web solutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                My skillset includes a strong command of HTML, CSS, and
                JavaScript, allowing me to bring captivating and functional
                designs to life. But I don't stop there – my expertise extends
                to modern frameworks and libraries such as React.js, as well as
                backend technologies like Node.js, Express.js, and MongoDB. I'm
                also a proud user of Next.js, enabling me to craft
                high-performance web applications.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                On the visual front, I'm versatile and comfortable working with
                both Bootstrap and Tailwind CSS, allowing me to tailor the
                appearance of my projects to specific needs.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                My experience in database management encompasses SQL Server,
                along with data analysis report generation, and data handling to
                provide comprehensive solutions to business challenges.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                But what truly drives me is my passion for what I do. I relish
                every challenge and eagerly embrace every learning opportunity.
                My goal is to turn ideas into digital reality and create
                captivating web experiences.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If you're seeking a dedicated and adaptable developer who
                strives to deliver high-quality solutions, you've come to the
                right place. Let me elevate your web projects to the next level!
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default About;
