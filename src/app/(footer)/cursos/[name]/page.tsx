import { Certificado, InversionYFormasDePago, NuestraPropuesta, Teachers } from '@/components/ProgramLanding'
import { ComponentTestimonios, ComponentVacante, ComponentWhats, Contenido, Header, HeaderFound } from '@/components/ServiciosName'
import WhatssAppLink from '@/components/WhatssAppLink/WhatssAppLink'
import { ProgramContext } from '@/context/ProgramContext'
import getMetadata from '@/helpers/getMetadata'
import getRequest from '@/helpers/getRequest'
import cursos from '@/interfaces/cursos'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { name } = await params
  return await getMetadata({ name }, 'cursos')
}

export default async function CursosNombre({ params }: any) {
  const { name } = await params
  const { res: curso } = await getRequest('cursos', name)
  const { sesiones, asesores, titulo, tipo, etiqueta, tipo_clase } = curso as cursos
  if (curso === 'ERROR 02: $Id de Curso no existe') { notFound() }

  return (
    <ProgramContext program={curso} isConvenio={false}>
      <WhatssAppLink asesores={asesores} titulo={titulo} tipo_clase={`curso ${tipo_clase === 'GRABADOS' ? 'asincrónico' : ''}`} url={`https://desarrolloglobal.pe/${tipo}s/${etiqueta}`} />
      {
        curso.tipo_curso === 'otro'
          ? (<HeaderFound curso={curso} />)
          : (
            <>
              <Header programa='curso' />
              <Contenido data={sesiones} />
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
