'use client'

import React, { useContext } from 'react'

import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import BannerDesktop from './components/BannerDesktop'
import BannerMob from './components/BannerMob'
import UnderButton from './components/UnderButton'
import formattingDate from './Helpers/formattingDate'
import to12Hours from './Helpers/to12Hours'
import { contextSeminario } from '../../context/Context'
import proximoSeminario from '@/interfaces/proximoSeminario'

export default function HeroDetalleSeminario () {
  const
    {
      titulo,
      descripcion,
      fecha,
      hora,
      banner
    } = useContext(contextSeminario) as proximoSeminario

  const myBanner = banner?.seminario || ''

  return (
    <div
      style={
        {
          backgroundImage: 'url("/img/seminario_bg.webp")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }
      }
    >
      <div className='w-[1400px] max-w-[100%] my-0 mx-auto flex gap-[7rem] px-[8rem] py-[5rem] mob2:px-[3rem] mob3:px-[1.5rem] 1200px:flex-col-reverse 1200px:gap-[3rem] mob3:py-[3rem]'>
        <section className='flex-[.8]'>
          <BannerDesktop banner={myBanner} />
          <BannerMob banner={myBanner} fecha={fecha} hora={hora} />
        </section>
        <section className='flex-1 relative text-[#fff]'>
          <p className='bg-[#fff] text-red-500 px-[1.5rem] rounded-[1rem] py-[.3rem] font-bold inline-flex items-center gap-[.7rem] mb-[1.6rem]'>
            <span className='bg-red-500 block rounded-[100%] w-[.7rem] h-[.7rem]' />
            <span>Seminario en vivo</span>
          </p>
          <div className='mb-[1.5rem]'>
            <h1 className='font-bold text-[50px] uppercase mob3:text-[1.6rem] mob2:text-center text-white'>{titulo}</h1>
            <div className='mt-[1.5rem] border-[2px] border-[#fff] w-[8rem]' />
          </div>
          <p className='mb-[1.5rem] mob2:mb-0 text-[22px]'>{descripcion}</p>
          <div className='flex flex-col items-start gap-[.5rem] 1200px:hidden'>
            <UnderButton
              icon={faCalendar}
              data={fecha ? formattingDate(fecha) : ''}
              label='Fecha'
              styles='!text-[1.3rem] !mob2:text-[1rem] '
            />
            <UnderButton
              icon={faClock}
              data={hora ? to12Hours(hora) : ''}
              label='Hora de Inicio'
              styles='!text-[1.3rem] !mob2:text-[1rem] '
            />
          </div>
        </section>
      </div>
    </div>
  )
}
