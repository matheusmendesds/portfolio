import Image from "next/image"
import Socials from "@/components/layout/Socials"

export default function Inicio(){


    return (
        <div id="inicio"  className="h-screen bg-roxoPrincipal flex justify-center" >
            <section className="card_info font-Roboto text-white ">
                <div>
                    <p className="card_title">Matheus Mendes</p>
                    <p className="card_title">dos Santos</p>
                </div>
                <div className="flex gap-1">
                    <p>Desenvolvedor Front-End</p><span>|</span>
                    <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
                </div>
            </section>
            <Socials/>
            
        </div>
    )
}