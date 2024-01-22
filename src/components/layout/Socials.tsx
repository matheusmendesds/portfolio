import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"

export default function Socials() {
    const stopMove=(()=>{
        const divsocial = document.querySelector('#social-section') as HTMLDivElement
        divsocial.style.animationPlayState='paused'
    })

    const continueMove=(()=>{
        const divsocial = document.querySelector('#social-section') as HTMLDivElement
        divsocial.style.animationPlayState='running'
    })

    return (
        <div onMouseEnter={stopMove} onMouseLeave={continueMove} id="social-section" className="socials bg-azulClaro">
            <a href="https://www.linkedin.com/in/matheus-mendes-13b548192/" target="_blank"><FaLinkedin size="2em" color="black" className="icon"/></a>
            <a href="https://github.com/matheusmendesds" target="_blank" ><FaGithub size="2em" color="black" className="icon"/></a>
            <a href="https://www.instagram.com/mendesmatheus30/?next=%2F" target="_blank" ><FaInstagram size="2em" color="black" className="icon"/></a>        
        </div>
    )
}