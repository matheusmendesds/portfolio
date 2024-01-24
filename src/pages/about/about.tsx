import HeaderAbout from "@/components/layout/Headers/HeaderAbout"
import TextAbout from "@/components/TextAbout/TextAbout"
import styles from '@/styles/about.module.css'
export default function About() {
    
    return (
        <section id="about" className=" text-white h-screen bg-roxoEscuro text-center-flex">
            <HeaderAbout/>
            <div>
            <TextAbout/>
            </div>
            {/*Mudar a cor do texto do TextAbout */ }   
            
        </section>
        
    )
}