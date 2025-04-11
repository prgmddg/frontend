import { Video } from '@/old-components/Video/Video'
import parsearFecha from '@/helpers/parsearFecha'
import twentyfourToTwelve from '@/helpers/twentyfourToTwelve'
import seminarios from '@/interfaces/seminarios'
import { faCalendar, faUser, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export default function VideoSemi (props:seminarios) {
  const { id_video, titulo, fecha, hora } = props

  return (
    <div className='flex-1 1500px:flex-[initial] bg-[#000a48]'>
      <div className='w-[100%] h-[46rem] 1200px:h-[30rem] 600px:h-[18rem]'>
        <Video src={`https://www.youtube.com/watch?v=${id_video}`} />
      </div>
      <div className='flex flex-col 1500px:hidden'>
        <section className='px-[2.2rem] py-[.8rem] flex border-b-[2px] border-[#14206b] items-center'>
          <div className='bg-[#3f8dfd] text-[#fff] px-[.9rem] py-[.8rem] rounded-[.4rem] mr-[2.2rem]'>
            <FontAwesomeIcon icon={faVideoCamera} size='2xl' />
          </div>
          <span className='text-[#fff] text-[1.1rem] font-bold'>{titulo}</span>
          <div className='border-l-[1px] border-[#fff] text-[#fff] px-[1.3rem] ml-auto'>
            <FontAwesomeIcon icon={faUser} size='xl' className='mr-[1rem]' />
            <span className='font-bold'>230</span>
          </div>
          <div className='bg-[#192677] text-white flex items-center px-[1.5rem] py-[1rem] rounded-[.4rem]'>
            <FontAwesomeIcon
              icon={faCalendar}
              size='xl'
              className='mr-[1rem]'
            />
            <span className='font-bold'>
              {fecha?.split('-')[2]}&nbsp;
              {parsearFecha(fecha)}&nbsp;|&nbsp;
              {twentyfourToTwelve(hora)}
            </span>
          </div>
        </section>
        <section className='px-[2.2rem] flex items-center gap-[1.5rem] py-[1rem]'>
          <span className='text-[#fff]'>
            Unete a nuestros grupos y sigue los seminarios:
          </span>
          <div className='flex gap-[1rem]'>
            <MyLink href='https://chat.whatsapp.com/Lgx182kXXFCJEnJtwvYg4w'>
              Grupo Whatsapp
            </MyLink>
            <MyLink
              href='https://t.me/DesarrolloGlobal'
              className='bg-[#0d6efd] hover:bg-[#0b5bd1]'
            >
              Grupo de Telegram
            </MyLink>
          </div>
        </section>
      </div>
    </div>
  )
}

interface props extends AnchorHTMLAttributes<HTMLAnchorElement>
{
  children:ReactNode
}

function MyLink ({ className, children, ...props }:props) {
  return (
    <a {...props} target='_blank' className={twMerge('px-[.6rem] py-[.5rem] font-bold text-[#fff] bg-green-400 hover:bg-green-500 rounded-[.3rem]', className)}>
      {
        children
      }
    </a>
  )
}
