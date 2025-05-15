'use client'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faLaptop, faQrcode, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'

interface hover
{
  id:number,
  isHover:boolean
}

interface props
{
  img?:{src:string, width:number, height:number, alt:string}
  label:string
  setHover:Dispatch<SetStateAction<hover>>
  hover:hover
  id:number
  icon?:IconProp
}

function Option (props:props) {
  const { img, label, setHover, id, icon } = props

  return (
    <li
      className='flex px-[1rem] h-[70px] rounded-[.5rem] gap-[1rem] shadow-lg items-center bg-white hover:bg-[#003399] hover:text-white hover:cursor-pointer'
      onMouseEnter={() => setHover({ isHover: true, id })}
      onMouseLeave={() => setHover(prev => { return { ...prev, isHover: false } })}
    >
      <div className='w-[3.5rem] flex items-center justify-start'>
        {
          img && <Image {...img} alt={img.alt} />
        }
        {
          icon && <FontAwesomeIcon size='2xl' icon={icon} />
        }
      </div>
      <span className='font-bold text-[15px] xl:text-[18px]'>{label}</span>
    </li>
  )
}

export default function OurBenefits() {
  const [hover, setHover] = useState<hover>({ id: 1, isHover: false })
  return (
    <div className='w-full px-4 py-20 bg-[#F1F4FF]'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <h2 className='text-[45px] block text-center mb-[3.2rem] 1406px:text-[1.8rem] 1406px:mb-[2rem]'>
            Beneficios de nuestras Clases
        </h2>
        <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
          <section className='flex flex-col'>
            <span className='font-bold text-[26px] 1406px:text-center block mb-[37px] 1406px:text-[.9rem] text-left leading-[1.6rem]'>
                Capacitate desde cualquier lugar, desde nuestra plataforma.
            </span>
            <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1'>
              <Option
                id={1}
                img={{
                  src: '/img/hover1.webp',
                  alt: 'icono de señal',
                  height: 30,
                  width: 40
                }}
                hover={hover}
                setHover={setHover}
                label='clases 100% virtuales'
              />
              <Option
                id={2}
                icon={faLaptop}
                hover={hover}
                setHover={setHover}
                label='Aula Moderna e Intuitiva'
              />
              <Option
                id={3}
                icon={faQrcode}
                hover={hover}
                setHover={setHover}
                label='Certificado Digital y Físico (*)'
              />
              <Option
                id={4}
                icon={faShieldHalved}
                hover={hover}
                setHover={setHover}
                label='Empresa con Certificación de Calidad'
              />
            </ul>
          </section>
          <section className='flex items-end justify-center'>
            <picture>
              <img
                src={`/img/hoverLap${hover.id}.webp`}
                width={0}
                height={0}
                className='w-full aspect-auto'
                alt='laptop abierta'
              />
            </picture>
          </section>
        </div>
      </div>
    </div>
  )
}