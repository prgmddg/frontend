'use client'

import { globalContext } from '@/context/GlobalContext'
import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import { SolicitaloAqui } from '@/old-components/SolicitaloAqui/SolicitaloAqui'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image, { ImageProps } from 'next/image'
import { ReactNode, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'

function WhatButton ({ className, num }:{className?:string, num:string}) {
  const { user } = useContext(globalContext)

  return (
    <a
      className={twMerge('560px:text-[25px] 560px:h-[50px] gap-[21px] px-[1rem] flex justify-center bg-myGreen text-[35px] rounded-[.5rem] border-[4px] border-myGreen items-center text-white w-[100%] h-[70px] hover-animation', className)}
      target='_blank'
      href={`https://api.whatsapp.com/send?phone=51${num}&text=Hola,%20solicito%20informaci%C3%B3n%20mi%20correo%20es:${user?.correo}`} rel='noreferrer'
    >
      <FontAwesomeIcon icon={faWhatsapp} />
      <span className='font-bold'>{num}</span>
    </a>
  )
}

interface props
{
    img:ImageProps
    title:string
    description:string
    button: ReactNode
    className?:string
}

function Box (props:props) {
  const { img, title, description, button, className } = props

  return (
    <div className={twMerge('flex-1 my-shadow bg-white flex flex-col items-center px-[38px] py-[37px] justify-between rounded-[.5rem] min-w-[354px] 560px:min-w-full', className)}>
      <Image {...img} alt={img.alt} className='mb-[25px]' />
      <div>
        <span className='text-[26px] text-center font-bold mb-[21px] block'>
          {title}
        </span>
        <p className='text-center block mb-[46px]'>{description}</p>
        {button}
      </div>
    </div>
  )
}

export default function ContactUs () {
  const [show, setShow] = useState<boolean>(false)
  
  return (
    <div className='w-full px-4 py-20'>
      <MyPopUp
        isOpen={show}
        setIsOpen={setShow}
        popUp={<SolicitaloAqui setIsOpen={setShow} />}
      />
      <div className='w-full max-w-screen-xl mx-auto text-center'>
        <h2 className='text-[45px] font-bold 560px:text-3xl mb-[calc(57px_+_42px)] 560px:mb-[65px]'>
        Déjanos ayudarte, contáctanos 😀
        </h2>
        <div className='flex gap-[18px] flex-wrap'>
          <Box
            img={{
              src: '/img/bottomBox1.webp',
              height: 95,
              width: 95,
              alt: 'graduante usando laptop'
            }}
            title='¿Ya eres alumno?'
            description='Consulta con atención al alumno el estado de tus notas y certificaciones'
            button={<WhatButton num='990945941' className='hover:text-myGreen hover:bg-white' />}
          />
          <Box
            img={{
              src: '/img/bottomBox2.webp',
              height: 90,
              width: 100,
              alt: 'icono de atencion al cliente'
            }}
            title='Información de programas'
            description='Quieres información de algún curso, diploma o diplomado contáctanos aquí.'
            button={
              <WhatButton
                num='933929742'
                className='bg-white border-myGreen text-myGreen hover:bg-myGreen hover:text-white'
              />
            }
          />
          <Box
            img={{
              src: '/img/bottomBox3.webp',
              height: 100,
              width: 100,
              alt: 'icono de manos estrechandose'
            }}
            className='bg-gradient-to-r from-[#000481] to-[#c41247] text-white'
            title='Cursos In House'
            description='Puedes solicitar cualquiera de nuestros programas para que sean dictados en su ENTIDAD / INSTITUCIÓN,'
            button={
              <button className='px-[1rem] hover-animation hover:opacity-[.8] text-[22px] rounded-[.5rem] border-[4px] items-center font-bold w-[100%] h-[70px] 560px:text-[1rem] 560px:h-[50px] bg-white text-black' onClick={() => setShow(true)}>
              Solicitar esta Modalidad
              </button>
            }
          />
        </div>
      </div>
    </div>
  )
}