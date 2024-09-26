import { ThemeModeScript } from "flowbite-react";
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { NavbarComponent } from "@/components/NavBarComponent";
import ScrollProgress from "@/components/animated/Progress/ScrollProgress";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio de Max',
  description: 'Sitio creado con NEXTJS',
}

export default function RootLayout({ children }) {
  return (
  
    <html lang="es">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} dark:bg-gray-900`}>
      <ScrollProgress />
    <NavbarComponent />
     
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow  ">{children}</main>
      </div>
        <Footer />
    </body>
  </html>
  )
}
