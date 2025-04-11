'use client'

import React, { useContext } from 'react'
import Image from 'next/image'
import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'

export function Certificado () {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { values } = context
  const { program } = values
  const { tipo, certificados, tipo_clase } = values.program as programData

  const type = tipo.split('')

  return (
    <div className='px-[1rem] py-[59px]' id='Certificado'>
      <article className='w-[1283px] mx-auto max-w-[100%] flex justify-start'>
        <section className='w-[842px] max-w-[100%]'>
          <h2 className='text-[#0D31A7] text-[40px] text-center mb-[25px] block mob:text-[30px]'>
            Certifícate y Mejora <br />tus Oportunidades
          </h2>
          <p className='text-[18px] mb-[37px] mob:text-[16px] leading-[30px] font-medium mx-auto mob:mb-[22px] text-left'>
            Obtén tu certificación acreditada con {certificados} horas académicas, válida tanto para el sector público como para el privado. Respaldado por la Normativa N° 141-2016-SERVIR-PE, garantizamos reconocimiento en el mercado laboral, ¡Inicia tu camino hacia el éxito profesional hoy mismo!
          </p>

          <div className='grid gap-4'>
            <div className='border shadow-lg rounded-xl px-8 py-8 flex items-center gap-2 relative border-myBlue3 bg-[#8BD8FF]/[0.15]'>
              <div className='-top-4 right-0 left-0 absolute'>
                <p className='max-w-max mx-auto md:ml-auto md:mr-20 bg-myRed1 text-white rounded-xl px-10 py-1 font-semibold'>Mas Solicitado</p>
              </div>
              <div className='flex-1 grid gap-4'>
                <div>
                  <p className='text-3xl font-bold text-myBlue3'>{type[0].toUpperCase() + type.splice(1).join('').toLowerCase()} Especilizado</p>
                  <p className='text-lg font-semibold text-myBlue3'>Otorgado por: Escuela Desarrollo Global</p>
                </div>

                <div>
                  <p className='font-semibold'>Derecho de trámite:&nbsp;<span className='text-myRed1 font-bold line-through decoration-2'>S/. 77.00</span></p>
                  <p className='text-myBlue3'>Precio incluido en la inversion del programa</p>
                </div>

                <div className='text-myBlue3'>
                  <div className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      fill='green'
                    >
                      <path
                        d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                      />
                    </svg>
                    {program.tipo === 'curso' ? 'Certificado' : 'Diploma'} físico y digital
                  </div>
                  <div className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      fill='currentColor'
                    >
                      <path
                        d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'
                      />
                    </svg>
                    Duración tramite: <span className='font-semibold'>24 horas</span>
                  </div>
                </div>

              </div>
              <Image
                src={program.tipo === 'curso' ? '/curso-certificado.webp' : '/diploma-certificado.webp'}
                width='768'
                height='465'
                alt='certificado'
                className=' mx-auto hidden w-[260px] h-[170px] md:block lg:w-[260px] lg:h-[170px] mt-10'
              />
            </div>

            {tipo_clase !== 'GRABADO' && (
              <div className='border shadow-lg rounded-xl px-8 py-8 flex items-center gap-2'>
                <div className='flex-1 grid gap-4'>
                  <div>
                    <p className='text-3xl font-bold text-myBlue3'>Certificación Opcional</p>
                    <p className='text-lg font-semibold text-myBlue3'>otorgado por: (UNMSM) - CERSEU - FCE</p>
                  </div>

                  <div>
                    <p className='font-semibold'>Derecho de trámite:
                      &nbsp;<span className='text-myRed1 font-bold'>S/. {(tipo === 'curso') ? 75 : Number(certificados) > 240 ? 200 : 100}.00</span>
                    </p>
                  </div>

                  <div className='text-myBlue3'>
                    <div className='flex items-center gap-2'>
                      <svg
                        className='w-4 h-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        fill='green'
                      >
                        <path
                          d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                        />
                      </svg>
                      {program.tipo === 'curso' ? 'Certificado' : 'Diploma'} físico
                    </div>
                    <div className='flex items-center gap-2'>
                      <svg
                        className='w-4 h-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        fill='currentColor'
                      >
                        <path
                          d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'
                        />
                      </svg>
                      Duración tramite: <span className='font-semibold'>20 días hábiles</span>
                    </div>
                  </div>

                </div>
                <Image
                  src={program.tipo === 'curso' ? '/curso-certificado-san-marcos.webp' : '/diploma-certificado-san-marcos.webp'}
                  width='768'
                  height='465'
                  alt='certificado'
                  className='mx-auto hidden w-[260px] h-[160px] md:block lg:w-[260px] lg:h-[160px]'
                />
              </div>
            )}

            <p className='text-myRed1 font-semibold'>(*) Nota: {tipo_clase !== 'GRABADO' ? 'En ambos casos, ' : ''} el envío no esta incluido</p>
          </div>
        </section>
      </article>
    </div>
  )
}
