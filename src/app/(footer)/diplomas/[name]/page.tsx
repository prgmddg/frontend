import { Contenido, Header, ComponentWhats, ComponentTestimonios, ComponentVacante, HeaderFound } from '@/old-components/ServiciosName'
import getRequest from '@/helpers/getRequest'
import getMetadata from '@/helpers/getMetadata'
import { Metadata } from 'next'
import { ProgramContext } from '@/context/ProgramContext'
import diplomas from '@/interfaces/diplomas'
import WhatssAppLink from '@/old-components/WhatssAppLink/WhatssAppLink'
import { InversionYFormasDePago, Certificado, Teachers, NuestraPropuesta } from '@/old-components/ProgramLanding'
import { notFound } from 'next/navigation'

export async function generateMetadata ({ params }: any): Promise<Metadata> {
  const { name } = await params
  return await getMetadata({ name }, 'diplomas')
}

export default async function DriplomasName ({ params }: any) {
  const { name } = await params
  const { res: diplomas } = await getRequest('diplomas', name)

  const { cursos, asesores, titulo, tipo, etiqueta } = diplomas as diplomas
  if (diplomas === 'ERROR 02: $Id de Disploma no existe') { notFound() }

  return (
    <ProgramContext
      program={diplomas}
      isConvenio={false}
    >
      <WhatssAppLink asesores={asesores} titulo={titulo} url={`https://desarrolloglobal.pe/${tipo}s/${etiqueta}`} tipo_clase='diploma' />
      {
        diplomas.tipo_diploma === 'otro'
          ? (<HeaderFound curso={diplomas} />)
          : (
            <>
              <Header programa='diplomas' />
              <Contenido data={cursos} />
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
