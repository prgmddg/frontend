'use client'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderOptions from '@/helpers/sliderOptions'
import { useContext, useState } from 'react'
import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'
import { MyPopUp } from '../MyPopUp/MyPopUp'
import { CustomArrow } from '../CustomArrow/CustomArrow'

export const ComponentDocente = () => {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { profesores } = program as programData

  return (
    <section className='py-[1rem]' id='Profesores'>
      <article className='mx-auto container'>
        <div className='font-bold p-5 w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%]'>
          <p className='text-center text-4xl'>Profesores</p>
          <p className='text-center text-lg'>
            Profesionales con amplia experiencia en la Gestión Pública
          </p>
          <Slider
            {...sliderOptions}
            prevArrow={<CustomArrow inside direction='left' />}
            nextArrow={<CustomArrow inside direction='rite' />}
            slidesToShow={profesores.length < 3 ? profesores.length : 3}
            slidesToScroll={profesores.length < 3 ? profesores.length : 3}
            responsive={[
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: profesores.length < 2 ? 1 : 2,
                  slidesToScroll: profesores.length < 2 ? 1 : 2
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]}
          >
            {profesores.map((profesor, pos) => (
              <Card key={pos} profesor={profesor} />
            ))}
          </Slider>
          <p className='text-rojo font-bold text-center text-xl mt-10'>
            *Segun disponibilidad de los docentes
          </p>
        </div>
      </article>
    </section>
  )
}

function Card ({ profesor }:any) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <div className='w-[240px] shadow-lg mx-auto my-5 rounded-[.5rem] overflow-hidden'>
        <div className='bg-white'>
          <div
            className='w-[240px] h-[240px] relative overflow-hidden'
          >
            <Image src={profesor.avatar} height={300} width={240} className='h-[initial] w-[100%] absolute left-[0px] top-[50%] translate-y-[-50%]' alt='imagen de profesor' />
          </div>
          <div className='p-3 w-full grid place-items-cente'>
            <p
              className='text-center font-medium w-[100%] overflow-hidden whitespace-nowrap text-ellipsis'
              title={profesor.nombre}
            >
              {profesor.nombre}
            </p>
            <p
              className='text-center w-[100%] overflow-hidden whitespace-nowrap text-ellipsis'
              title={profesor.profesion}
            >
              {profesor.profesion}
            </p>
            <button
              onClick={() => setShow(true)}
              className='px-7 font-semibold py-2 bg-blue-500 text-white rounded-md mx-auto mt-3 swing'
            >
              Ver CV
            </button>
          </div>
        </div>
      </div>
      <MyPopUp
        setIsOpen={setShow}
        isOpen={show}
        popUp={
          <div className='p-[1.5rem] bg-white flex gap-[2rem] max-w-[60rem] 800px:flex-col 800px:items-center'>
            <div className='relative w-[310px]'>
              <Image width={350} height={350} alt='avatar de profesor' className='w-[100%]' src={profesor.avatar} />
            </div>
            <section className='flex flex-col flex-1 800px:items-center'>
              <span className='text-[1.5rem] font-bold'>
                {profesor.nombre}
              </span>
              <span className='font-bold'>{profesor.profesion}</span>
              <div
                className='mt-[1rem]'
                dangerouslySetInnerHTML={{ __html: profesor.descripcion }}
              />
            </section>
          </div>
        }
      />
    </>
  )
}
