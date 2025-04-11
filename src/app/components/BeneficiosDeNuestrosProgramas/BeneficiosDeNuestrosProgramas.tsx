'use client'

import React, { useState, Dispatch, SetStateAction } from 'react'
import { MyBlock } from '@/components/MyBlock/MyBlock'
import Image from 'next/image'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faQrcode, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

interface hover
{
  id:number,
  isHover:boolean
}

export const BeneficiosDeNuestrosProgramas = () => {
  const [hover, setHover] = useState<hover>({ id: 1, isHover: false })

  return (
    <MyBlock
      styles={{
        container: 'bg-[#F1F4FF] py-[142px] 1406px:py-[85px]',
        section: 'py-0'
      }}
    >
      <h2 className='text-[45px] block text-center mb-[3.2rem] 1406px:text-[1.8rem] 1406px:mb-[2rem]'>
        Beneficios de nuestras Clases
      </h2>
      <div className='flex 1406px:flex-col w-[calc(694px_+_2rem_+_488px)] max-w-[100%]'>
        <section className='flex justify-start pt-[4rem] 1406px:pt-0 flex-1 flex-col 1406px:mb-[2rem]'>
          <span className='font-bold text-[26px] 1406px:text-center block mb-[37px] 1406px:text-[.9rem] text-left leading-[1.6rem]'>
            Capacitate desde cualquier lugar, desde nuestra plataforma.
          </span>
          <ul className='flex-col flex gap-[.5rem] 1406px:grid 1406px:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] mob:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))]'>
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
        <section className='w-[calc(1213px_-_488px)] 1406px:w-[100%] relative 1406px:flex 1406px:justify-center'>
          <div className='absolute w-[936px] 1406px:w-[100%] h-[542px] translate-x-[-5rem] 1406px:hidden'>
            <Image
              src={`/img/hoverLap${hover.id}.webp`}
              fill
              className='w-[936px] absolute 1406px:h-[initial]'
              alt='laptop abierta'
            />
          </div>
          <Image
            src={`/img/hoverLap${hover.id}.webp`}
            width={936}
            height={542}
            className='w-[936px] 1406px:h-[initial] hidden 1406px:block'
            alt='laptop abierta'
          />
        </section>
      </div>
    </MyBlock>
  )
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
      <span className='font-bold text-[18px] 1406px:text-[15px] mob:text-[10px]'>{label}</span>
    </li>
  )
}
