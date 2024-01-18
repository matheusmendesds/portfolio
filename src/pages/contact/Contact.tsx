import TextContact from "@/components/TextContact/TextContact";
import Link from "next/link";
import Image from "next/image";
export default function Contact() {
    return (
        <>
            <section id="contact" className="text-white bg-roxoEscuro text-center-flex">
              <div className="flex pt-1">
                <Link href="#projects" className="items-start "><Image src="/UpWhite.png" width={30} height={30} alt="Up"></Image></Link>
                <h1 className="m-auto text-center text-4xl text-white font-Header">contato</h1>
              </div>
          </section>
        </>
        )
}