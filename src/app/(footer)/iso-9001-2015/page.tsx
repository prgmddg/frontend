'use client'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState, ReactNode, useEffect } from 'react'

export default function page () {
  const container = 'w-[1364px] max-w-[100%] mx-auto'

  return (
    <>
      <div
        className='h-[1000px] px-[30px] flex justify-center items-center 1321px:h-[initial] 1321px:py-[3rem]'
        style={{
          backgroundImage: 'url(/web/bg-banner-carousel-3.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <article
          className={`${container} flex 1321px:flex-col 1321px:gap-[2rem]`}
        >
          <section className='w-[746px] text-white 1321px:w-[100%]'>
            <div className='bg-myYellow pt-[9px] pb-[10px] pl-[22px] pr-[32px] rounded-[9px] text-[18px] font-bold inline-block mb-[13px]'>
              Certificación ISO 9001 - 2015
            </div>
            <h1 className='text-[64px] text-white font-extrabold leading-[73px] block mb-[16px] mob:text-[34px] mob:leading-[40px]'>
              Certificación<br />ISO 9001:2015
            </h1>
            <p className='text-[22px] leading-[36px] block mb-[33px] mob:text-[16px] mob:leading-[20px]'>
              En Centro de Capacitación y Desarrollo Global, nos enorgullece
              contar con la prestigiosa certificación ISO 9001:2015, un
              distintivo de calidad que respalda nuestro compromiso
              inquebrantable con la excelencia en la educación y formación en
              gestión gubernamental.
            </p>
            <div className='flex flex-wrap justify-around items-center gap-2 bg-white rounded-xl p-4  w-full max-w-[746px]'>
              <Image
                src='/logoweb.webp'
                width={0}
                height={0}
                className='w-full h-full aspect-auto max-w-[350px] max-h-[90px]'
                alt='Logo'
              />
              <Image
                src='/ISO-2025.webp'
                width={0}
                height={0}
                className='w-full h-auto aspect-auto max-w-[300px]'
                alt='logos de desarrollo global e ISO-9001'
              />
            </div>
            <p className='text-[22px] mob:text-[16px] mob:leading-[20px]'>
              Nuestra empresa cuenta con la &quot;Certificación de calidad&quot; ISO
              9001-2015
            </p>
          </section>
          <section className='flex justify-end flex-1 1321px:justify-center'>
            <Image
              src='/img/iso2.webp'
              alt='imagen de certificacion ISO-9001'
              width={480}
              height={681}
            />
          </section>
        </article>
      </div>
      <div className='py-[86px] px-[30px]'>
        <article className={`${container} flex flex-col gap-[21px]`}>
          <Accordion
            isOpen
            title='¿Qué significa la Certificación ISO 9001:2015 para Desarrollo Global?'
            description='En Centro de Capacitación y Desarrollo Global, la Certificación ISO 9001:2015 es un activo invaluable que se traduce en beneficios concretos para usted como cliente. Esta certificación es una promesa de calidad y excelencia en la educación en gestión pública y privada que ofrecemos.'
          />
          <Accordion
            title='¿Qué Implica la Certificación ISO 9001:2015 para Usted como Cliente?'
            description={
              <div className='flex flex-col gap-[2rem]'>
                <Text
                  bold='1. Educación de Calidad Garantizada:'
                  text='La Certificación ISO 9001:2015 respalda la calidad de
      nuestros programas de capacitación en Gestión Pública. Esto
      significa que al optar por formarse con nosotros, puede
      confiar plenamente en recibir una educación de primera clase
      que enriquecerá su desarrollo profesional.'
                />
                <Text
                  bold='2. Enfocados en Sus Necesidades:'
                  text='Como organización certificada, priorizamos sus necesidades en cada aspecto de nuestros servicios. Diseñamos nuestros programas pensando en sus desafíos reales, ofreciendo soluciones prácticas y efectivas para el desarrollo de sus habilidades profesionales. '
                />
                <Text
                  bold='3. Mejora Continua para Su Beneficio:'
                  text='La Certificación ISO 9001:2015 nos impulsa constantemente a mejorar. Esto significa que cada vez que recurra a nosotros para capacitarse, encontrará programas actualizados y métodos de enseñanza optimizados que potenciarán su crecimiento. '
                />
                <Text
                  bold='4. Confianza en su Elección:'
                  text='Al optar por Desarrollo Global, está eligiendo una institución que cumple con los estándares de calidad más elevados y se somete a evaluaciones rigurosas. Esto le proporciona la confianza de haber tomado una decisión acertada para su desarrollo profesional.'
                />
                <Text
                  bold='5. Atención al Cliente Priorizada:'
                  text='Nuestra Certificación ISO 9001:2015 respalda nuestro enfoque en la satisfacción del cliente. Estamos comprometidos a brindarle una atención al cliente excepcional, atendiendo sus consultas, necesidades y sugerencias de manera proactiva y eficiente.'
                />
              </div>
            }
          />
          <Accordion
            title='Posicionamiento Destacado en su Carrera:'
            description={
              <p>
                La capacitación en una empresa certificada fortalece su posición en el mercado laboral. La Certificación ISO 9001:2015 de Desarrollo Global es ampliamente reconocida y respetada, lo que puede abrirle puertas y oportunidades en su trayectoria profesional.<br /><br />
                la Certificación ISO 9001:2015 en Desarrollo Global es su garantía de calidad y atención al cliente en su experiencia educativa. Le asegura una formación de alto nivel, programas diseñados para satisfacer sus necesidades, y la certeza de que está invirtiendo en su desarrollo profesional de manera efectiva. Su satisfacción y éxito son nuestra prioridad, respaldados por nuestro compromiso con la calidad certificada y la atención al cliente excepcional.
              </p>
            }
          />
        </article>
      </div>
    </>
  )
}

function Text ({ bold, text }:{bold:string, text:string}) {
  return (
    <div>
      <span className='font-bold'>{bold}</span>
      <p>{text}</p>
    </div>
  )
}

function Accordion ({ title, description, isOpen = false }:{title:string, description:ReactNode, isOpen?:boolean}) {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (!isOpen) return
    setShow(true)
  }, [isOpen])

  return (
    <div className='rounded-[9px] border-[1px] border-[#707070] overflow-hidden'>
      <button
        className={`text-[24px] bg-[#F5F5F5] py-[37px] rounded-[0px_0px_9px_9px] border-b-[1px] px-[1rem] relative flex justify-center items-center w-[100%] font-bold 1067px:text-[16px] 800px:justify-between 800px:gap-[.5rem] ${show ? 'border-b-[#707070]' : 'border-b-[transparent]'}`}
        onClick={() => setShow((prev) => !prev)}
      >
        <span>
          {
            title
          }
        </span>
        <FontAwesomeIcon
          icon={faChevronDown}
          size='lg'
          className='absolute right-[61px] 800px:relative 800px:right-[initial]'
        />
      </button>
      {show && (
        <div className='flex justify-center items-center py-[58px] w-[100%] px-[1rem] text-[22px] leading-[35px]'>
          <div className='max-w-[912px] block 800px:text-[14px] 800px:leading-[20px]'>
            {
              description
            }
          </div>
        </div>
      )}
    </div>
  )
}
