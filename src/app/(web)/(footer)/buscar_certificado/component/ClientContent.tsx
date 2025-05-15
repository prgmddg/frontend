'use client'

import { globalContext } from '@/context/GlobalContext'
import React, { useState, useContext, useEffect, useCallback } from 'react'
import axios from 'axios'
import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import Image from 'next/image'

interface row {
  cod_registro_0: string;
  cod_registro_1: string;
  nombres: string;
  dni: string;
  categoria: string;
  programa: string;
  mes: string;
  year: string;
  horas_certificadas: string | null;
  fecha_inicio: string | null;
  fecha_fin: string | null;
  estado: string;
  url: string | null;
}

export default function ClientContent({ searchParams }: { searchParams: { search?: string, c?: string } }) {
  const [values, setValues] = useState<string>('')
  const [data, setData] = useState<Array<row>>([])
  const [show, setShow] = useState<boolean>(false)
  const { search } = searchParams
  const { c } = searchParams
  const { setShowMsg } = useContext(globalContext)

  const submitData = useCallback(async (values?: string) => {
    if (!values) return
    if (values.length < 4) return setShowMsg({ show: true, type: 'fail', content: 'El DNI o codigo no es correcto' })

    const form = new FormData()
    form.append('text', values)

    const res = await axios.post('https://aula.desarrolloglobal.pe/v03/api/certificados', form)
    if (res.data) {
      setData(res.data)
      setShow(true)
      return
    }

    setShowMsg({ show: true, type: 'fail', content: 'El DNI o codigo no es correcto' })
  }, [setShowMsg])

  useEffect(() => {
    submitData(search?.includes('EDGG') ? search : c ?? search)
  }, [c, search, submitData])

  async function submittingForm(e: any) {
    e.preventDefault()
    submitData(values)
  }

  return (
    <>
      <div className='mb-10'>
        <div className='bg-[#000482] h-[300px] w-full py-[4rem] px-[1.2rem]' />

        <article className='-mt-[250px] md:-mt-[200px] p-5'>
          <div className='bg-white text-[#000482] rounded-md container p-10 lg:p-20 grid grid-cols-1 md:grid-cols-2 shadow-lg'>
            <div>
              <p className='text-3xl font-bold'>¿Por qué Verificar tu Certificado?</p>
              <p className='mt-5'>En la actualidad, la validez de los certificados es fundamental, y desafortunadamente, existen documentos fraudulentos en circulación. Queremos asegurarnos de que tanto tú como las entidades públicas y privadas puedan tener total confianza en la capacitación que ofrecemos.</p>
              <p className='mt-5 text-3xl font-bold'>Nuestra Garantía de Transparencia</p>
              <p className='mt-5'>Para tu tranquilidad, nuestro equipo está disponible para verificar la autenticidad de tu certificado en cualquier momento. Cumplimos con las regulaciones y leyes pertinentes para brindarte esta garantía.<br /> <br /> De acuerdo con [leyes y regulaciones aplicables], estamos comprometidos con la transparencia en la educación y la capacitación que proporcionamos. Esto significa que cualquier entidad interesada puede verificar la validez de tu certificado, confirmando así la calidad de tu formación.</p>
            </div>
            <div className='w-full'>
              <form className='w-full p-5 mx-auto mt-5 space-y-5 bg-white rounded-md shadow-lg md:mt-0 lg:w-4/5' onSubmit={submittingForm}>
                <h2 className='text-3xl font-bold text-center'>Registro de Certificado</h2>
                <p className='text-lg text-center'>Escuela &quot;DESARROLLO GLOBAL&quot;</p>
                <div className='bg-[#FEEFF2] rounded-md text-[#FF0034] p-5'>
                  <p className='font-bold text-center'>INSTRUCCIONES</p>
                  <p className='text-center'>Escribe tu DNI y nombres y haz clic en <br /> Buscar para verificar tu certificado.</p>
                </div>

                <input
                  type='text'
                  value={values}
                  className='text-black w-full flex-1 px-[1rem] py-[.7rem] outline-none border-2 focus:border-primary rounded-[.4rem]'
                  onChange={(e) => setValues(e.target.value)}
                  placeholder='DOCUMENTO NACIONAL DE IDENTIDAD'
                />
                <button className='bg-[#2A50E8]  text-white px-[3rem] py-[.5rem] font-bold  w-full rounded-md'>
                  Verificar Certificado
                </button>
                <p className='text-xs text-center'>Al darle &quot;Buscar&quot; acepta la política de protección de datos personales.</p>
              </form>
            </div>
          </div>
        </article>

        <article className='p-5 mt-10'>
          <div className='bg-[#000482] text-white mx-auto rounded-md container px-10 md:px-20 pt-10 grid grid-cols-1 md:grid-cols-2 shadow-lg'>
            <div className='space-y-4'>
              <div className='flex flex-wrap items-center gap-3 font-bold'>
                <div className='bg-[#FFB300] text-white rounded-md p-2'>
                  <p>Verificaciones</p>
                </div>
                <p className='text-[#FFB300]'>Mas de 13 años Capacitando en Gestión Pública</p>
              </div>
              <h1 className='text-3xl font-bold text-white'>Verifica la Validez de tu Certificado</h1>
              <div className='flex items-center gap-3 text-lg'>
                <Image src='/img/PageCertificate.webp' width={40} height={40} alt='Desarrollo Global - Certificado' />
                <p>Verifica la Autenticidad de tu Certificado con Confianza</p>
              </div>
              <p className='text-left'>En Desarrollo Global, entendemos la importancia de la integridad y la transparencia en tu proceso de aprendizaje. Por eso, te ofrecemos la posibilidad de verificar la autenticidad de tu certificado de manera sencilla y confiable.</p>
              <p>Verifica aqui 👇</p>
              <div className='flex font-bold gap-5 flex-wrap w-full max-w-[520px] justify-between'>
                <div className='shadow-xl rounded-md text-[#000482] bg-white p-2 border border-[#000482]'>
                  <p>(01) 555 6005</p>
                </div>
                <a target='_blank' href='https://api.whatsapp.com/send?phone=51952379602&text=Hola%20Desarrollo%20Global,%20Solicito%20información%20sobre%20la%20verificación%20de%20certificados.' className='bg-[#25A217] flex items-center justify-center p-2 rounded-md text-white shadow-xl' rel='noreferrer'>
                  <p>WhatsApp</p>
                </a>
                <div className='shadow-xl rounded-md text-[#000482] p-2 border border-[#000482]'>
                  <p>info@desarrolloglobal.pe</p>
                </div>
              </div>
              <div className='flex items-center text-[#000482] border-[#000482] bg-blue-50 border rounded-md p-2 w-full max-w-[520px] gap-2'>
                <svg className='w-6 h-5' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                  <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
                </svg>
                <span>Dirección de Verificación: Av. Julio Cesar Tello 741 - Lince, Lima</span>
              </div>
            </div>
            <div>
              <Image src='/img/ChicoInhouseImage.webp' alt='Desarrollo Global - Certificado' width={658} height={488} />
            </div>
          </div>
        </article>
      </div>

      <MyPopUp isOpen={show} setIsOpen={setShow} popUp={<Table data={data} />} />
    </>
  )
}

