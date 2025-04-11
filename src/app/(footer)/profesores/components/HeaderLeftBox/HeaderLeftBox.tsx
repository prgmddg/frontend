'use client'

import { profesor } from '@/interfaces/profesor'
import React, { useEffect, useRef, useState, ReactNode } from 'react'
import Box from './components/Box'
import ProfPic from '../ProfPic'
import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import Social from '../Social'
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

type props = profesor

export default function HeaderLeftBox (props:props) {
  const { nombres, descripcion, totalCursos, totalAlumnos, calificación, foto, apellidos, tituloProfesional } = props
  const [show, setShow] = useState<boolean>(false)
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const h = useRef(null)

  useEffect(() => {
    if (h.current === null) return
    const current = h.current as HTMLElement

    if (current.offsetHeight > 113) {
      setShow(true)
    }
  }, [])

  return (
    <>
      <div className='fixed right-0 translate-x-[-100%] opacity-0 max-w-[690px]' dangerouslySetInnerHTML={{ __html: descripcion }} ref={h} />
      <MyPopUp
        setIsOpen={setShowPopup}
        isOpen={showPopup}
        popUp={
          <SobreMi
            content={
              <div
                dangerouslySetInnerHTML={{ __html: descripcion }}
              />
            }
          />
        }
      />
      <section className='max-w-[690px]  1151px:max-w-[100%] flex-col flex 1151px:items-center'>
        <span className='text-white 1151px:mb-[10px] self-start bg-myYellow h-[42px] mb-[33px] inline-flex items-center pl-[22px] rounded-[9px] pr-[31px] font-bold text-[18px]'>
          Profesor
        </span>
        <h1 className='text-[45px] font-bold block 1151px:text-[30px] text-primary2 1151px:text-center'>
          {nombres}&nbsp;{apellidos}
        </h1>
        <h2 className='mb-10 font-bold text-lg'>{tituloProfesional}</h2>
        <ProfPic
          foto={foto}
          styles={{
            container: '1151px:block hidden mb-[1rem] w-[10.5rem] h-[10.5rem]'
          }}
        />
        <span className='text-[22px] font-bold mb-[38px] block 1151px:mb-[20px]'>
          Sobre mi
        </span>
        <div className='relative mb-[48px]'>
          <div
            className='max-h-[113px] max-w-[690px] leading-[30px] text-[18px] line-clamp-[4] mb-[1rem] 1151px:text-[14px] 1151px:leading-[20px] 1151px:text-center'
            dangerouslySetInnerHTML={{ __html: descripcion }}
          />
          {show && (
            <button
              className='hover:underline absolute bottom-0 translate-y-[150%] left-0'
              onClick={() => setShowPopup(true)}
            >
              Ver más
            </button>
          )}
        </div>
        <ul className='justify-evenly w-[100%] hidden 1151px:flex mb-[.8rem]'>
          <Social icon={faLinkedin} label='Linkedin' />
          <Social icon={faFacebook} label='Facebook' />
          <Social icon={faYoutube} label='Youtube' />
        </ul>
        <div className='flex gap-[.8rem] w-[100%]'>
          <Box
            styles={{ container: 'flex-[1.3]' }}
            num={totalCursos < 10 ? `0${totalCursos}` : totalCursos}
            img={{
              src: '/img/prof1.webp',
              alt: 'icono de youtube',
              width: 22,
              height: 29
            }}
            label={
              <>
                <span className='mob:hidden'>Cursos que enseña</span>
                <span className='hidden mob:block'>Cursos</span>
              </>
            }
          />
          <Box
            styles={{ container: 'flex-[1.5]' }}
            num={totalAlumnos}
            img={{
              src: '/img/prof2.webp',
              alt: 'icono de alumnos',
              width: 32,
              height: 23
            }}
            label={
              <>
                <span className='mob:hidden'>Alumnos Capacitados</span>
                <span className='hidden mob:block'>Alumnos</span>
              </>
            }
          />
          <Box
            styles={{ container: 'flex-[.7]' }}
            num={<>{calificación}/5</>}
            img={{
              src: '/img/prof3.webp',
              alt: 'icono de estrella',
              width: 27,
              height: 26
            }}
            label='Calificación'
          />
        </div>
      </section>
    </>
  )
}

function SobreMi ({ content }:{content:ReactNode}) {
  return (
    <div className='w-[50rem] max-w-[100%] p-[1rem] bg-[#fff] '>
      <span className='font-bold text-[1.5rem] block mb-[.5rem]'>
        Sobre mi:
      </span>
      {
        content
      }
    </div>
  )
}
