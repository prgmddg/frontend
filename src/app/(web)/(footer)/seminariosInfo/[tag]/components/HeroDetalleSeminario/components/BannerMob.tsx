import React from 'react'
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import UnderButton from './UnderButton'
import formattingDate from '../Helpers/formattingDate'
import to12Hours from '../Helpers/to12Hours'

export default function BannerMob ({ banner, fecha, hora }:{banner:string, fecha:string, hora:string}) {
  return (
    <div className='hidden mob:flex flex-col mob3:items-stretch items-start gap-[3rem]'>
      <picture>
        <img
          className='flex-1 rounded-[.5rem]'
          src={banner}
          alt='Banner Mobile'
        />
      </picture>
      <div className='flex flex-col items-start gap-[.5rem] flex-1 493px:items-stretch'>
        <UnderButton
          icon={faCalendar}
          data={fecha ? formattingDate(fecha) : ''}
          label='Fecha'
        />
        <UnderButton
          icon={faClock}
          data={hora ? to12Hours(hora) : ''}
          label='Hora de Inicio'
        />
      </div>
    </div>
  )
}
