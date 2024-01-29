import Navbar from "@/components/layout/Navbar"


import About from "./about/about"
import Projects from "@/pages/Projects/Projects"
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
