import { MyBlock } from '@/components/MyBlock/MyBlock'
import React, { ReactNode } from 'react'
import Image from 'next/image'

export const AcercaDeNosotros = () => {
  return (
    <MyBlock
      header={{
        h: 'Acerca de Nosotros',
        p: 'Conoce nuestra misión, visión y valores.'
      }}
      styles={{ p: 'font-medium' }}
    >
      <article className='w-[972px] just-stuff !mt-[3rem]'>
        <section className='flex items-center border-[1px] border-borderGrey1 overflow-hidden rounded-[.5rem] flex-wrap justify-center nosotros:flex-col'>
          <div className='w-fit px-[4rem] nosotros:p-[2rem]'>
            <Image
              src='/img/logo-vertical-normal.webp'
              height={200}
              width={200}
              alt='logo de desarrollo global'
            />
          </div>
          <p className='bg-myGrey block p-[48px] text-left rounded-[.5rem] flex-1'>
            Centro de Capacitación y Desarrollo Global EIRL, RUC:20544396791, es una empresa educativa que brinda desarrollo gerencial a servidores civiles, técnicos y profesionales en gestión gubernamental. Desde 2011, ofrecemos capacitaciones en línea y presenciales, como diplomas, cursos, seminarios, conferencias y talleres, con un enfoque en la calidad de servicio.
          </p>
        </section>
        <section className='flex gap-[1rem] flex-wrap mt-[3rem]'>
          <Box
            title='Misión'
            p='Desarrollar y promover las competencias profesionales de los funcionarios públicos y privados del Perú, mediante opciones formativas especializadas que fomentan valores éticos y responsabilidad social. Nuestra misión es ser un pilar fundamental en la construcción de una sociedad más capacitada y comprometida.'
          />
          <Box
            title='Visión'
            p='En el año 2024, Desarrollo Global se posicionará como una de las tres principales organizaciones de educación en gestión pública y negocios a nivel nacional. Nos esforzamos por contribuir activamente en la formación de profesionales comprometidos con el desarrollo sostenible de la sociedad, siendo reconocidos como líderes en la transformación y evolución constante de la educación.'
          />
          <Box
            title='Valores'
            p={
              <>
                Liderazgo<br />Innovación<br />Excelencia<br />
                Orientación al Servicio<br />Sostenibilidad
              </>
            }
          />
        </section>
      </article>
    </MyBlock>
  )
}

function Box ({ title, p }: { title: string, p: string | ReactNode }) {
  return (
    <div className='flex flex-1 items-start flex-col border-borderGrey1 border-[1px] pt-[1rem]'>
      <span className='rounded-[0_2rem_2rem_0] font-bold bg-myPurple2 text-[#fff] py-[.3rem] pl-[2rem] pr-[7rem] text-[28px]'>
        {title}
      </span>
      <p className='p-[24px] block text-left'>{p}</p>
    </div>
  )
}
