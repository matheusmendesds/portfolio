import Link from "next/link"
import Image from "next/image"
import TextAbout from "@/components/TextAbout/TextAbout"
import styles from '@/styles/about.module.css'
export default function About() {
    
    return (
        <section id="about" className=" text-white h-screen bg-roxoEscuro text-center-flex">
            <div className="flex pt-1">
                <Link href="/" className="items-start"><Image src="/homewhite.png" width={30} height={30} alt="Up"></Image></Link>
                <h1 className="m-auto text-center font-Header text-4xl text-white">Sobre</h1>
                <Link href="#projects" ><Image src="/DownWhite.png" width={30} height={30} alt="Up"></Image></Link>
            </div>
            <div className={styles.content_box}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia numquam aspernatur beatae quaerat aut reiciendis non quos quisquam molestias deleniti eligendi nesciunt, in minima delectus fugit quibusdam accusamus nam! Eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error assumenda quam at? Quia cum doloribus, consectetur ab soluta vitae nesciunt accusantium nulla repudiandae aliquam atque laudantium a distinctio nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga sint praesentium reiciendis molestias, nobis officia rerum facere, adipisci porro dignissimos omnis asperiores perferendis quis obcaecati odit error dolorum veritatis.
            </div>
            {/*Mudar a cor do texto do TextAbout */ }   
        </section>
        
    )
}