function Table({ data }: { data: Array<row> }) {
  return (
    <div className='w-full max-w-[750px] overflow-x-auto'>
      <div className='w-full bg-white'>
        <span className='text-red-500 font-bold px-[1.4rem] py-[1.2rem] text-[1.3rem]  block border-[1px] border-[#dee2e6]'>
          Certificados Verificados
        </span>
        <div className='grid gap-5 px-[1.4rem] py-[1.2rem]'>
          {data.length > 0 && (
            <div>
              <div className='font-bold'>PARTICIPANTE:</div>
              <div>{data[0].nombres}</div>
            </div>
          )}
          {data.map((data, pos) => (
            <div className='grid gap-5 bg-[#c9dcf7] rounded-lg p-5' key={pos}>
              <div className='grid gap-2.5'>
                <div className='font-bold text-center'>{data.cod_registro_1 === '53111' || data.cod_registro_1 === '53112' ? 'DIPLOMA' : data.categoria.toUpperCase()}</div>
                <p className='font-bold'>Tenor:</p>
                <div className='text-left'>{data.programa}</div>
                <div className='flex flex-wrap gap-2'>
                  <p className='font-bold'>Codígo:</p>
                  <div className='text-center'>CCDG-{data.cod_registro_1}</div>
                </div>
                <div className='grid gap-2'>
                  {
                    data.fecha_inicio && data.fecha_fin && data.horas_certificadas
                      ? (
                        <>
                          {
                            data.programa !== 'GESTIÓN DE SUMINISTRO CON ENFOQUE REGULATORIO EN PRODUCTOS FARMACÉUTICOS Y DISPOSITIVOS MÉDICOS EN EL MARCO DE LA LEY Nº 32069 LEY GENERAL DE CONTRATACIONES PÚBLICAS Y SU REGLAMENTO' && (
                              <div className='flex flex-wrap gap-2'>
                                <p className='font-bold'>Fecha de Capacitacion:</p>
                                <p>{data.fecha_inicio}</p>
                              </div>
                            )
                          }
                          {data.cod_registro_1 === '56796' ? <div><span className='font-bold'>Duración de Programa:&nbsp;</span>{data.horas_certificadas} meses</div> : <div><span className='font-bold'>Horas Certificadas:&nbsp;</span>{data.horas_certificadas}</div>}
                        </>
                      )
                      : (
                        data.programa !== 'GESTIÓN DE SUMINISTRO CON ENFOQUE REGULATORIO EN PRODUCTOS FARMACÉUTICOS Y DISPOSITIVOS MÉDICOS EN EL MARCO DE LA LEY Nº 32069 LEY GENERAL DE CONTRATACIONES PÚBLICAS Y SU REGLAMENTO' && (
                          <div className='flex flex-wrap gap-2'>
                            <p className='font-bold'>Fecha de Capacitacion:</p>
                            <p>{data.mes}/{data.year}</p>
                          </div>
                        )
                      )
                  }
                </div>
              </div>
              {data.url && (
                <a target='_blank' href={data.url} className='w-full p-2.5 text-center block bg-[#2A50E8] text-white rounded-lg' rel='noreferrer'>Ver Certificado</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
