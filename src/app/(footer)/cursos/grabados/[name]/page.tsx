
import { Header, Contenido, ComponentWhats, ComponentTestimonios, ComponentVacante, HeaderFound } from '@/old-components/ServiciosName'
import { InversionYFormasDePago, Certificado, Teachers, NuestraPropuesta } from '@/old-components/ProgramLanding'
import WhatssAppLink from '@/old-components/WhatssAppLink/WhatssAppLink'
import { ProgramContext } from '@/context/ProgramContext'
import getRequest from '@/helpers/getRequest'
import cursos from '@/interfaces/cursos'
export default async function CursoGrabado ({ params }: any) {
  const { name } = params
  const { res: curso } = await getRequest('grabadosCurso', name)
  const { sesiones, asesores, titulo, tipo, etiqueta } = curso as cursos
  return (
    <ProgramContext program={curso} isConvenio={false}>
      <WhatssAppLink asesores={asesores} titulo={titulo} tipo_clase='curso asincrónico' url={`https://desarrolloglobal.pe/${tipo}s/grabados/${etiqueta}`} />
      {
        curso.tipo_curso === 'otro' ? (<HeaderFound curso={curso} />) : (
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
