import { Contenido, Header, ComponentWhats, ComponentTestimonios, ComponentVacante, HeaderFound } from '@/old-components/ServiciosName'
import { InversionYFormasDePago, Certificado, Teachers, NuestraPropuesta } from '@/old-components/ProgramLanding'
import getRequest from '@/helpers/getRequest'
import diplomas from '@/interfaces/diplomas'
import { ProgramContext } from '@/context/ProgramContext'
import WhatssAppLink from '@/old-components/WhatssAppLink/WhatssAppLink'

export default async function DriplomasName ({ params }: any) {
  const { name } = params
  const { res: diplomas } = await getRequest('grabadosDiplomas', name)
  const { cursos, asesores, titulo, tipo, etiqueta } = diplomas as diplomas
  return (
    <ProgramContext
      program={diplomas}
      isConvenio={false}
    >
      {
        diplomas.tipo_diploma === 'otro'? (<HeaderFound curso={diplomas} />) : (
          <>
            <WhatssAppLink asesores={asesores} titulo={titulo} url={`https://desarrolloglobal.pe/${tipo}s/grabados/${etiqueta}`} tipo_clase='diploma asincrónico' />
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
