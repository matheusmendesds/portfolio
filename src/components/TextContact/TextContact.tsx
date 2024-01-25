import { FaLinkedin, FaGithub , FaInstagram } from "react-icons/fa"
import styles from '../TextContact/TextContact.module.css'
export default function TextContact() {
    return (
    <div className="bg-roxoEscuro flex justify-center">
        <a href="https://www.linkedin.com/in/matheus-mendes-13b548192/" target="_blank"><FaLinkedin size="2em" color="white" className={styles.icon}/></a>
        <a href="https://github.com/matheusmendesds" target="_blank" ><FaGithub size="2em" color="white" className={styles.icon}/></a>
        <a href="https://www.instagram.com/mendesmatheus30/?next=%2F" target="_blank" ><FaInstagram size="2em" color="white" className={styles.icon}/></a>        
    </div>
    )
}