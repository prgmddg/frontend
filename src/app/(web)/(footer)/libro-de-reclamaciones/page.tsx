'use client'

import Link from 'next/link'
import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import { useState } from 'react'

export default function Page () {
  const [responseModal, setResponseModal] = useState(false)
  const [complaints, setComplaints] = useState<{
    detalle: string,
    estado: string,
    registro: string
  } | null>(null)

  const [data, setData] = useState<{
    document: string,
    code: string
  }>({
    document: '',
    code: ''
  })

  const [error, setError] = useState<{
    document: string,
    code: string
  }>({
    document: '',
    code: ''
  })

  return (
    <div className='grid gap-8 p-8'>
      <h1 className='text-3xl text-center'>Libro de Reclamaciones</h1>

      <main className='flex items-center p-8 justify-around flex-wrap border rounded-xl shadow-lg max-w-[1200px] w-full mx-auto'>
        <section className='grid gap-8'>
          <h2 className='text-xl font-bold text-center'>¿Tienes un reclamo o queja?</h2>
          <Link href='/registrar-reclamacion' className='text-center p-2.5 font-semibold text-white bg-[#033499] hover:bg-blue-600 rounded-xl w-full'>Registrar</Link>
        </section>
        <section className='grid gap-8'>
          <h2 className='text-xl font-bold text-center'>Consulte estado de su reclamo o queja</h2>
          <form className='grid gap-4' onSubmit={(e) => {
            e.preventDefault()
            
            const err = { document: '', code: '' }

            if (data.document.length === 0 || (data.document.length !== 8 && data.document.length !== 11)) {
              err.document = 'Error'
            }

            if (data.code.length === 0) {
              err.code = 'Error'
            }

            setError(err)
            if (err.code.length > 0 || err.document.length > 0) return

            const body = new FormData()
            body.append('tipo', data.document.length === 8 ? 'dni' : 'ruc')
            body.append('numero', data.document)
            body.append('codigo', data.code)

            fetch('https://aula.desarrolloglobal.pe/v03/api/reclamos', {
              method: 'POST',
              body
            })
              .then((res) => res.json())
              .then((response: { detalle: string, estado: string, registro: string }[] | false) => setComplaints(response === false ? null : response[0]))
              .finally(() => setResponseModal(true))
          }}>
            <div className='flex items-center gap-4'>
              <div className='max-w-[150px]'>
                <label className='text-sm font-semibold'>Tipo de Documento</label>
                <select className='p-2.5 rounded-xl text-sm focus:outline-none w-full'>
                  <option>DNI</option>
                  <option>RUC</option>
                </select>
              </div>

              <div>
                <label className='text-sm font-semibold'>Número de Documento</label>
                <input value={data.document} onChange={(e) => setData((prev) => ({ ...prev, document: e.target.value }))} className={`focus:outline-none ${error.document.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='11111111' />
              </div>
            </div>

            <div>
              <label className='text-sm font-semibold'>Código de Reclamo</label>
              <input value={data.code} onChange={(e) => setData((prev) => ({ ...prev, code: e.target.value }))} className={`focus:outline-none ${error.code.length > 0 ? 'border border-red-700' : 'focus:border-blue-700 border'} p-2.5 rounded-xl text-sm w-full`} type='text' placeholder='12A45A78C' />
            </div>

            <span className='text-xs font-semibold text-red-700'>* Al consultar reclamo/queja acepta <Link className='hover:underline' href='/politicas-de-privacidad'>POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES</Link></span>
            <button type='submit' className='p-2.5 font-semibold text-white bg-[#033499] hover:bg-blue-600 rounded-xl'>Consultar</button>
          </form>
        </section>
      </main>
      <MyPopUp isOpen={responseModal} setIsOpen={setResponseModal} popUp={
        <div className='w-full max-w-[750px] overflow-x-auto'>
          {
            complaints ? (
              <div className='w-full bg-white'>
                <span className='text-red-500 font-bold px-[1.4rem] py-[1.2rem] text-[1.3rem] block border-[1px] border-[#dee2e6]'>Reclamo</span>
                <div className='px-[1.4rem] py-[1.2rem] grid gap-4'>
                  <div className='grid gap-2'>
                    <span className='font-bold'>Registrado:</span>
                    <span>{complaints.registro}</span>
                  </div>
                  <div className='grid gap-2'>
                    <span className='font-bold'>Detalle:</span>
                    <span>{complaints.detalle}</span>
                  </div>
                  <div className='grid gap-2'>
                    <span className='font-bold'>Estado:</span>
                    <span>{complaints.estado}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex items-center p-8 text-xl font-semibold text-center bg-white rounded-xl'>
                <div className='grid gap-4'>
                  <div className='flex items-center gap-2 mx-auto text-red-700'>
                    <svg className='w-7 h-7' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                      <path d='M256.002 16C123.438 16 16 123.438 16 256S123.438 496 256.002 496C388.562 496 496 388.562 496 256S388.562 16 256.002 16ZM336.969 303.029C346.344 312.404 346.344 327.592 336.969 336.967C327.588 346.348 312.404 346.34 303.031 336.967L256 289.936L208.969 336.967C199.588 346.348 184.404 346.34 175.031 336.967C165.656 327.592 165.656 312.404 175.031 303.029L222.062 255.998L175.031 208.969C165.656 199.594 165.656 184.406 175.031 175.031S199.594 165.656 208.969 175.031L256 222.062L303.031 175.031C312.406 165.656 327.594 165.656 336.969 175.031S346.344 199.594 336.969 208.969L289.938 255.998L336.969 303.029Z'/>
                    </svg>
                    <span>No Encontrado</span>
                  </div>
                  
                  <span>No se encontraron reclamos, verifique los datos introducidos</span>
                </div>
              </div>
            )
          }
        </div>
      } />
    </div>
  )
}
