'use client'

import { programContext } from '@/context/ProgramContext'
import useAcordeon from '@/hooks/useAcordeon'
import programData from '@/types/programData'
import Image from 'next/image'
import { ReactNode, useContext } from 'react'
import { AcrodeonCursos } from './AcrodeonCursos'

export const Contenido = ({ data }: { data: any }) => {
  const context = useContext(programContext)
  const [abrirSub, alturaMaxima, contenidoRef, handleAbrirSub] = useAcordeon()

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { banner, tipo, objectivos, dirigido, objetivos_curso, tipo_clase } = program as programData

  function renderingAccordion (tipo: string): ReactNode {
    if (tipo === 'curso') {
      return (
        <>
          <span className='hidden'>{alturaMaxima}</span>
          <AcrodeonCursos data={data} />
        </>
      )
    }
    return data?.map((dat: any) =>
      (
        <AcrodeonCursos data={dat} key={dat.id} />
      ))
  }

  return (
    <section className='px-[1rem] 900px:pt-[38rem]'>
      <article className='container mx-auto pt-[4rem] 900px:pt-[6rem]'>
        <div className='w-full lg:w-[70%] xl:W-[70%] 2xl:w-[70%] lg:px-10 xl:px-10 2xl:px-10 grid gap-5'>
          {banner && (
            <Image
              src={banner}
              width='856'
              height='55555'
              alt='SIAF'
              className='mx-auto w-full rounded-md h-[initial]'
            />
          )}

          <div className='w-[100%]'>
            <button
              className='bg-[#f4f5f7] shadow-lg rounded-t-lg px-10 py-5 font-bold text-[#003399] text-xl w-full flex items-center justify-between'
              onClick={handleAbrirSub}
            >
              <span className='block overflow-hidden text-left whitespace-nowrap text-ellipsis'>Objetivo</span>
              <span className=' leading-[1.5rem] font-bold'>{abrirSub ? '+' : '-'}</span>
            </button>
            <section
              ref={contenidoRef} style={{ height: !abrirSub ? 'auto' : 0 }}
              className='overflow-hidden transition-all duration-200 h-fit w-[100%]'
            >
              <div className='px-10 py-5 text-justify list-disc rounded-b-lg shadow-lg '>
                <div className='listing-container' dangerouslySetInnerHTML={{ __html: objetivos_curso }} />
              </div>
            </section>
          </div>

          <div className='w-[100%] '>
            <button
              className='bg-[#f4f5f7] shadow-lg rounded-t-lg px-10 py-5 font-bold text-[#003399] text-xl w-full flex items-center justify-between'
              onClick={handleAbrirSub}
            >
              <span className='block overflow-hidden text-left whitespace-nowrap text-ellipsis'>Dirigido a</span>
              <span className=' leading-[1.5rem] font-bold'>{abrirSub ? '+' : '-'}</span>
            </button>
            <section
              ref={contenidoRef} style={{ height: !abrirSub ? 'auto' : 0 }}
              className='overflow-hidden transition-all duration-200 h-fit w-[100%]'
            >
              <div className='px-10 py-5 text-justify rounded-b-lg shadow-lg'>
                {dirigido.split('\n').map((l, index) => (
                  <span key={index}>{l}<br/><br/> </span>
                ))}
              </div>
            </section>
          </div>

          <h2 className='font-bold text-center text-[#0D31A7] text-[40px] mt-5' id='Temario'>
            Contenido Temático
          </h2>

          {
            tipo_clase !== 'GRABADO' && (
              <div className='w-[100%] flex justify-center'>
                {objectivos && (
                  <a
                    href={objectivos}
                    target='_blank'
                    className='bg-[#FF6F51] w-full flex justify-center p-2.5 rounded-lg text-white gap-2 font-bold text-lg items-center'
                    rel='noreferrer'
                  >
                    <svg
                      className='w-6 h-6'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      fill='currentColor'
                    >
                      <path
                        d='M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z'
                      />
                    </svg>
                    DESCARGAR TEMARIO (PDF)
                  </a>
                )}
              </div>
            )
          }

          <div className='flex flex-col gap-[1rem]'>
            {renderingAccordion(tipo)}
          </div>

        </div>
      </article>
    </section>
  )
}
