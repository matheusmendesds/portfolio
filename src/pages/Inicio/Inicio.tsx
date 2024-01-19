import Image from "next/image"
export default function Inicio(){


    return (
        <section id="inicio"  className="h-screen bg-roxoPrincipal flex justify-center items-center">
            <div id="teste" className="card_info font-TextLibreCaslon text-white ">
                <p className="card_title">Matheus Mendes</p>
                <p className="card_title">dos Santos</p>
                <Image src="Image/laptop.png" width={30} height={30}/>
                <div className="flex gap-1">
                    <p>Desenvolvedor Front-End</p><span>|</span>
                    <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
                </div>
                {/*  bg-[url('/bgpurple.jpg')]  w-[100%] bg-cover bg-center */}
            </div>
        </section>
    )
}