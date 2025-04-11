'use client'

import { notFound, usePathname } from 'next/navigation'
import jobs from '../_data/jobs.json'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function CursosNombre ({ params }: any) {
  const [fileData, setFileData] = useState<null | string>(null)
  const [name, setName] = useState<null | string>(null)
  const [load, setLoad] = useState(false)

  const [date, setDate] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)
  const [year, setYear] = useState<number>(0)

  const path = usePathname()
  const job = jobs.find((job) => job.tag === params.name)
  if (job === undefined || !job.active) notFound()

  useEffect(() => {
    const day = new Date(job.date)
    setDate(day.getDate())
    setMonth(day?.getMonth() ?? 0)
    setYear(day?.getFullYear())
  }, [job])

  useEffect(() => {
    if (fileData === null || name === null) return

    const data = new FormData()
    data.append('cv', fileData)
    data.append('name', name)
    data.append('site', path.split('/').at(-1) ?? '')

    fetch('/api/send-cv', {
      method: 'POST',
      body: data
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error interno')
        setLoad(false)
        setFileData(null)
        Swal.fire({
          title: 'CV Enviado correctamente',
          icon: 'success'
        })
      })
      .catch((error) => {
        setLoad(false)
        setFileData(null)
        return Swal.fire({
          title: error.message,
          icon: 'error'
        })
      })
  }, [fileData, name, path])

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  const fns = (list: (
    | { text: string[]; type: string; format: string }
    | { text: string; type: string; format: string }
  )[]) => {
    return list.map((f, index) => (
      f.type === 'a' && typeof f.text !== 'string'
        ? (
          <div key={index}>
            {f.text.map((t, index2) => (
              <p key={`${index}-${index2}`} className='flex items-start gap-4'>
                <span className='font-bold text-xl font-extrabold'>.</span>
                {f.format === 'n'
                  ? t
                  : (
                    <a className='hover:border-b-2 hover:border-primary' href={t}>{t}</a>
                  )}
              </p>
            ))}
          </div>
        )
        : (
          <p className={f.format === 'b' ? 'font-bold' : ''} key={index}>{f.text}</p>
        )
    ))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoad(true)
    const file = e.target.files?.[0]

    if (!file) {
      setLoad(false)
      return
    }

    if (file.name.split('.').at(-1) !== 'pdf') {
      setLoad(false)
      return Swal.fire({ title: 'El archivo debe ser un pdf', icon: 'error' })
    }

    if (file.size / 1024 / 1024 > 5) {
      setLoad(false)
      return Swal.fire({ title: 'El archivo no debe pesar más de 5MB', icon: 'error' })
    }

    const reader = new FileReader()
    reader.onload = () => {
      setFileData(reader.result as string) // This will be the base64 representation
      setName(file.name.replace('.pdf', ''))
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className='max-w-[900px] w-full mx-auto grid gap-6 my-10 mx-4 p-8 shadow-xl shadow-gray-500/50 rounded-lg relative'>
      <h1 className='text-4xl !font-bold text-[#0E2FAA]'>{job.title}</h1>

      <div className='font-bold grid gap-2'>
        <div className='flex items-center gap-4'>
          <svg
            className='w-6 h-6 text-primary'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
          >
            <path d='M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l448 0c53 0 96-43 96-96l0-320c0-53-43-96-96-96L96 0zM64 96c0-17.7 14.3-32 32-32l448 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32L64 96zm159.8 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 309.3c0 14.7 11.9 26.7 26.7 26.7l56.1 0c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4l-69.3 0C119.9 256 96 279.9 96 309.3zM461.2 336l56.1 0c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3l-69.3 0c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1l-80 0c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47zM512 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z' />
          </svg>
          {job.area}
        </div>
        <div className='flex items-center gap-4'>
          <svg
            className='w-6 h-6 text-primary'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
          >
            <path d='M480 48c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48l0 48-64 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72c0-13.3-10.7-24-24-24S64 10.7 64 24l0 72L48 96C21.5 96 0 117.5 0 144l0 96L0 464c0 26.5 21.5 48 48 48l256 0 32 0 96 0 160 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-112 0 0-144zm96 320l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 416l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM560 256c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 176l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM112 320l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zm304-48l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16z' />
          </svg>
          {job.city}
        </div>
        <div className='flex items-center gap-4'>
          <svg
            className='w-6 h-6 text-primary'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z' />
          </svg>

          {`${date} ${
            months[month]
          } ${year}`}
        </div>
      </div>

      <p className='text-2xl !font-bold'>Horarios</p>
      <div className='grid gap-2'>{fns(job.horarios)}</div>

      <p className='text-2xl !font-bold'>Requisitos</p>
      <div className='grid gap-2'>{fns(job.requisitos)}</div>

      <p className='text-2xl !font-bold'>Funciones del Cargo</p>
      <div className='grid gap-2'>{fns(job.funciones)}</div>

      <p className='text-2xl !font-bold'>Requerimientos</p>
      <div className='grid gap-2'>{fns(job.requerimientos)}</div>

      {job.aprendizaje && (
        <>
          <p className='text-2xl !font-bold'>
            APRENDIZAJE Y PERFECCIONAMIENTO EN
          </p>
          <div className='grid gap-2'>{fns(job.aprendizaje)}</div>
        </>
      )}

      <p className='text-2xl !font-bold'>Beneficios</p>
      <div className='grid gap-2'>{fns(job.beneficios)}</div>

      <label
        htmlFor='fileCV'
        className='border-primary border-2 rounded-lg font-bold hover:bg-primary hover:text-white transition-all p-2.5 text-primary text-center'
      >
        Enviar Mi CV
      </label>
      <input
        className='sr-only'
        accept='application/pdf'
        id='fileCV'
        type='file'
        onChange={handleFileChange}
      />

      <div
        className={
          load
            ? 'text-primary bg-black/5 absolute inset-0 flex items-center'
            : 'hidden'
        }
      >
        <svg
          className='w-12 h-12 animate-spin mx-auto'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z' />
        </svg>
      </div>
    </div>
  )
}
