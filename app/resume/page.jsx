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
  title: 'Minhas Habilidades',
  description: `Tenho sólidas habilidades em frontend, incluindo domínio de HTML, CSS, JavaScript e frameworks como React.js, além de experiência em UX/UI, adaptação a novas tecnologias, 
  boas práticas de desenvolvimento, colaboração eficaz, foco em performance e resolução de problemas técnicos.`,
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <FaReact />,
      name: 'react'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindcss'
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js'
    },
    {
      icon: <FaFigma />,
      name: 'figma'
    },

  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { motion } from 'framer-motion'



const Resume = () => {
  return ( 
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs className='flex flex-col xl:flex-row gap-[60px]' defaultValue='Sobre'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='educacao'>Formação</TabsTrigger>
            <TabsTrigger value='about'>Sobre</TabsTrigger>
            <TabsTrigger value='skills'>Habilidades</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='educacao'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>
                      {education[0].title}
                    </h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                      {education[0].description}
                    </p>
                    <ScrollArea className='h-[400px]'>
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                        {education[0].items.map((item, index) => {
                          return(
                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                              <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                              <div className='flex items-center gap-3'>
                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                <p className='text-white/60'>{item.institution}</p>
                              </div>
                            </li>
                          )
                        })}
                            
                      </ul>
                    </ScrollArea>
                </div>
                
      
              
              
            </TabsContent>



            <TabsContent value='skills'>Habilidades</TabsContent>
            <TabsContent value='about'>Sobre</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
   );
}
 
export default Resume;