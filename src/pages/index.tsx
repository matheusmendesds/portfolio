import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import About from "./about/about"
import Projects from "./Projects/Projects"
import Contact from "./contact/Contact"
import Inicio from "./Inicio/Inicio"

export default function Home() {
  return (
    <>
      <Navbar/> 
      <Inicio/>
     {/*
           <div>
            <div className="bg-roxoPrincipal">teste</div>
            <div className="bg-verde">teste</div>
            <div className="bg-azulClaro">teste</div>
            <div className="bg-marrom">teste</div>
            <div className="bg-roxoEscuro">teste</div>
          </div> */}
          <About/>
          <Projects/>
          <Contact/>
          
    </>
  )
}
