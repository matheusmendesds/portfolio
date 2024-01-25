import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import About from "./about/about"
import Projects from "./projects/Projects"
import Contact from "./contact/Contact"
import Inicio from "./Inicio/Inicio"

export default function Home() {
  return (
    <>
      <Navbar/> 
      <Inicio/>
      <About/>
      <Projects/>
      <Contact/>
          
    </>
  )
}
