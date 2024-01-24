import js from '../Img/js.svg'
import bootstrap from '../Img/bootstrap.svg'
import github from '../Img/github.svg'
import html from '../Img/html5.svg'
import python from '../Img/python.svg'
import tail from '../Img/tailwind.svg'
import css from '../Img/css.svg'
import typescript from '../Img/typescript.svg'
import react from '../Img/react.svg'
import node from '../Img/nodejs.svg'

import Image from 'next/image'

import styles from '../../styles/Skills.module.css'

export default function Skills() {
    return (
        <div className='mt-10'>
            <p className='font-Header text-3xl'>Habilidades</p>
            <p className={styles.title_skills}>Mais desenvolvidas</p>
            <section className={styles.box_skills}>
                <Image src={js} alt='js' width={50}/>
                <Image src={html} alt='html' width={50} />
                <Image src={css} alt='css'  width={50} />
                <Image src={bootstrap} alt='bootstrap'  width={50} />
                <Image src={typescript} alt='typescript'  width={50} />
            </section>
            <p className={styles.title_skills}>Em desenvolvimento</p>
            <section className={styles.box_skills}>
                <Image src={tail} alt='tailwind'  width={50} />
                <Image src={node} alt='node'  width={50} />
                <Image src={python} alt='python' width={50} />
                <Image src={react} alt='react'  width={50} />
                <Image src={github} alt='github'  width={50} />
            </section>
            
        </div>
    )
}