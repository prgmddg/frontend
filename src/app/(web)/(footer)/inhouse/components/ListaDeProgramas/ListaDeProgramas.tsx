import { MyBlock } from '@/old-components/MyBlock/MyBlock'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContentBrochure from '../ContentBroshure'

export const ListaDeProgramas = () => {
  const contents = [
    {
      title: 'GESTIÓN ADMINISTRATIVA Y DE COMPETENCIAS',
      content: [
        'Formulación de los Documentos de Gestión: ROF - MOF - CAP - MAPROS',
        'Asistentes de Gerencia y Altas Direcciones',
        'Redacción Moderna y Elaboración de Informes Técnicos',
        'Gestión moderna de documentos y archivos',
        'Calidad en el Servicio y la Atención al Cliente',
        'La secretaria en su Nuevo rol de Asistente de Gerencia',
        'Calidad de atención al ciudadano',
        'Prevención del hostigamiento y acoso sexual',
        'Gestión de Proyectos en el Sector Público (Nuevo)',
        'Gestión de Riesgos en la Administración Pública (Nuevo)'
      ]
    },
    {
      title: 'GESTIÓN LOGÍSTICA GUBERNAMENTAL',
      content: [
        'Gestión Logística y el Abastecimiento Público',
        'Gestión y Control Patrimonial de Bienes Estatales',
        'Administración de Almacenes',
        'Gestión de Bienes Patrimoniales',
        'Planificación Estratégica en la Logística Gubernamental (Nuevo)',
        'Gestión de Adquisiciones y Contrataciones Públicas (Nuevo)'
      ]
    },
    {
      title: 'FINANZAS PÚBLICAS',
      content: [
        'Planeamiento Estratégico',
        'Gestión Presupuestaria y Financiera Gubernamental',
        'Presupuesto Público por Resultados',
        'Gestión Financiera y Operaciones de Tesorería',
        'Gestión de la Contabilidad Gubernamental',
        'Gestión Tributaria: Detracciones, Percepciones y Retenciones',
        'Tributación Gubernamental',
        'Evaluación de Proyectos de Inversión Pública (Nuevo)'
      ]
    },
    {
      title: 'GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL',
      content: [
        'Gestión de Recursos Humanos y Servicio Civil',
        'Indicadores de Gestión y Recursos Humanos',
        'Diseño de Perfiles de Puestos',
        'Gestión de Personal y Recursos Humanos en la Administración Pública',
        'Gestión del Régimen de la Ley del Servicio Civil',
        'Planilla Electrónica',
        'Gestión del Desarrollo de Competencias (Nuevo)'
      ]
    },
    {
      title: 'GESTIÓN Y CONTROL',
      content: [
        'Gestión de Control Interno',
        'Control Previo y su Fiscalización en la Gestión Pública',
        'Delitos de Corrupción en la Administración Pública',
        'Procesos Administrativos Disciplinarios',
        'Auditoría de la Calidad de Gestión de Salud',
        'Auditoría y Fiscalización Gubernamental (Nuevo)'
      ]
    },
    {
      title: 'DERECHO ADMINISTRATIVO',
      content: [
        'Derecho Administrativo',
        'Régimen del Procedimiento Administrativo General',
        'Procesos Administrativos y Delitos en la Gestión Pública',
        'Gestión del Fedatario Público',
        'Derecho Penal en la Función Pública',
        'Transparencia y acceso a la información pública',
        'Transferencia de la Gestión Gubernamental',
        'Derecho Laboral en el Sector Público (Nuevo)'
      ]
    }
  ]

  return (
    <MyBlock
      header={{ h: '¿Porque elegirnos?' }}
      styles={{ container: 'bg-white', h: 'soliciteUna1:text-[25px] text-black' }}
    >
      <p className='text-xl font-normal'>Categorías clave de formación para potenciar el desempeño institucional.</p>
      <div id='beneficios'>
        <a className='block text-[#0E30AA] border-2 border-[#0E30AA] rounded-full transition-all p-2 font-semibold relative group hover:bg-[#0E30AA] hover:text-white mt-7' target='_blank' href='/web/brouchure-inhouse.pdf' rel='noreferrer'>
          <div className='border-2 group-hover:bg-[#0E30AA] border-[#0E30AA] rounded-full h-14 w-14 absolute bg-white left-[-5px] top-[-8px] flex items-center justify-center'>
            <FontAwesomeIcon icon={faCircleDown} className='text-3xl' />
          </div>
          <div className='ml-12'>DESCARGAR BROCHURE</div>
        </a>
      </div>

      <div className='grid w-full gap-4 mt-5'>
        {
          contents.map((item, index) => <ContentBrochure key={index} title={item.title} content={item.content} />)
        }
      </div>
    </MyBlock>
  )
}
