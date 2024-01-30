import imgandroid from '../../components/Img/android.png'
import imgcordel from '../../components/Img/cordel.png'
import imgsocial from '../../components/Img/social.png'
import imglogin from '../../components/Img/login.png'
import imgorgespor from '../../components/Img/orgesportiva.png'
import imgcalc from '../../components/Img/calcjs.png'


import HeaderProjects from "@/components/layout/Headers/HeaderProjects"
import CardProjects from '@/components/CardProjects/CardProjects'
const ProjectsData = [
      {
        id:1,
        name:'Projeto Android',
        img: imgandroid,
        type:'Curso',
        linkGitHub:'https://github.com/matheusmendesds/projeto-android',
        linkPage:'https://matheusmendesds.github.io/projeto-android/',
        technologies:'HTML,CSS',
        desc:'Projeto criado no curso de html e css do canal Curso em vídeo',
        finished:true
      },
      {
        id:2,
        name:'Projeto Cordel',
        img: imgcordel,
        type:'Curso',
        linkGitHub:'https://github.com/matheusmendesds/projeto-cordel',
        linkPage:'https://matheusmendesds.github.io/projeto-cordel/',
        technologies:'HTML,CSS',
        desc:'Projeto criado no curso de html e css do canal Curso em vídeo',
        finished:true
      },
      {
        id:3,
        name:'Projeto Login',
        img:imglogin,
        type:'Curso',
        linkGitHub:'https://github.com/matheusmendesds/projeto-login',
        linkPage:'https://matheusmendesds.github.io/projeto-login/',
        technologies:'HTML,CSS',
        desc:'Projeto criado no curso de html e css do canal Curso em vídeo',
        finished:true
      },
      {
        id:4,
        name:'Redes Sociais',
        img:imgsocial,
        type:'Curso',
        linkGitHub:'https://github.com/matheusmendesds/projeto-social',
        linkPage:'https://matheusmendesds.github.io/projeto-social/',
        technologies:'HTML,CSS',
        desc:'Projeto criado no curso de html e css do canal Curso em vídeo',
        finished:true
      },
      {
        id:5,
        name:'Organização Esportiva',
        img:imgorgespor,
        type:'Projeto Próprio',
        linkGitHub:'https://github.com/matheusmendesds/projeto-org-esportiva',
        linkPage:'https://matheusmendesds.github.io/projeto-org-esportiva/',
        technologies:'HTML,Bootstrap',
        desc:'Projeto de site de uma organização esportiva utilizando o Bootstrap',
        finished:true
      },
      {
        id:6,
        name:'Calculadora em javascript',
        img:imgcalc,
        type:'Projeto Próprio',
        linkGitHub:'https://github.com/matheusmendesds/Calculadora-Javascript',
        linkPage:'https://matheusmendesds.github.io/Calculadora-Javascript/',
        technologies:'HTML,CSS,Javascript',
        desc:'Calculadora criada com javascript para aprendizado',
        finished:true
      }
];

export default function ProjectsPage() {
  return (
  
    <div id='projects' className='bg-roxoPrincipal font-TextLaila'>
    <HeaderProjects/>
      
        {
          ProjectsData.map((e:any) =>{
            if(e.finished){
              return (
                <CardProjects key={e.id} name={e.name} img={e.img} type={e.type} linkGithub={e.linkGitHub} linkPage={e.linkPage} technologies={e.technologies} desc={e.desc}>

                </CardProjects>
              )}
          })
        }
      
    </div>   
  
  )
}
  
  