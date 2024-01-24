import Skills from "../Skills/Skills"
import aboutwp from "../Img/aboutwp.jpg"
import Image from "next/image"
export default function TextAbout(){

    return (
        <section className="flex font-TextLibreCaslon text-2xl">
            {/*Tentar fazer o botão para texto em inglês */}
            <div className="about_content bg-roxoPrincipal sm:p-5">
                <div>
                    <p>Olá, meu nome é Matheus e sou estudante</p>
                    <p> de Análise e Desenvolvimento de sistemas e </p>
                    <p>atualmente estou estudando e desenvolvendo habilidades de interesse para área de Front-End. Porém, tenho interesse em chances de</p>
                    <p>conhecer e aprender novas áreas da programação.</p>
                    <Skills/>
                </div>
                <Image src={aboutwp} height={30} width={300} alt="aboutwp" className=""/>
            </div>
        </section>
        
    )
}