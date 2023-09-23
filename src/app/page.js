
import { AnimatedText } from '@/components/AnimatedText';
import { AnimatedImage } from '@/components/AnimatedImage';
import { AnimatedTextFadeIn } from '@/components/animated/Text/TextFadeIn';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ScrollProgress from '@/components/animated/Progress/ScrollProgress';


export default function Home() {
  return (
    <>
    
      <div className="p-4 sm:p-4 md:p-4 lg:p-6 xl:p-6">
      <ScrollProgress />
        <main className="flex flex-col items-center justify-between w-full h-screen mt-20">
          <article>
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <AnimatedImage  src="https://res.cloudinary.com/dysowtjj4/image/upload/v1695471927/IMG_5978_v41lg7.webp" width={500} />
              <div className="w-1/2">
                <AnimatedText text={'Imagine it, design it, program it and create digital solutions, one idea at a time.'} />
                <AnimatedTextFadeIn text={'"Discover my portfolio and witness the fusion of innovative design and robust code, as I transform ideas into captivating web experiences. With expertise in the MERN stack, powered by React.js and NEXT.js, I craft dynamic and user-friendly applications."'}/>
                <AnimatedTextFadeIn clasName=" text-slate-100" text={"Currículum"} Link className="flex justify-center items-center box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 bg-slate-800 text-center text-slate-100 p-2 rounded-xl hover:bg-slate-100 hover:text-slate-800 w-1/2 mx-auto" href="/assets/docs/test.pdf" target="_blank" download={true}></AnimatedTextFadeIn>
              </div>
            </div>
          </article>
          

         <About/>
         <div className="min-h-screen flex flex-col items-center justify-center">
       <h1 className="text-4xl font-bold mb-6">SKILLS</h1>
        <Skills />
    </div>
        </main>

      </div>
    </>
  );
}
