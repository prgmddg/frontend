import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'

export const Stripe = () => {
  return (
    <section className='px-[30px] 560px:py-[9px] 428px:px-[.8rem] bg-gradient-to-r from-[#05166e] to-[#3c4e8a] py-[1rem]'>
      <article className='flex header-container gap-[20px] 560px:gap-y-[7px] 560px:gap-x-[12px] flex-wrap 977px:grid 977px:grid-cols-2 428px:gap-x-[7px]'>
        <Box
          img={{
            src: '/13anios.webp',
            width: 0,
            height: 0,
            alt: `${13} años capacitando`
          }}
          classNameBox='bg-[#f2b200]'
          className='w-full aspect-auto'
        />

        <Box
          img={{
            src: '/img/stripe2.webp',
            width: 56,
            height: 68,
            alt: 'icono de escudo'
          }}
          className='mob:w-[30px]'
          content={
            <>
              <p className='text-[1.2rem] leading-[1.4rem] font-medium mob:text-[.6rem] 758px:text-[.8rem]'>
                Certificado de Calidad
              </p>
              <span className='font-bold text-[30px] mob:text-[14px] 758px:text-[18px]'>ISO 9001-2015</span>
            </>
          }
        />
        <Box
          img={{
            src: '/img/stripe3.webp',
            width: 66,
            height: 66,
            alt: 'icono de profesor dictando clases'
          }}
          className='mob:w-[30px]'
          content={
            <>
              <p className='font-bold text-[45px] leading-[3rem] mob:text-[14px] 758px:leading-[initial] 758px:text-[18px]'>+ 50 000</p>
              <span className='font-medium text-center mob:text-start mob:text-[.6rem] 758px:text-[.8rem]'>
                Alumnos Capacitados
              </span>
            </>
          }
        />
        <Box
          img={{
            src: '/img/stripe4.webp',
            width: 82,
            height: 61,
            alt: 'icono de laptop'
          }}
          className='mob:w-[40px]'
          content={
            <>
              <p className='text-[30px] font-bold mob:text-[14px] 758px:text-[18px]'>Plataforma</p>
              <span className='font-medium mob:text-[.6rem] 758px:text-[.8rem]'>De Clases Premium</span>
            </>
          }
        />
      </article>
    </section>
  )
}

interface props
{
  img:ImageProps
  content?:ReactNode|false
  className?:string
  classNameBox?: string
}

function Box ({ img, content = false, className, classNameBox }:props) {
  return (
    <div className={`rounded-[.5rem] 800px:px-[1rem] mob:gap-[3px] 758px:gap-[8px] mob:px-[.5rem] border-[2px] border-white flex h-[103px] flex-1 justify-center gap-[19px] items-center min-w-[298px] 977px:min-w-0 mob:min-h-[50px] mob:h-[65px] 977px:justify-start 977px:px-[1.5rem] ${classNameBox}`}>
      <>
        {
          !content && (
            <div className='flex items-center justify-center'>
              <Image {...img} alt={img.alt} className={className} />
            </div>
          )
        }
        {content && (
          <>
            <Image {...img} alt={img.alt} className='977px:hidden' />
            <div className='hidden 977px:flex 758px:w-[43px] 758px:min-w-[43px] 977px:w-[86px] 977px:min-w-[86px] justify-center'>
              <Image {...img} alt={img.alt} className={className} />
            </div>
            <section className='flex flex-col text-white mob:text-[1rem]'>{content}</section>
          </>
        )}
      </>
    </div>
  )
}
