import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio de Max',
  description: 'Sitio creado con NEXTJS',
}

export default function RootLayout({ children }) {
  return (
  
    <html lang="en">
    <body className={inter.className}>
      <NavBar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
        <Footer />
    </body>
  </html>
  )
}
