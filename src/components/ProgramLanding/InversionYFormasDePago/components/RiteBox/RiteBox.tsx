'use client'
import { programContext } from '@/context/ProgramContext'
import { globalContext } from '@/context/GlobalContext'
import whatLinkText from '@/helpers/whatLinkText'
import programData from '@/types/programData'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'

export default function RiteBox () {
  const context = useContext(programContext)
  const userContext = useContext(globalContext)

  if (context === undefined || userContext === undefined) return (<></>)

  const { program, isConvenio } = context.values
  const { user } = userContext
  const { precio, titulo, asesores, tipo, inicio, tipo_clase, etiqueta } = program as programData
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  function convertirFecha (fecha: string) {
    const partes = fecha?.split('-')
    const mes = meses[parseInt(partes[1]) - 1]
    const dia = partes[2]

    const fechaConvertida = `${dia} de ${mes}`

    return `Disponible hasta el ${fechaConvertida}`
  }

  function convertirFecha2 (fecha: string) {
    const partes = fecha.split('-')
    const mes = meses[parseInt(partes[1]) - 1]
    const dia = partes[2]

    const fechaConvertida = `${Number(dia) + 1} de ${mes}`

    return `Disponible hasta el ${fechaConvertida}`
  }

  const fechaConvertida = convertirFecha(inicio)
  const fechaConvertida2 = convertirFecha2(inicio)

  return (
    <div className='flex-1 bg-[#F4F6FA] px-[28px] py-[38px] mob:text-center'>
      <span className='font-bold text-[30px] mob:text-[25px] mob:leading-[1.7rem] text-black leading-[2rem] block mb-[48px]'>
        <span className='text-primary'>Invierta en su futuro y </span>
        <span className='text-[#F20034]'>
          ahorre {tipo_clase !== 'GRABADO' && `hasta un ${precio?.descuento}%`}
        </span>
        &nbsp;con el precio pronto pago
      </span>
      <p className='mb-[16px] text-[18px]'>Precio para persona natural</p>

      <div className='flex px-[13px] bg-[#FFFF1E] items-start py-[15px] gap-[13px] rounded-[.5rem] my-shadow mb-[14px]'>
        <div className='w-[24px] h-[24px] border-[1px] border-black rounded-[100%] flex justify-center items-center text-[1rem]'>
          <FontAwesomeIcon icon={faDollar} />
        </div>

        <section className='flex-1'>
          <span className='text-[22px] mob:text-[1rem] font-bold text-[#F20034] leading-[1.4rem] flex justify-between'>
            <span>Pronto Pago:</span>
            <span>S/{!isConvenio ? precio?.final?.toFixed(2) : precio.final_convenio.toFixed(2)}</span>
          </span>
          {tipo_clase !== 'GRABADO' && <p>{fechaConvertida}</p>}

        </section>
      </div>

      {
        tipo_clase !== 'GRABADO' && (
          <div className='flex px-[13px] bg-[#fff] items-start py-[15px] gap-[13px] rounded-[.5rem] my-shadow mb-[34px]'>
            <div className='w-[24px] h-[24px] border-[1px] border-black rounded-[100%] flex justify-center items-center text-[1rem]'>
              <FontAwesomeIcon icon={faDollar} />
            </div>
            <section className='flex-1'>
              <span className='text-[22px] mob:text-[1rem] font-bold leading-[1.4rem] flex justify-between'>
                <span>Precio Normal:</span>
                <span className='line-through'>S/{!isConvenio ? precio?.normal?.toFixed(2) : precio.normal_convenio.toFixed(2)}</span>
              </span>
              {tipo_clase !== 'GRABADO' && <p>{fechaConvertida2}</p>}
            </section>
          </div>
        )
      }
      <p className='text-[16px] block mb-[32px]'>
        Contáctenos para obtener
        <br /> información sobre tarifas
        <br /> corporativas e inscripciones con O/S.
      </p>
      <a
        target='_blank'
        href={whatLinkText({
          email: user?.correo,
          asesor: asesores[0],
          subject: `${tipo} ${tipo_clase === 'GRABADO' ? 'asincrónico' : ''}`,
          program: titulo,
          phone: asesores[0].telefono,
          url: `https://desarrolloglobal.pe/${tipo}s/${etiqueta}`
        })}
        className='rounded-[.5rem] mt-[6.8rem] bg-[#25A217] text-[18px] text-[#fff] flex gap-[14px] px-[1rem] w-[100%] py-[14px] justify-center items-center' rel='noreferrer'
      >
        <FontAwesomeIcon size='xl' icon={faWhatsapp} />
        <span className='font-bold mob:text-[16px]'>
          Contactar con un asesor
        </span>
      </a>
    </div>
  )
}
