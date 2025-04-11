'use client'

import { programContext } from '@/context/ProgramContext'
import { globalContext } from '@/context/GlobalContext'
import whatLinkText from '@/helpers/whatLinkText'
import programData from '@/types/programData'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useContext } from 'react'

export const ContadorHeader = () => {
  const context = useContext(programContext)
  const userContext = useContext(globalContext)

  if (context === undefined || userContext === undefined) return (<></>)

  const { program: curso } = context.values
  const { user } = userContext
  const { titulo, asesores, tipo, etiqueta, tipo_clase } = curso as programData

  return (
    <section className='bg-primary fixed top-0 w-full z-[99] hidden lg:block shadow-lg'>
      <div className='flex justify-start h-[100px] w-[calc(1920px_-_308px_*_2)] max-w-[100%] mx-auto box-content px-[1rem]'>
        <div className='w-[797px] flex items-center justify-between'>
          <div className='flex items-center'>
            <Image
              src='/img/header.webp'
              width={78}
              height={78}
              alt='icono de libro abierto'
              className='mr-[16px]'
            />
            <p className='text-white font-bold max-w-[375px] text-[18px] line-clamp-3 overflow-hidden leading-[22px]'>
              {tipo === 'curso' ? 'Curso Especializado:' : 'Diploma de Alta Especialización:'}&nbsp;{titulo}
            </p>
          </div>
          <div className='text-[#FAFAFA] flex flex-col items-center'>
            <span className='text-[16px] font-bold mb-[5px] block'>Contacta con un asesor</span>
            <a target='_blank' href={whatLinkText({ asesor: asesores[0], subject: `${tipo} ${tipo_clase === 'GRABADO' ? 'asincrónico' : ''}`, email: user?.correo, program: titulo, phone: asesores[0].telefono, url: `https://desarrolloglobal.pe/${tipo}s/${etiqueta}` })} className='flex text-[18px] bg-[#25A217] rounded-[9px] py-[10px] w-[220px] max-w-[100%] justify-center gap-[6px] items-center' rel='noreferrer'>
              <FontAwesomeIcon size='xl' icon={faWhatsapp} />
              <span className='font-bold'>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <div className='bg-white px-[1rem] py-[.4rem] h-[50px] items-center flex'>
        <div className='flex w-[calc(1920px_-_308px_*_2)] max-w-[100%] mx-auto box-content px-[1rem] gap-[64px]'>
          <Option label='Temario' section='#Temario' />
          <Option label='Profesores' section='#Profesores' />
          <Option label='Certificado' section='#Certificado' />
          <Option label='Beneficios' section='#Beneficios' />
          <Option label='Pagar en Linea' section='#Pagar en Linea' />
        </div>
      </div>
    </section>
  )
}

function Option ({ section, label }:{section:string, label:string}) {
  return (
    <a href={section} className='text-black font-bold text-center hover:text-primary'>
      {
        label
      }
    </a>
  )
}
