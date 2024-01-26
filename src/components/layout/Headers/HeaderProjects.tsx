import Link from "next/link"
import Image from "next/image"

export default function HeaderProjects() {
    return (
        <div className="flex p-1 text-black border-b border-roxoEscuro bg-purple-900 text-center">
            <Link href="#about" className="items-start "><Image src="/Up.png" width={30} height={30} alt="Up"></Image></Link>
            <h1 className="m-auto text-center font-Header text-4xl text-black">projetos</h1>
            <Link href="#contact"><Image src="/Down.png" width={30} height={30} alt="Up"></Image></Link>
        </div>
    )
}