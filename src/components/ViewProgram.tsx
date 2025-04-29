'use client'

import { ProgramContext } from '@/context/ProgramContext'
import { useOneCourse } from '@/hooks/useCourse'
import { Certificado, InversionYFormasDePago, NuestraPropuesta, Teachers } from '@/old-components/ProgramLanding'
import { ComponentTestimonios, ComponentVacante, ComponentWhats, Contenido, Header, HeaderFound } from '@/old-components/ServiciosName'
import WhatssAppLink from '@/old-components/WhatssAppLink/WhatssAppLink'
import { notFound } from 'next/navigation'

export default function ViewProgram ({ name }: { name: string }) {
  const { data, isLoading } = useOneCourse({ type: 'envivo', tag: name })
  if (isLoading) return (
    <div className='flex items-center justify-center w-full h-screen text-lg font-semibold'>Cargando...</div>
  )

  if (!data) return notFound()

  return (
    <ProgramContext program={data} isConvenio={false}>
      <WhatssAppLink asesores={data.asesores} titulo={data.titulo} tipo_clase={`curso ${data.tipo_clase === 'GRABADOS' ? 'asincrónico' : ''}`} url={`https://desarrolloglobal.pe/cursos/${name}`} />
      {
        data.tipo_curso === 'otro'
          ? (<HeaderFound curso={data} />)
          : (
            <>
              <Header programa='curso' />
              <Contenido data={data.sesiones} />
              <Certificado />
              <Teachers />
              <NuestraPropuesta />
              <InversionYFormasDePago />
              <ComponentWhats />
              <ComponentTestimonios />
              <ComponentVacante />
        
            </>
          )
      }
        
    </ProgramContext>
  )
}