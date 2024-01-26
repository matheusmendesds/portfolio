import Skills from "../Skills/Skills"
import aboutwp from "../Img/aboutwp.jpg"
import Image from "next/image"
import laptop from "../Img/laptop.png"
export default function TextAbout(){

    return (
        <section className="font-TextLibreCaslon text-1xl lg:text-2xl pt-10 pb-10 ">
            {/*Tentar fazer o botão para texto em inglês */}
            <div className="about_content bg-gradient-to-r from-roxoPrincipal to-roxoEscuro border border-roxoPrincipal md:w-6/12 lg:w-7/12 lg:flex">
                <div className="text-center">
                    <p className="text-justify indent-4">Olá, meu nome é Matheus e sou estudante
                    de Análise e Desenvolvimento de sistemas e 
                    atualmente estou estudando e desenvolvendo habilidades de interesse para área de Front-End. 
                    Porém, tenho interesse em ter a chance de conhecer e aprender novas áreas da programação.</p>
                    <div className=""></div>
                    <Skills/>
                </div>
                
            </div>
        </section>
        
    )
}