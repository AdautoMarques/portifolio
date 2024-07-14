'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const about = {
  title: 'Sobre mim',
  description: `
  Formado em análise e desenvolvimento de sistemas pela Faculdade Anhanguera, sou um apaixonado por tecnologia e estou sempre explorando novas tecnologias e 
  tendências para aprimorar meu conhecimento, com ênfase no Front End.
  `,
  info:[
    {
      name: 'Nome',
      fieldValue: 'Adauto Marques'
    },
    {
      name: 'Telefone',
      fieldValue: '(14)99799-6598'
    },
    {
      name: 'Experiencia',
      fieldValue: '2+ Anos'
    },
    {
      name: 'Nome',
      fieldValue: 'Adauto Marques'
    },
    {
      name: 'Nacionalidade',
      fieldValue: 'Brasileio'
    },
    {
      name: 'E-mail',
      fieldValue: 'adautomarques937@gmail.com'
    }
  ]
}

const education = [
  {
    title: 'Minhas fomações',
    description: 'Minhas formações na área de desenvolvimento',
    items: [
      {
        institution: 'Anhanguera',
        degree: ' análise e desenvolvimento de sistemas'
      },
      {
        institution: 'DevSamurai',
        degree: 'Frontend master'
      },
      {
        institution: 'OneBitCode',
        degree: 'Full Stack Javascript'
      },
      {
        institution: 'Rocketseat',
        degree: 'Formação em React'
      },
      
    ]
  }
]

const skills = {
  title: 'Minhas Habilidades'
}


const Resume = () => {
  return ( 
    <div>Resumo</div>
   );
}
 
export default Resume;