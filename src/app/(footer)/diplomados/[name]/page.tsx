import { ComponentCapacitarte, ComponentTestimonios, ComponentVacante, ComponentWhats, Contenido, Header, HeaderFound } from '@/components/ServiciosName'
import getRequest from '@/helpers/getRequest'
import { Metadata } from 'next'
import getMetadata from '@/helpers/getMetadata'
import { ProgramContext } from '@/context/ProgramContext'
import diplomados from '@/interfaces/diplomados'
import WhatssAppLink from '@/components/WhatssAppLink/WhatssAppLink'
import { InversionYFormasDePago, Certificado, Teachers } from '@/components/ProgramLanding'
import { notFound } from 'next/navigation'

export async function generateMetadata ({ params }: any): Promise<Metadata> {
  return await getMetadata(params, 'diplomados')
}

export default async function DiplomadosNombre ({ params }: any) {
  const { name } = params
  const { res: diplomados } = await getRequest('diplomados', name)
  const { cursos, asesores, titulo, tipo, etiqueta } = diplomados as diplomados
  if (diplomados === 'ERROR 02: $Id de Disploma no existe') { notFound() }

  return (
    <ProgramContext
      program={diplomados}
      isConvenio={false}
    >
      <WhatssAppLink asesores={asesores} titulo={titulo.replace('Diploma', 'Diplomado')} tipo_clase='diplomado' url={`https://desarrolloglobal.pe/${tipo}s/${etiqueta}`} />
      {
        diplomados.tipo_curso === 'otro'
          ? (<HeaderFound curso={diplomados} />)
          : (
            <>
              <Header programa='diplomados' />
              <Contenido data={cursos} />
              <Certificado />
              <Teachers />
              <ComponentCapacitarte />
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
