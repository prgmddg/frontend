'use client'

import { ProgramContext } from '@/context/ProgramContext'
import { useOneDiploma } from '@/hooks/useDiploma'
import { Certificado, InversionYFormasDePago, NuestraPropuesta, Teachers } from '@/old-components/ProgramLanding'
import { ComponentTestimonios, ComponentVacante, ComponentWhats, Contenido, Header, HeaderFound } from '@/old-components/ServiciosName'
import WhatssAppLink from '@/old-components/WhatssAppLink/WhatssAppLink'
import { notFound } from 'next/navigation'

export default function ViewProgramDiploma ({ name }: { name: string }) {
  const { data, isLoading } = useOneDiploma({ type: 'envivo', tag: name })
  if (isLoading) return (
    <div className='flex items-center justify-center w-full h-screen text-lg font-semibold'>Cargando...</div>
  )

  if (!data) return notFound()

  return (
    <ProgramContext
      program={data}
      isConvenio={false}
    >
      <WhatssAppLink asesores={data.asesores} titulo={data.titulo} url={`https://desarrolloglobal.pe/${data.tipo}s/${data.etiqueta}`} tipo_clase='diploma' />
      {
        data.tipo_diploma === 'otro'
          ? (<HeaderFound curso={data} />)
          : (
            <>
              <Header programa='diplomas' />
              <Contenido data={data.cursos} />
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