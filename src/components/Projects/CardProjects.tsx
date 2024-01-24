import styles from './CardProjects.module.css'

import Link from 'next/link'
import Image from 'next/image'

import disableScroll from 'disable-scroll';
import ReactTooltip from 'react-tooltip';
import { FaGithub, FaLink, FaInfo, FaTimes } from 'react-icons/fa'
import { useState } from 'react'


interface ProjectProps{
    name:string,
    img:any,
    type:string,
    linkGithub:any,
    linkPage:any,
    technologies:string,
    desc:string
}
export default function CardProjects(props:ProjectProps) {
    const [popupState, setPopupState] = useState(false) 

    const showPopup = () => {
        setPopupState(true)
        disableScroll.on();
    }

    const hidePopup = () => {
        setPopupState(false)
        disableScroll.off();
    }
    return (
        <div className={styles.card}>
            <div className={styles.card_projetos}>
              <section>
                <p className=' text-white text-center'>{props.name}</p>
                <Image src={props.img} width={402} alt='site do projeto'/>
              </section>
              <section className='flex'>
                <button className=' p-1' onClick={showPopup}><FaInfo/></button>
                <Link className=' p-1' href={props.linkGithub} target='_blank'><FaGithub className='icon_btn'/></Link>
                <Link className='p-1' href={props.linkPage} target='_blank'><FaLink className='icon_btn'/></Link>
              </section>
              <ReactTooltip place="right" className='custom-tooltip' delayHide={300} effect='solid'/>
            </div>
            {popupState ? (
              <section className='popup'>
                <div className='popup_imagem'>
                    <div>
                        <button onClick={hidePopup}><FaTimes/></button>
                    </div>
                    <Image src={props.img} width={402} alt='site do projeto'/>
                    <div className='popup_informative'>
                      <p>Nome do Projeto:{props.name}</p>
                      <p>Descrição:{props.desc}</p>
                      <p>Feito em:{props.technologies}</p>
                    </div>
                </div>
              </section>
            ): null}
        </div>
        

    )
}


