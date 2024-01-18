import Link from "next/link"
import Image from "next/image"
import TextAbout from "@/components/TextAbout/TextAbout"
export default function About() {
    
    return (
        <section id="about" className=" text-white h-screen bg-roxoEscuro text-center-flex">
            <div className="flex pt-1">
                <Link href="/" className="items-start"><Image src="/homewhite.png" width={30} height={30} alt="Up"></Image></Link>
                <h1 className="m-auto text-center font-Header text-4xl text-white">Sobre</h1>
                <Link href="#projects" ><Image src="/DownWhite.png" width={30} height={30} alt="Up"></Image></Link>
            </div>
            {/*Mudar a cor do texto do TextAbout */ }   
        </section>
        
    )
}