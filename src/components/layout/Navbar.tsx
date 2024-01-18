import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar(){
    const [navbar, setNavbar] = useState(false)
    return (
    <div>
      <nav className="header border border-[#33353F] bg-roxoEscuro bg-gradient-to-b top-0 left-0 right-0 z-0">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
         <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
                <h2 className="text-2x1 text-cyan-600 font-Header hover:text-white">Início</h2>
            </Link>
             {/* Botão Hamburguer */}
             <div className="md:hidden">
                <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 " onClick={() => setNavbar(!navbar)}>
                {navbar ? (<Image src="/iconeX.svg" width={30} height={30} alt="logo"></Image>):(
                <Image src="/menuHamb.svg" alt="fechar" width={30} height={30} className="focus:border-none active:border-none" >
                </Image>)}
                </button>
             </div>
            </div>
         </div>  
         <div className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
            <ul className="h-screen md:h-auto  justify-center md:flex">
              <li className="font-Header pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent"><Link href="#about" onClick={() => setNavbar(!navbar)}>Sobre</Link></li>
              <li className="font-Header pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent"><Link href="#projects" onClick={() => setNavbar(!navbar)}>Projetos</Link></li>
              <li className="font-Header pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent"><Link href="#contact" onClick={() => setNavbar(!navbar)}>Contato</Link></li>
            </ul> 
          </div>
        </div>
      </nav>
    </div>
       
    )
}