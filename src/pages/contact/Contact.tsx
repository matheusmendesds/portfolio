import TextContact from "@/components/TextContact/TextContact";
import HeaderContact from "@/components/layout/Headers/HeaderContact";
export default function Contact() {
    return (
        <>
          <section id="contact" className="text-white bg-roxoEscuro h-fit">
            <HeaderContact/>    
          </section>
          <TextContact/>
        </>
        )
}