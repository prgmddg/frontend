'use client'

import Image from 'next/image'
import { Calificaciones } from './components/Calificaciones'
import Slider from 'react-slick'
import { useContext, useState } from 'react'
import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'
import sliderOptions from '@/helpers/sliderOptions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export const ComponentTestimonios = () => {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { testimonios } = program as programData

  return (
    <section className='bg-[#E5F1FF] py-20'>
      <article className='container mx-auto'>
        <div className='w-full lg:w-[70%] space-y-3 px-5'>
          <p className='font-bold text-2xl lg:text-5xl text-center text-mybluDesarrollo'>Lo que nuestros alumnos dicen</p>
          <div className='flex items-center justify-center gap-5 py-3'>
            <Image src='/img/feedback.webp' width={50} height={50} alt='Desarrollo Global - Testimonios' />
            <p className='text-center text-mybluDesarrollo text-2xl'>Alumnos satisfechos</p>
          </div>

          <Calificaciones tipo='testi' />
          <br />
          <Slider
            {...sliderOptions}
            slidesToShow={testimonios?.length < 3 ? testimonios?.length : 3}
            slidesToScroll={testimonios?.length < 3 ? testimonios?.length : 3}
            responsive={[
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: testimonios?.length < 2 ? 1 : 2,
                  slidesToScroll: testimonios?.length < 2 ? 1 : 2
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
            {
              testimonios?.map((testimonio, pos) =>
                (
                  <Box key={pos} {...testimonio} />
                ))
            }
          </Slider>
        </div>
      </article>
    </section>
  )
}

interface testimonio {
  usuario: string;
  avatar: string;
  registro: string;
  comentario: string;
}

function Box (props: testimonio) {
  const { usuario, comentario } = props
  const [vermas, setVerMas] = useState(true)
  return (
    <div>
      <div className='border-2 border-[#003399] rounded-lg w-[286px] p-5 mx-auto bg-white'>
        <FontAwesomeIcon icon={faQuoteLeft} className='text-[#C2D9FF] text-5xl' />
        <p className={`overflow-hidden transition-max-height duration-300 ease-in ${vermas ? 'h-[190px]' : 'h-auto'}`}>
          {
            comentario
          }
        </p>
        {
          comentario.length > 180 && (<button onClick={() => setVerMas(!vermas)} className='text-[#003399] underline font-bold mt-3'>Ver mas</button>)
        }
        <div className='text-[#003399]'>
          <p className='font-bold mt-2 text-sm'>
            {
              usuario
            }
          </p>
          <p className='mt-1'>Servicio Publico</p>
        </div>
      </div>
    </div>
  )
}
