'use client'

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'

import proximoSeminario, { Asesor } from '@/interfaces/proximoSeminario'
import { contextSeminario } from '../../context/Context'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export default function Solicita () {
  const { banner, asesor } = useContext(contextSeminario) as proximoSeminario

  return (
    <div>
      <div className='container-for-real'>
        <h1 className='text-[#000] uppercase font-bold text-center max-w-[542px] block mx-auto text-[35px] mb-[3.4rem]'>
          <span className='text-red-500'>SOLICITA UN DESCUENTO</span> EN
          NUESTROS PROXIMOS INICIOS
        </h1>
        <div className='flex justify-center mob2:flex-col gap-[2rem] items-center'>
          {
            banner?.promocion.length > 0 &&
              <>
                {banner?.promocion.map((ban, pos) => {
                  return (
                    <MyCard key={pos} {...ban} pos={pos} asesor={asesor} />
                  )
                })}
              </>
          }
        </div>
      </div>
    </div>
  )
}

function MyCard (props:{enlace:string, img:string, asesor:Array<Asesor>, pos:number}) {
  const
    {
      enlace,
      img,
      asesor,
      pos
    } = props

  return (
    <div className='flex-1 max-w-[30rem] p-[.8rem] pb-[2rem] bg-[#F5F5F5] rounded-[.5rem] border-[#000] border-[1px]'>
      <a href={enlace} target='_blank' className='w-[50%]' rel='noreferrer'>
        <picture>
          <img src={img} className='rounded-[.5rem]' alt='' />
        </picture>
      </a>
      <div className='flex flex-col items-center mt-[1rem]'>
        <div className='rounded-[100%] w-[6rem] h-[6rem] overflow-hidden'>
          <picture>
            <img
              src='https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2020/06/unnamed%20%283%29.jpg'
              alt=''
              className='w-[100%]'
            />
          </picture>
        </div>
        <h3 className='text-[1.3rem] font-bold'>{asesor[asesor.length > pos ? pos : 0].nombre}</h3>
        <p>Asesor(a) Académico(a)</p>
        <div className='max-w-[100%] w-[15rem] flex flex-col mt-[1rem] gap-[.5rem]'>
          <Mylink
            label='whatsapp'
            icon={faWhatsapp}
            path={enlace}
          />
        </div>
      </div>
    </div>
  )
}

function Mylink (props:{label:string, icon:IconProp, path:string, styles?:string}) {
  const
    {
      label,
      icon,
      path,
      styles = ''
    } = props

  return (
    <a
      target='_blank'
      className={`text-[#fff] bg-green-400 px-[.8rem] flex justify-center items-center gap-[1rem] py-[.4rem] rounded-[2rem] hover:!text-[#fff] ${styles}`}
      href={path} rel='noreferrer'
    >
      <FontAwesomeIcon className='text-[2rem]' icon={icon} />
      <strong className='capitalize'>{label}</strong>
    </a>
  )
}
