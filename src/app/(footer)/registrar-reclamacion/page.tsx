'use client'

import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import Link from 'next/link'
import { useState } from 'react'

export default function ComplaintsBook() {
  const [responseModal, setResponseModal] = useState(false)
  const [resData, setResData] = useState(false)

  const [data, setData] = useState<{
    aceptar_politicas: boolean,
    tipo_consumidor: string,
    razon_social: string,
    ruc: string,
    nombres: string,
    apellidos: string,
    tipo_documento: string,
    num_documento: string,
    correo: string,
    direccion: string,
    telefono1: string,
    telefono2: string,
    tipo_programa: string,
    titulo_programa: string,
    monto_reclamo: string,
    des_reclamo: string,
    tipo_reclamo: string,
    detalle_reclamo: string,
    pedido_reclamo: string

  }>({
    aceptar_politicas: false,
    tipo_consumidor: 'P',
    razon_social: '',
    ruc: '',
    nombres: '',
    apellidos: '',
    tipo_documento: 'dni',
    num_documento: '',
    correo: '',
    direccion: '',
    telefono1: '',
    telefono2: '',
    tipo_programa: 'C',
    titulo_programa: '',
    monto_reclamo: '',
    des_reclamo: '',
    tipo_reclamo: 'R',
    detalle_reclamo: '',
    pedido_reclamo: ''
  })

  const [error, setError] = useState<{
    aceptar_politicas: string,
    razon_social: string,
    ruc: string,
    nombres: string,
    apellidos: string,
    tipo_documento: string,
    num_documento: string,
    correo: string,
    direccion: string,
    telefono1: string,
    telefono2: string,
    tipo_programa: string,
    titulo_programa: string,
    monto_reclamo: string,
    des_reclamo: string,
    tipo_reclamo: string,
    detalle_reclamo: string,
    pedido_reclamo: string

  }>({
    aceptar_politicas: '',
    razon_social: '',
    ruc: '',
    nombres: '',
    apellidos: '',
    tipo_documento: '',
    num_documento: '',
    correo: '',
    direccion: '',
    telefono1: '',
    telefono2: '',
    tipo_programa: '',
    titulo_programa: '',
    monto_reclamo: '',
    des_reclamo: '',
    tipo_reclamo: '',
    detalle_reclamo: '',
    pedido_reclamo: ''
  })

  return (
    <div className='p-8 grid gap-8'>
      <h1 className='text-center text-3xl'>Registrar Reclamo</h1>

      <form className='mx-auto border rounded-xl shadow-lg p-8 grid gap-8 max-w-[1200px]' onSubmit={(e) => {
        e.preventDefault()

        const errors = {
          aceptar_politicas: '',
          razon_social: '',
          ruc: '',
          nombres: '',
          apellidos: '',
          tipo_documento: '',
          num_documento: '',
          correo: '',
          direccion: '',
          telefono1: '',
          telefono2: '',
          tipo_programa: '',
          titulo_programa: '',
          monto_reclamo: '',
          des_reclamo: '',
          tipo_reclamo: '',
          detalle_reclamo: '',
          pedido_reclamo: ''
        }

        if (data.tipo_documento === 'dni') {
          if (data.num_documento.length === 0) errors.num_documento = 'Error'
          if (data.nombres.length === 0) errors.nombres = 'Error'
          if (data.apellidos.length === 0) errors.apellidos = 'Error'
        }

        if (data.tipo_documento === 'ruc') {
          if (data.razon_social.length === 0) errors.razon_social = 'Error'
          if (data.ruc.length === 0) errors.ruc = 'Error'
        }

        if (data.correo.length === 0) errors.correo = 'Error'
        if (data.direccion.length === 0) errors.direccion = 'Error'
        if (data.telefono1.length === 0) errors.telefono1 = 'Error'
        if (data.titulo_programa.length === 0) errors.titulo_programa = 'Error'
        if (data.monto_reclamo.length === 0) errors.monto_reclamo = 'Error'
        if (data.des_reclamo.length === 0) errors.des_reclamo = 'Error'
        if (data.detalle_reclamo.length === 0) errors.detalle_reclamo = 'Error'
        if (data.pedido_reclamo.length === 0) errors.pedido_reclamo = 'Error'

        if (!data.aceptar_politicas) errors.aceptar_politicas = 'Error'

        setError(errors)
        if (
          errors.aceptar_politicas.length > 0 ||
          errors.razon_social.length > 0 ||
          errors.ruc.length > 0 ||
          errors.nombres.length > 0 ||
          errors.apellidos.length > 0 ||
          errors.tipo_documento.length > 0 ||
          errors.num_documento.length > 0 ||
          errors.correo.length > 0 ||
          errors.direccion.length > 0 ||
          errors.telefono1.length > 0 ||
          errors.tipo_programa.length > 0 ||
          errors.titulo_programa.length > 0 ||
          errors.monto_reclamo.length > 0 ||
          errors.des_reclamo.length > 0 ||
          errors.tipo_reclamo.length > 0 ||
          errors.detalle_reclamo.length > 0 ||
          errors.pedido_reclamo.length > 0
        ) {
          return
        }

        const body = new FormData()
        body.append('razon_social', data.razon_social)
        body.append('ruc', data.ruc.length > 0 ? data.ruc : '-')
        body.append('nombres', data.nombres.length > 0 ? data.nombres : '-')
        body.append('apellidos', data.apellidos.length > 0 ? data.apellidos : '-')
        body.append('tipo_documento', data.tipo_documento)
        body.append('num_documento', data.num_documento.length > 0 ? data.num_documento : '-')
        body.append('correo', data.correo)
        body.append('direccion', data.direccion)
        body.append('telefono1', data.telefono1)
        body.append('telefono2', '-')
        body.append('tipo_programa', data.tipo_programa)
        body.append('titulo_programa', data.titulo_programa)
        body.append('monto_reclamo', data.monto_reclamo)
        body.append('des_reclamo', data.des_reclamo)
        body.append('tipo_reclamo', data.tipo_reclamo)
        body.append('detalle_reclamo', data.detalle_reclamo)
        body.append('pedido_reclamo', data.pedido_reclamo)

        fetch('https://aula.desarrolloglobal.pe/v03/api/reclamos/setReclamo', {
          method: 'POST',
          body
        })
          .then((resp) => resp.text())
          .then((response) => {
            setResData(response === 'true')
            setResponseModal(true)
          })
          .catch(() => setResData(false))
          .finally(() => setData(
            {
              aceptar_politicas: false,
              tipo_consumidor: 'P',
              razon_social: '',
              ruc: '',
              nombres: '',
              apellidos: '',
              tipo_documento: 'dni',
              num_documento: '',
              correo: '',
              direccion: '',
              telefono1: '',
              telefono2: '',
              tipo_programa: 'C',
              titulo_programa: '',
              monto_reclamo: '',
              des_reclamo: '',
              tipo_reclamo: 'R',
              detalle_reclamo: '',
              pedido_reclamo: ''
            }
          ))
      }}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <section className='grid gap-4'>
            <h2>Informacion del Consumidor</h2>

            <div className='w-full'>
              <label className='font-semibold text-sm'>Tipo de Consumidor</label>
              <select className='p-2.5 rounded-xl text-sm focus:outline-none w-full' value={data.tipo_consumidor} onChange={(e) => {
                const value = e.target.value
                setData((prev) => ({ ...prev, tipo_consumidor: value, tipo_documento: value === 'P' ? 'dni' : 'ruc' }))
              }}>
                <option value='P'>Persona Natural</option>
                <option value='E'>Empresa</option>
              </select>
            </div>

            {
              data.tipo_consumidor === 'P' && (
                <>
                  <div className='w-full'>
                    <label className='font-semibold text-sm'>Nombres</label>
                    <input value={data.nombres} onChange={(e) => setData((prev) => ({ ...prev, nombres: e.target.value }))} className={`focus:outline-none ${error.nombres.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='Joe' />
                  </div>

                  <div className='w-full'>
                    <label className='font-semibold text-sm'>Apellidos</label>
                    <input value={data.apellidos} onChange={(e) => setData((prev) => ({ ...prev, apellidos: e.target.value }))} className={`focus:outline-none ${error.apellidos.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='Doe' />
                  </div>
                </>
              )
            }

            {
              data.tipo_consumidor === 'E' && (
                <div className='w-full'>
                  <label className='font-semibold text-sm'>Razon Social</label>
                  <input value={data.razon_social} onChange={(e) => setData((prev) => ({ ...prev, razon_social: e.target.value }))} className={`focus:outline-none ${error.razon_social.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='Doe' />
                </div>
              )
            }

            <div className='flex items-center gap-4 w-full'>
              <div className='max-w-[150px]'>
                <label className='font-semibold text-sm'>Tipo de Documento</label>
                <select className='p-2.5 rounded-xl text-sm focus:outline-none w-full' value={data.tipo_documento} onChange={(e) => setData((prev) => ({ ...prev, tipo_documento: e.target.value }))}>
                  <option value='dni'>DNI</option>
                  <option value='ruc'>RUC</option>
                </select>
              </div>

              {
                data.tipo_documento === 'dni' ? (
                  <div className='w-full'>
                    <label className='font-semibold text-sm'>Número de Documento</label>
                    <input value={data.num_documento} onChange={(e) => setData((prev) => ({ ...prev, num_documento: e.target.value }))} className={`focus:outline-none ${error.num_documento.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='11111111' />
                  </div>
                ) : (
                  <div className='w-full'>
                    <label className='font-semibold text-sm'>Número de Documento</label>
                    <input value={data.ruc} onChange={(e) => setData((prev) => ({ ...prev, ruc: e.target.value }))} className={`focus:outline-none ${error.ruc.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='11111111111' />
                  </div>
                )
              }
            </div>

            <div className='w-full'>
              <label className='font-semibold text-sm'>Correo</label>
              <input value={data.correo} onChange={(e) => setData((prev) => ({ ...prev, correo: e.target.value }))} className={`focus:outline-none ${error.correo.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='example@example.com' />
            </div>

            <div className='w-full'>
              <label className='font-semibold text-sm'>Dirección</label>
              <input value={data.direccion} onChange={(e) => setData((prev) => ({ ...prev, direccion: e.target.value }))} className={`focus:outline-none ${error.direccion.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='Av. Julio César Tello 741, Lince 15073' />
            </div>

            <div className='w-full'>
              <label className='font-semibold text-sm'>Celular</label>
              <input value={data.telefono1} onChange={(e) => setData((prev) => ({ ...prev, telefono1: e.target.value }))} className={`focus:outline-none ${error.telefono1.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='990945941' />
            </div>
          </section>
          <section className='flex flex-col items-start gap-4'>
            <div className='grid gap-4 w-full'>
              <h2>Identificación del producto contratado</h2>

              <div className='flex items-center gap-4 w-full'>
                <div className='max-w-[150px]'>
                  <label className='font-semibold text-sm'>Tipo</label>
                  <select className='p-2.5 rounded-xl text-sm focus:outline-none w-full' value={data.tipo_programa} onChange={(e) => setData((prev) => ({ ...prev, tipo_programa: e.target.value }))}>
                    <option value='C'>Curso</option>
                    <option value='S'>Curso Grabado</option>
                    <option value='D'>Diplomada / Diplomado</option>
                  </select>
                </div>

                <div className='w-full'>
                  <label className='font-semibold text-sm'>Titulo de Programa:</label>
                  <input value={data.titulo_programa} onChange={(e) => setData((prev) => ({ ...prev, titulo_programa: e.target.value }))} className={`focus:outline-none ${error.titulo_programa.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='Curso SIAF' />
                </div>
              </div>

              <div>
                <label className='font-semibold text-sm'>Monto Reclamado:</label>
                <input value={data.monto_reclamo} onChange={(e) => setData((prev) => ({ ...prev, monto_reclamo: e.target.value }))} className={`focus:outline-none ${error.monto_reclamo.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='s/. 100.00' />
              </div>

              <div>
                <label className='font-semibold text-sm'>Descripcion:</label>
                <textarea value={data.des_reclamo} onChange={(e) => setData((prev) => ({ ...prev, des_reclamo: e.target.value }))} className={`focus:outline-none ${error.des_reclamo.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} placeholder='Descripción' />
              </div>
            </div>
            <div className='grid gap-4 w-full'>
              <h2>Detalle del reclamo</h2>

              <div>
                <label className='font-semibold text-sm'>Tipo del Reclamo</label>
                <select className='p-2.5 rounded-xl text-sm focus:outline-none w-full' value={data.tipo_reclamo} onChange={(e) => setData((prev) => ({ ...prev, tipo_reclamo: e.target.value }))}>
                  <option value='R'>Reclamo</option>
                  <option value='Q'>Queja</option>
                </select>
              </div>

              <div>
                <label className='font-semibold text-sm'>Detalle del Reclamo:</label>
                <textarea value={data.detalle_reclamo} onChange={(e) => setData((prev) => ({ ...prev, detalle_reclamo: e.target.value }))} className={`focus:outline-none ${error.detalle_reclamo.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} placeholder='Detalle del Reclamo' />
              </div>

              <div>
                <label className='font-semibold text-sm'>Pedido del Reclamo:</label>
                <textarea value={data.pedido_reclamo} onChange={(e) => setData((prev) => ({ ...prev, pedido_reclamo: e.target.value }))} className={`focus:outline-none ${error.pedido_reclamo.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} placeholder='Descripción del Reclamo' />
              </div>

              <div className='grid gap-2'>
                <div className='flex items-start gap-2'>
                  <input className='m-1' type='checkbox' checked={data.aceptar_politicas} onChange={(e) => setData((prev) => ({ ...prev, aceptar_politicas: e.target.checked }))} />
                  <label className='text-sm text-balance'>
                    Declaro ser el usuario del servicio o producto y acepto el contenido del presente formulario manifestando bajo Declaración Jurada la veracidad de los hechos descritos, y acepto <Link className='hover:underline text-[#033499]' href='/politicas-de-privacidad'>POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES</Link>
                  </label>
                </div>
                {error.aceptar_politicas.length > 0 && (<span className='font-semibold text-sm text-red-700'>* Tienes que aceptar las politicas de privacidad</span>)}
              </div>

            </div>
          </section>
        </div>
        <button type='submit' className='p-2.5 bg-[#033499] text-white rounded-lg hover:bg-blue-600'>Enviar</button>
      </form>

      <MyPopUp isOpen={responseModal} setIsOpen={setResponseModal} popUp={
        <div className='bg-white rounded-xl p-8 flex items-center text-center text-xl font-semibold'>
          <div className='grid gap-4'>
            <div className='flex items-center gap-2 mx-auto'>
              { resData ? (
                <svg className='w-7 h-7 text-green-700' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <path d='M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM371.812 211.812L243.812 339.812C238.344 345.281 231.156 348 224 348S209.656 345.281 204.188 339.812L140.188 275.812C129.281 264.875 129.281 247.125 140.188 236.188C151.125 225.25 168.875 225.25 179.812 236.188L224 280.406L332.188 172.188C343.125 161.25 360.875 161.25 371.812 172.188C382.719 183.125 382.719 200.875 371.812 211.812Z'/>
                </svg>
              ) : (
                <svg className='w-7 h-7 text-red-700' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <path d='M256.002 16C123.438 16 16 123.438 16 256S123.438 496 256.002 496C388.562 496 496 388.562 496 256S388.562 16 256.002 16ZM336.969 303.029C346.344 312.404 346.344 327.592 336.969 336.967C327.588 346.348 312.404 346.34 303.031 336.967L256 289.936L208.969 336.967C199.588 346.348 184.404 346.34 175.031 336.967C165.656 327.592 165.656 312.404 175.031 303.029L222.062 255.998L175.031 208.969C165.656 199.594 165.656 184.406 175.031 175.031S199.594 165.656 208.969 175.031L256 222.062L303.031 175.031C312.406 165.656 327.594 165.656 336.969 175.031S346.344 199.594 336.969 208.969L289.938 255.998L336.969 303.029Z'/>
                </svg>
              ) }
            </div>
            
            <span>{ resData ? 'Se registro correctamente tu reclamo' : 'No se pudo registrar tu reclamo' }</span>

            <button onClick={() => setResponseModal(false)} className='p-2.5 rounded-lg text-white bg-[#003399] text-sm'>Aceptar</button>
          </div>
        </div>
      }/>
    </div>
  )
}