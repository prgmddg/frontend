'use client'

import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'
import Image from 'next/image'
import { useContext } from 'react'

export const ComponentCertificacion = () => {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { tipo } = program as programData

  return (
    <section className='bg-[#B8D7FE] py-[1.3rem]' id='Certificado'>
      <article className='container mx-auto'>
        <div className='w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%] p-5'>
          <p className='text-3xl font-bold mob:text-center'>
            Certificacion Desarrollo Global
          </p>
          <div className='bg-white rounded-md p-10 mt-10 shadow-lg font-bold mob:p-5 mob:text-center'>
            <p>👉 Válido para postular a convocatorias Públicas y Privadas</p>
            <p className='w-full '>
              Los Certificados son válidos y aceptados por instituciones
              públicas, de acuerdo a la Normativa Nº141-2016-SERVIR-PE.
            </p>
          </div>
          <div className='my-shadow w-fit mx-auto'>
            {tipo === 'curso' && (
              <Image
                src='/img/curdip.webp'
                width='768'
                height='465'
                alt='certificado'
                className='mx-auto mt-5'
              />
            )}
            {tipo !== 'curso' && (
              <Image
                src='/img/dipdip.webp'
                width='768'
                height='465'
                alt='diploma'
                className='mx-auto mt-5'
              />
            )}
          </div>
          <p className='block mt-[1rem] mob:text-[.8rem]'>
            Imagenes referenciales. <br />
            El certificado se emite en formato digital. <br />
            Certificado físico previa coordinación.
          </p>
        </div>
      </article>
    </section>
  )
}
