import Skills from "../Skills/Skills"
import aboutwp from "../Img/aboutwp.jpg"
import Image from "next/image"
export default function TextAbout(){

    return (
        <section className=" font-TextLibreCaslon text-1xl md:text-2xl pb-4 ">
            {/*Tentar fazer o botão para texto em inglês */}
            <div className="about_content bg-roxoPrincipal md:w-6/12 lg:w-8/12">
                <div className="text-justify">
                    <p>Olá, meu nome é Matheus e sou estudante
                    de Análise e Desenvolvimento de sistemas e 
                    atualmente estou estudando e desenvolvendo habilidades de interesse para área de Front-End. 
                    Porém, tenho interesse em ter a chance de conhecer e aprender novas áreas da programação.</p>
                    <Skills/>
                </div>
                <Image src={aboutwp} height={30} width={200} alt="aboutwp" className="hidden lg:block"/>
            </div>
        </section>
        
    )
}