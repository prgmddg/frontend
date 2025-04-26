'use client'

import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCreditCard, faLock } from '@fortawesome/free-solid-svg-icons'
import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'
import useCart from '@/hooks/useCart'
import Image from 'next/image'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { MyPopUp } from '../MyPopUp/MyPopUp'
import InHousePopUp from '../InHousePopup/InHousePopUp'
import whatLinkText from '@/helpers/whatLinkText'
import { globalContext } from '@/context/GlobalContext'

export const ComponentVacante = () => {
  const { updatingCart } = useCart()
  const { user } = useContext(globalContext)
  const [show, setShow] = useState<boolean>(false)
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program, isConvenio } = context.values
  const { precio, asesores, titulo: tt, tipo, total_sesiones, id, imagen, descripcion, tipo_clase, etiqueta } = program as programData
  const titulo = tipo === 'diplomado' ? tt.replace('Diploma', 'Diplomado') : tt

  return (
    <>
      <section className='pb-[2rem] px-[1rem] my-10' id='Pagar%20en%20Linea'>
        <article className='container mx-auto'>
          <div className='w-full lg:w-[70%]'>
            <p className='text-[#003399] text-center font-bold text-4xl'>
              ¡Separa tu vacante ahora!
            </p>
            <p className='mt-3 text-xl text-center'>
              ¡Inscríbete hoy y aprovecha los siguientes beneficios increíbles:
            </p>
            <div className='border-2 border-[#003399] rounded-lg grid grid-cols-1 lg:grid-cols-2 p-5 lg:px-10 lg:py-5 mt-5 items-center gap-5'>
              <div>
                <p className='text-2xl font-bold'>Este {tipo === 'curso' ? 'curso' : 'diploma'} Incluye:</p>
                <ul className='mt-3 space-y-3'>
                  <li>
                    <FontAwesomeIcon
                      className='text-[#25D366] mr-3'
                      icon={faCircleCheck}
                    />
                    Certificación válido para convocatorias públicas.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='text-[#25D366] mr-3'
                      icon={faCircleCheck}
                    />
                    Docentes Especializados con Amplia Trayectoria.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='text-[#25D366] mr-3'
                      icon={faCircleCheck}
                    />
                    {
                      tipo_clase === 'GRABADO'
                        ? (
                          <span className=''>
                            {total_sesiones} clases en grabadas en video
                          </span>
                        )
                        : (
                          <span className='text-red-500'>
                            {total_sesiones} sesiones de clases en vivo. (Tiempo Real).
                          </span>
                        )
                    }
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='text-[#25D366] mr-3'
                      icon={faCircleCheck}
                    />
                    Plataforma Exclusiva para un Aprendizaje Fácil.
                  </li>
                </ul>
              </div>
              <div className='space-y-2'>
                {
                  tipo_clase !== 'GRABADO' && (
                    <>
                      <p className='text-[#003399] text-center text-xl w-full lg:w-[75%] mx-auto'>
                        También puedes pagar con tarjeta de manera segura.
                      </p>
                      <p className='text-lg font-bold text-center'>
                        Precio Normal: S/. {!isConvenio ? precio.normal : precio.normal_convenio}.00
                      </p>
                      <p className='py-1 mt-3 text-center bg-yellow-400 rounded-full'>
                        Descuento Especial de ${precio?.descuento}%
                      </p>
                    </>
                  )
                }
                <p className='text-3xl font-bold text-center text-red-500'>
                  S/. {!isConvenio ? precio.final : precio.final_convenio}.00
                </p>
                <button
                  onClick={() =>
                    updatingCart({
                      imagen,
                      id,
                      titulo,
                      precio,
                      total_sesiones,
                      tipo
                    })}
                  className='border-2 text-[#003399] flex items-center gap-3 p-4 hover:bg-[#003399] hover:text-white border-[#003399] rounded-md justify-center mx-auto'
                >
                  <FontAwesomeIcon className='text-2xl' icon={faCreditCard} />
                  <span className='text-xl'>Pagar con tarjeta</span>
                </button>
                <Image
                  src='/img/creditCards.webp'
                  alt='tarjetas de credito'
                  height={32}
                  width={240}
                  className='mx-auto'
                />
                <p className='flex w-[100%] gap-2 items-center justify-center text-center text-[14px] mb-[8px]'>
                  <FontAwesomeIcon icon={faLock} />
                  <span>Pagos seguros encriptados con seguridad SSL</span>
                </p>
                <p className='bg-[#E5F1FF] rounded-full text-center py-1'>
                  Todos los precios incluyen IGV
                </p>
              </div>
            </div>
          </div>
          <a
            href={whatLinkText({
              email: user?.correo,
              asesor: asesores[0],
              subject: `${tipo} ${tipo_clase === 'GRABADO' ? 'asincrónico' : ''}`,
              program: titulo,
              phone: asesores[0]?.telefono,
              url: `https://desarrolloglobal.pe/${tipo}s/${etiqueta}`
            })}
            className='bg-green-500 rounded-lg text-white w-full lg:w-[70%] flex items-center justify-center text-base font-bold lg:text-xl mt-5 py-3 gap-5 flex-wrap'
            target='_blank' rel='noreferrer'
          >
            <FontAwesomeIcon icon={faWhatsapp} className='text-4xl' />
            <p className='block lg:hidden'>Inscripciones por WhatsApp</p>
            <p className='hidden lg:block'>
              ¡Hable con un asesor y únase a nuestro {tipo === 'curso' ? 'curso' : 'diploma'} hoy mismo!
            </p>
          </a>
        </article>
        <article className='h-[475px] container mx-auto flex justify-start !mt-[60px] mob:h-[initial]'>
          <section
            className='w-[923px] max-w-[100%] mob:py-[1rem] flex items-end gap-[1rem] rounded-[.4rem]'
            style={{
              backgroundImage: 'url(/web/bg-banner-carousel-3.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Image
              src='/img/hombreDeTraje.webp'
              alt='hombre de traje'
              width={282}
              height={442}
              className='w-[298px] 900px:hidden'
            />
            <div className='justify-center pr-[56px] flex flex-col flex-1 self-stretch 900px:px-[20px]'>
              <div className='border-[3px] border-myYellow rounded-[9px] h-[183px] mb-[21px] flex flex-col justify-center items-start'>
                <span className='text-[18px] mb-[13px] pl-[28px] pr-[17px] text-black h-[30px] inline-flex items-center leading-[44px] rounded-[0px_9px_9px_0px] bg-myYellow font-bold'>
                  <span className='capitalize'>{tipo}</span>
                  &nbsp;
                  {tipo === 'curso'
                    ? 'Especializado'
                    : 'de Alta Especialización'}
                </span>
                <div className='h-[103px] px-[31px] flex items-center'>
                  <span className='font-bold text-[32px] leading-[32px] line-clamp-3 text-white mob:text-[20px] mob:leading-[26px]'>
                    {titulo}
                  </span>
                </div>
              </div>
              <span className='text-[25px] font-bold leading-[28px] text-myYellow max-w-[388px] block'>
                Este programa está disponible en Modalidad In House.
              </span>
              <span className='w-[15rem] border-b-white border-b-[1px] block my-[1rem]' />
              <span className='text-[18px] font-bold text-white mb-[23px] block'>
              &quot;Personaliza tu formación para tu organización.&quot;
              </span>
              <button
                className='bg-white h-[60px] gap-[14px] mob:w-[100%] rounded-[9px] flex items-center justify-center w-[298px] max-w-[100%] font-bold text-primary text-[22px]'
                onClick={() => setShow(true)}
              >
                <Image
                  src='/img/flecha.webp'
                  width={24}
                  height={20}
                  alt='icono de flecha'
                />
                Solicitalo Aquí
                <Image
                  src='/img/flecha.webp'
                  width={24}
                  height={20}
                  alt='icono de flecha'
                  className='relative rotate-[180deg]'
                />
              </button>
            </div>
          </section>
        </article>
      </section>
      <MyPopUp
        isOpen={show}
        setIsOpen={setShow}
        popUp={
          <InHousePopUp
            imagen={imagen}
            titulo={titulo}
            descripcion={descripcion}
            asesores={asesores}
            setShow={setShow}
            id={id}
          />
        }
      />
    </>
  )
}
