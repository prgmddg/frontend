'use client'

import Image from 'next/image'
import { Calificaciones } from './components/Calificaciones'
import React, { InputHTMLAttributes, useContext, useEffect, useState } from 'react'
import useObserver from '@/hooks/useObserver'
import { ContadorHeader } from './components/ContadorHeader'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faCreditCard, faEnvelope, faMobileScreen, faUser } from '@fortawesome/free-solid-svg-icons'
import postRequest from '@/helpers/postRequest'
import { usePathname } from 'next/navigation'
import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import UnderBar from './UnderBar'
import Swal from 'sweetalert2'
import useCart from '@/hooks/useCart'
import VideoPopUp from '@/app/old-components/VideoPopUp'
import { globalContext } from '@/context/GlobalContext'

export const Header = ({ programa }: { programa: string }) => {
  const context = useContext(programContext)
  const userContext = useContext(globalContext)
  const { updatingCart } = useCart()
  const [values, setValues] = useState<{ nombres: string, telefono: string, email: string, check: boolean }>({ nombres: '', telefono: '', email: '', check: true })
  const pathName = usePathname()
  const [observe, setElement, entries] = useObserver({
    threshold: 0.100,
    root: null
  })
  const [prueba, setPrueba] = useState<boolean>(true)
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const intersector: NodeListOf<Element> = document.querySelectorAll('#intersector')
    setElement(intersector)
  }, [setElement])

  useEffect(() => {
    entries.forEach((element: any) => {
      setPrueba(element.isIntersecting)
    })
  }, [entries, observe])

  if (context === undefined || userContext === undefined) return (<></>)

  const { user } = userContext

  const { program } = context.values
  const { titulo, tipo, descripcion, imagen, precio, id, total_sesiones, source, video, tipo_clase } = program as programData

  async function submittingFormHandle (e: any) {
    e.preventDefault()

    const data = new FormData()

    data.append('nombres', values.nombres)
    data.append('correo', values.email)
    data.append('telefono', values.telefono)
    data.append(`${programa === 'diplomas' ? 'diploma' : programa === 'diplomados' ? 'diplomado' : 'curso'}`, tipo === 'diplomado' ? titulo.replace('Diploma', 'Diplomado') : titulo)
    data.append(`${programa === 'diplomas' ? 'id_diploma' : programa === 'diplomados' ? 'id_diplomado' : 'id_curso'}`, id)
    data.append('ciudad', '')
    data.append('contenido', `Buenas tardes deseo informacion del ${tipo} ${tipo === 'diplomado' ? titulo.replace('Diploma', 'Diplomado') : titulo}`)
    data.append('pagina', 'https://www.desarrolloglobal.pe' + pathName)

    const tipoApi = `${programa === 'diplomas' ? 'diplomas' : programa === 'diplomados' ? 'diplomados' : 'cursos'}`
    const { res } = await postRequest(tipoApi, data, true)

    if (res === true) {
      Swal.fire({
        title: 'Se han enviado los datos con Exito 😊',
        icon: 'success'
      })
      setValues({
        nombres: ' ',
        telefono: ' ',
        email: ' ',
        check: true
      })
    } else {
      Swal.fire({
        title: 'Error al enviar los datos ☹️',
        icon: 'error'
      })
    }
  }

  let url: string

  if (source === 'facebook') {
    url = video
  } else if (source === 'vimeo') {
    url = `https://player.vimeo.com/video/${video}`
  } else {
    url = `https://www.youtube.com/watch?v=${video}`
  }

  return (
    <section className='bg-[#004BAA]'>
      {!prueba && <ContadorHeader />}
      <VideoPopUp url={url} show={show} setShow={setShow} />
      <article className='container flex mx-auto pb-16 pt-6 900px:px-[20px] 900px:pt-[27px] relative flex-wrap 900px:pb-[8rem]'>
        <div className='w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%] lg:pr-6'>
          <div className='w-full'>
            <span className='bg-myYellow mb-[23px] inline-block 900px:justify-start 900px:px-[22px] 900px:mb-[26px] 900px:w-[100%] 900px:text-[18px] 900px:max-w-[375px] text-white px-[22px] pt-[9px] pb-[5px] rounded-[.4rem] text-[22px] font-bold mob:text-[18px] mob:px-[10px]'>
              <span className='capitalize'>{tipo}</span>&nbsp;
              {tipo === 'curso' ? 'Especializado' : 'De Alta Especialización'}&nbsp;{tipo_clase === 'GRABADO' ? 'Asincrónico' : ''}
            </span>
            <h1 className='text-white font-bold text-5xl leading-[55px] 900px:text-[32px] 900px:leading-[32px] 900px:mb-[22px] mb-[29px]'>
              {tipo === 'diplomado' ? titulo.replace('Diploma', 'Diplomado') : titulo} {user && user.tipo !== 'ALUM' && `- [${id}]`}
            </h1>
            <p className='text-white text-[18px] leading-[30px] 900px:hidden mb-[34px] block'>
              {descripcion}
            </p>
            <Calificaciones tipo='header' />
          </div>
          <UnderBar />
        </div>
        <div className='w-full lg:w-[30%] relative lg:static lg:px-14 z-[999] 900px:px-[20px] 900px:absolute 900px:bottom-0 900px:left-[50%] 900px:translate-y-[88%] 900px:translate-x-[-50%]'>
          <div
            className={`w-[393px] mob:w-[100%] mob:px-[1rem] mx-auto bg-white p-[20px] rounded-lg block lg:fixed shadow-lg transition-all ease-in-out duration-300 ${!prueba && 'lg:-mt-24'
            }`}
          >
            <div className={`${prueba ? 'mb-[25px]' : 'lg:hidden mb-[25px]'} relative cursor-pointer`} onClick={() => video?.length > 1 && setShow(true)}>
              {
                video?.length > 1 && tipo_clase !== 'GRABADO' && (
                  <>
                    <div
                      className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black from-[-20%] flex items-center'
                    >
                      <div className='flex items-center w-10 h-10 p-2 mx-auto bg-white rounded-full'>
                        <svg
                          className='text-black ml-[10%] w-full h-full'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 384 512'
                          fill='currentColor'
                        >
                          <path
                            d='M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z'
                          />
                        </svg>
                      </div>
                    </div>
                    <div className='absolute left-0 right-0 text-white bottom-2'>
                      <p className='text-lg font-bold text-center'>vista previa</p>
                    </div>
                  </>
                )
              }

              {
                prueba &&
                (
                  <Image
                    src={imagen}
                    alt={tipo === 'diplomado' ? titulo.replace('Diploma', 'Diplomado') : titulo}
                    width={360}
                    height={241}
                    className='hidden 1023px:block w-[100%] h-[234px]'
                  />
                )
              }

              <Image
                src={imagen}
                alt={tipo === 'diplomado' ? titulo.replace('Diploma', 'Diplomado') : titulo}
                width={360}
                height={241}
                className='block 1023px:hidden w-[100%] h-[234px]'
              />
            </div>
            <div className='grid gap-4'>
              <div className='border border-[#0052CC] rounded-lg p-5 bg-blue-50 grid gap-5'>
                <div className='flex flex-wrap items-center justify-between'>
                  <div className='text-left'>
                    {tipo_clase !== 'GRABADO' && (<p className='text-sm font-semibold'>Precio con {precio?.descuento}% Dscto</p>)}
                    <p className='flex items-center gap-2 text-4xl font-bold'>
                      <svg className='w-5 h-5 text-[#0052CC]' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                        <path d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z' />
                      </svg>
                      S/ {precio.final ? precio.final.toFixed(2) : 0}
                    </p>
                  </div>
                  {tipo_clase !== 'GRABADO' && (
                    <div className='p-3 text-xs font-semibold text-center bg-white rounded-lg shadow-lg'>
                      <p>Precio Regular:</p>
                      <p>S/ {precio.normal.toFixed(2)}</p>
                    </div>
                  )}
                </div>
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
                  className='border bg-white border-[#0052CC] w-full text-[#0052CC] font-bold flex items-center p-2.5 justify-center gap-2 rounded-lg hover:bg-[#0052CC] transition hover:text-white'
                >
                  <FontAwesomeIcon icon={faCreditCard} />
                  <span>Pagar con {tipo_clase === 'GRABADO' ? 'Tarjeta' : `${precio?.descuento}% Dscto`}</span>
                </button>

                <picture>
                  <img className='w-full h-auto aspect-auto' src='/img/creditCards.webp' width='0' height='0' alt='metodos de pago' />
                </picture>
              </div>
              <div className='p-5 border rounded-lg '>
                <form
                  action=''
                  className='grid gap-4'
                  onSubmit={submittingFormHandle}
                >
                  <p
                    className='block text-gray-700 text-center max-w-[350px] font-semibold text-sm mx-auto leading-[18px]'
                  >
                    Registra tus datos y un asesor especializado te contactará para ayudarte
                  </p>

                  <Input
                    type='text'
                    placeholder='Ingresa tu Nombre'
                    required
                    value={values.nombres}
                    icon={{ icon: faUser }}
                    onChange={(e) =>
                      setValues((prev) => {
                        return {
                          ...prev,
                          nombres: e.target.value
                        }
                      })}
                  />
                  <Input
                    type='email'
                    icon={{ icon: faEnvelope }}
                    placeholder='Ingresa tu Correo'
                    required
                    value={values.email}
                    onChange={(e) =>
                      setValues((prev) => {
                        return {
                          ...prev,
                          email: e.target.value
                        }
                      })}
                  />
                  <Input
                    type='number'
                    placeholder='Ingresa tu Celular o WhatsApp'
                    className='mb-0'
                    required
                    value={values.telefono}
                    icon={{ icon: faMobileScreen }}
                    onChange={(e) =>
                      setValues((prev) => {
                        return {
                          ...prev,
                          telefono: e.target.value
                        }
                      })}
                  />
                  <div className='flex items-center gap-3 ml-2.5'>
                    <input
                      id='acept_terms'
                      name='acept_terms'
                      type='checkbox'
                      className='rounded-full'
                      checked={values.check}
                      onChange={(e) =>
                        setValues((prev) => {
                          return {
                            ...prev,
                            check: e.target.checked
                          }
                        })}
                      required
                    />
                    <label className='text-sm' htmlFor='acept_terms'>
                      Acepto las&nbsp;
                      <Link
                        href='/politicas-de-privacidad'
                        target='_blank'
                        className='text-[#003399] hover:underline hover:text-myLightBlue text-center'
                      >
                        políticas de privacidad de datos
                      </Link>
                    </label>
                  </div>
                  <button
                    className='bg-[#0052CC] hover:bg-[#003399] transition text-white font-semibold text-center rounded-lg w-full p-2.5 flex items-center justify-center gap-2'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'
                      />
                    </svg>
                    <span className='text-[18px]'>Solicitar Información</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

interface props extends InputHTMLAttributes<HTMLInputElement> {
  icon: FontAwesomeIconProps
  styles?: { container?: string, input?: string }
}

function Input (myProps: props) {
  const {
    styles,
    placeholder,
    icon,
    ...props
  } = myProps

  const {
    container,
    input
  } = styles || {
    container: '',
    input: ''
  }

  return (
    <div className={twMerge('relative', container)}>
      <input
        {...props}
        className={twMerge(
          'w-full placeholder:text-[#949494] rounded-lg outline-none focus:border-[#0052CC] border focus:border-2 p-2.5 ps-9',
          input
        )}
        placeholder={placeholder}
        type='text'
      />
      <div className='absolute top-0 left-2.5 bottom-0 flex items-center'>
        <FontAwesomeIcon
          {...icon}
          className='w-4 h-4 text-gray-500'
        />
      </div>
    </div>
  )
}
