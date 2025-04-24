'use client'

import sliderOptions from '@/helpers/sliderOptions'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Entidad } from './components/Entidad'
import entidades from './helpers/entidades'

export const EntidadesQueConfiarion = () => {
  return (
    <div className='w-[1364px] max-w-[100%] py-[60px] flex flex-col items-center rounded-[1rem] px-[1rem] mb-[129px] 560px:mb-[80px]'>
      <h2 className='text-[1.7rem] text-slate-900 text-center mob:leading-[1.5rem] mb-[15px]'>
        Entidades que confiaron en nosotros
      </h2>
      <p className='text-neutral-700 mb-[2rem] text-center'>
        Únete a las de las 120 entidades que confiaron en nosotros
      </p>
      <div className='w-full px-[1rem]'>
        <Slider
          {...sliderOptions}
          slidesToShow={3}
          slidesToScroll={3}
          responsive={[
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]}
        >
          {entidades.map((ent, pos) => (
            <Entidad key={pos} {...ent} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
