'use client'

import postRequest from '@/helpers/postRequest'
import Image from 'next/image'
import { useState } from 'react'

interface Props{
    id: string,
    titulo: string,
    imagen: string
}

export const FormInHouse = ({ id, titulo, imagen }: Props) => {
  const [values, setValues] = useState<any>(
    {
      ingresatuNombre: '',
      ingresatuCorreo: '',
      ingresaTuTelefono: '',
      entidad: '',
      cantidadDeAlumnos: '',
      niveldelCurso: ''
    }
  )

  const onChangeValues = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    const form = new FormData()
    form.append('pagina', 'www.desarrolloglobal.pe/InHouse')
    form.append('cantidad', values.cantidadDeAlumnos)
    form.append('inhouse', titulo)
    form.append('id_inhouse', id)
    form.append('correo', values.ingresatuCorreo)
    form.append('entidad', values.entidad)
    form.append('nivel', values.niveldelCurso)
    form.append('nombres', values.ingresatuNombre)
    form.append('telefono', values.ingresaTuTelefono)
    form.append('ciudad', '')
    postRequest('inhouse', form, true).then((res) => {
      if (res.res) {
        alert('Datos enviados correctamente')
      } else {
        alert('Error al enviar datos')
      }
    })
  }

  return (
    <form action='' className=' w-full md:w-[63%] bg-white mx-auto rounded-md p-5' onSubmit={onSubmit}>
      <Image src={imagen} alt={titulo} width={300} height={300} className='w-full' />
      <p className='text-center font-bold text-2xl mt-5'>Solicíta una proforma aquí</p>
      <div className='grid grid-cols-2 gap-3 mt-5'>
        <input type='text' className='py-[6px] px-[12px] border-[1px] border-borderGrey rounded-[.5rem] focus:border-blue-500 outline-none flex-1' placeholder='Ingresa tu Nombre' name='ingresatuNombre' onChange={onChangeValues} />
        <input type='text' className='py-[6px] px-[12px] border-[1px] border-borderGrey rounded-[.5rem] focus:border-blue-500 outline-none flex-1' placeholder='Ingresa tu Correo' name='ingresatuCorreo' onChange={onChangeValues} />
        <input type='text' className='py-[6px] px-[12px] border-[1px] border-borderGrey rounded-[.5rem] focus:border-blue-500 outline-none flex-1' placeholder='Ingresa tu Telefono' name='ingresaTuTelefono' onChange={onChangeValues} />
        <input type='text' className='py-[6px] px-[12px] border-[1px] border-borderGrey rounded-[.5rem] focus:border-blue-500 outline-none flex-1' placeholder='Entidad (Opcional)' name='entidad' onChange={onChangeValues} />
        <select className='py-[6px] px-[12px] border-[1px] border-borderGrey rounded-[.5rem] focus:border-blue-500 outline-none flex-1 min-w-[0px]' name='cantidadDeAlumnos' onChange={onChangeValues}>
          <option value='none'>Cantidad de Alumnos</option>
          <option value='5-10'>De 5 a 10 participantes</option>
          <option value='5-15'>De 10 a 15 participantes</option>
          <option value='15-20'>De 15 a 20 participantes</option>
          <option value='20-30'>De 20 a 30 participantes</option>
          <option value='30-40'>De 30 a 40 participantes</option>
          <option value='40-50'>De 40 a 50 participantes</option>
        </select>
        <select className='py-[6px] px-[12px] border-[1px] border-borderGrey rounded-[.5rem] focus:border-blue-500 outline-none flex-1 min-w-[0px]' name='niveldelCurso' onChange={onChangeValues}>
          <option value='none'>Nivel del Curso</option>
          <option value='Basico'>Basico</option>
          <option value='Intermedio'>Intermedio</option><option value='Avanzado'>Avanzado</option>
        </select>
      </div>
      <button className='bg-green-500 text-white rounded-md mt-5 w-full p-3'>Enviar</button>

    </form>
  )
}
