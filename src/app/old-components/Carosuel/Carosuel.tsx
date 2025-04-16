'use client'

import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderOptions from '@/helpers/sliderOptions'
import Slider from 'react-slick'
import { CustomArrow } from '@/old-components/CustomArrow/CustomArrow'
import Icon from '@/components/Icon'

export const Carosuel = () => {  
  return (
    <Slider
      {...sliderOptions}
      infinite={true}
      prevArrow={<CustomArrow direction='left' inside big />}
      nextArrow={<CustomArrow direction='rite' inside big />}
      dotsClass='slick-my-dots'
      customPaging={() => {
        return (
          <button className='w-[2.5rem] h-[1.5rem]'>
            <span className='h-[2px] bg-slate-400 block' />
          </button>
        )
      }}
    >
      <div>
        <picture>
          <img src='/web/banner-carousel-1.webp' className='w-full h-full max-h-[700px] !hidden lg:!block' alt='Banner 1' />
        </picture>
        <picture>
          <img src='/web/banner-carousel-1-mob.webp' className='w-full h-full max-h-[700px] lg:!hidden !block' alt='Banner 2' />
        </picture>
      </div>
      <div>
        <picture>
          <img src='/web/banner-carousel-2.webp' className='w-full h-full max-h-[700px] lg:!block !hidden' alt='Banner 2' />
        </picture>
        <picture>
          <img src='/web/banner-carousel-2-mob.webp' className='w-full h-full max-h-[700px] lg:!hidden !block' alt='Banner 1' />
        </picture>
      </div>
      <div>
        <div
          className='w-full aspect-[1009/745] lg:aspect-[1836/846] max-h-[700px] flex items-end justify-center'
          style={{
            backgroundImage: 'url(/web/bg-banner-carousel-3.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          { <div
            className='flex header-container justify-between gap-[1rem]'
          >
            <section className='max-w-[546px] flex-col justify-center flex w-full mx-auto p-4'>
              <div
                className='mx-auto w-[100%] mob:mb-[27px] 560px:h-[69px] 560px:w-[100%] 1200px:w-fit bg-white rounded-[.5rem] h-[98px] flex items-center justify-between gap-[33px] 560px:gap-0 mb-[31px] px-[1rem] 560px:justify-between'
              >
                <picture>
                  <img className='w-full max-w-[200px] aspect-auto' src='/web/logo.webp' width={0} height={0} alt='logo' />
                </picture>
                <picture>
                  <img className='w-full max-w-[200px] aspect-auto' src='/web/logo-iso.webp' width={0} height={0} alt='logo' />
                </picture>
              </div>
              <h1 className='text-2xl lg:text-5xl font-bold text-white mb-[33px] w-fit'>
                <span className='text-myYellow'>Capacitación</span>&nbsp; para
                Funcionarios y Servidores Públicos
              </h1>
              <div className='rounded-[.5rem] h-[60px] 600px:w-[100%] 1200px:w-fit w-[100%] 600px:px-[16px] flex justify-between gap-[11px] items-center bg-white px-[1rem] mx-auto'>
                <Icon className='w-10 h-10' name='certificate' />
                
                <p className='font-medium text-[18px] 600px:hidden'>
                  Certifícate y mejora tus oportunidades laborales
                </p>
                <span className='600px:block hidden leading-[18px] text-center'>
                  Certifícate y mejora tus oportunidades laborales
                </span>
                <span className='text-[45px] 600px:block hidden'>🤝</span>
              </div>
            </section>
            <section className='flex items-end 1200px:hidden'>
              <picture>
                <img
                  className='w-full aspect-auto'
                  src='/web/group-people.webp'
                  height={0}
                  width={0}
                  alt='grupo de ejecutivos sonriendo hacia al frente' />
              </picture>
            </section>
          </div>
          }
        </div>
      </div>
    </Slider>
  )
}
