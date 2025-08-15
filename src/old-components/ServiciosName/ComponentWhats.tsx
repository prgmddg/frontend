'use client'

import { programContext } from '@/context/ProgramContext'
import whatLinkText from '@/helpers/whatLinkText'
import programData, { asesor } from '@/types/programData'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useContext } from 'react'
import { useAuth } from '@/hooks/useAuth'

export const ComponentWhats = () => {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { asesores } = program as programData

  return (
    <section className='bg-[#003399] py-[5rem] px-[1rem]'>
      <article className='container mx-auto'>
        <div className='w-full lg:w-[70%]'>
          <p className='text-white font-bold text-4xl text-center'>¿Prefieres hablar por Whatsapp?</p>
          <p className='text-white mt-5 text-center text-2xl'>Nuestros asesores están disponibles para brindarte asesoría personalizada. ¡Comunicate con nosotros ahora mismo!</p>
          <div className='w-full flex justify-center items-center gap-[1rem] flex-wrap'>
            {
              asesores.map((asesor, pos) => (
                <Box key={pos} {...asesor} />
              ))
            }
          </div>
        </div>
      </article>
    </section>
  )
}

function Box(props: asesor) {
  const { avatar, nombre, telefono, telefono_2 } = props

  const phomes = [telefono_2, telefono].filter(phone => phone && phone !== '0')
  const { auth } = useAuth()
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { titulo, tipo, etiqueta, tipo_clase } = program as programData

  return (
    <div className='bg-white w-[400px] rounded-md p-3 lg:p-5 mt-10 flex justify-between items-center'>
      <Image
        src={avatar}
        alt='imagen de asesor'
        width={120}
        height={120}
        className='h-[120px] w-[120px] rounded-[100%] border-[5px] border-[#00c9a2]'
      />
      <div>
        <p className='text-center font-bold bg-[#003399] rounded-full text-white'>{nombre}</p>
        <p className='text-center font-bold'>{
          (
            nombre.toLowerCase().includes('rolando') ||
            nombre.toLowerCase().includes('israel') ||
            nombre.toLowerCase().includes('joan') ||
            nombre.toLowerCase().includes('sebastian') ||
            nombre.toLowerCase().includes('ignacio')
          )
            ? 'Asesor'
            : 'Asesora'
        }&nbsp;{
          (
            nombre.toLowerCase().includes('rolando') ||
              nombre.toLowerCase().includes('israel') ||
              nombre.toLowerCase().includes('joan') ||
              nombre.toLowerCase().includes('sebastian') ||
              nombre.toLowerCase().includes('ignacio')
          ) ? 'Académico' : 'Académica'
        }
        </p>
        {phomes.map((phome, pos) => (
          <a
            key={pos}
            target='_blank'
            className='flex w-[202px] mx-auto items-center h-[40px] mt-1 text-green-500 text-2xl gap-3'
            href={whatLinkText({
              email: auth?.correo,
              program: tipo === 'diplomado' ? titulo.replace('Diploma', 'Diplomado') : titulo,
              asesor: { telefono, telefono_2 },
              subject: `${tipo} ${tipo_clase === 'GRABADO' ? 'asincrónico' : ''}`,
              phone: phome,
              url: `https://desarrolloglobal.pe/${tipo}s/${etiqueta}`
            })}
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faWhatsapp} className='text-3xl' />
            <p className='font-bold'>{phome}</p>
          </a>
        ))}

      </div>
    </div>
  )
}
