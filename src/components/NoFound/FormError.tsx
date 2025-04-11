
'use client'
import getRequest from '@/helpers/getRequest'
import postRequest from '@/helpers/postRequest'
import apiurl from '@/types/apiUrl'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, ChangeEvent, useEffect } from 'react'

export const FormError = () => {
  const [valoresSelect, setValoresSelect] = useState<any>([])
  const [valoresForm, setValoresForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    tipo: 'cursos',
    titulo: ''
  })

  const onChangeValue = (e: ChangeEvent<any>) => {
    setValoresForm({
      ...valoresForm,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    getRequest(valoresForm.tipo as apiurl).then(res => setValoresSelect(res.res.envivo))
  }, [valoresForm.tipo])

  const onEnviarDatos = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData()
    data.append('nombres', valoresForm.nombre)
    data.append('correo', valoresForm.correo)
    data.append('telefono', valoresForm.telefono)
    data.append('curso', valoresForm.titulo)
    data.append('id_curso', valoresForm.titulo.split(' ')[0])
    data.append('ciudad', '')
    data.append('contenido', 'Buenas tardes deseo informacion del ')
    data.append('pagina', 'https://www.desarrolloglobal.pe')
    const { res } = await postRequest('cursos', data, true)
    if (res) {
      return alert('Datos enviados Correctamente')
    }
    alert('Error al enviar datos')
  }

  return (
    <div className='px-5 lg:px-0 py-5 lg:py-16'>
      <form action='' className='bg-white rounded-md mx-auto w-full md:w-[60%] p-10 space-y-4' onSubmit={onEnviarDatos}>
        <p className='text-center font-bold text-[#2A50E8] text-[25px]'> ESTOY INTERESADO</p>
        <p className='text-center'>Por favor, completa el formulario a continuación y estarás en la lista para recibir información sobre nuestros programas.</p>
        <input type='text' className='border rounded-md w-full p-2' placeholder='Nombre' onChange={onChangeValue} name='nombre' required />
        <input type='email' className='border rounded-md w-full p-2' placeholder='Correo Electrónico' onChange={onChangeValue} name='correo' required />
        <input type='text' className='border rounded-md w-full p-2' placeholder='Celular / Whatsapp' onChange={onChangeValue} name='telefono' required />
        <select name='tipo' onChange={onChangeValue} className='border rounded-md p-2 w-full'>
          <option value='cursos'>Cursos</option>
          <option value='diplomas'>Diploma</option>
          <option value='diplomados'>Diplomados</option>
        </select>
        <select className='border rounded-md p-2 w-full' onChange={onChangeValue} name='titulo'>
          {
            valoresForm
              ? valoresSelect.map((valores:any) => (
                <option value={`${valores.id} ${valores.titulo}`} key={valores.id}>{valores.titulo}</option>
              ))
              : (<span>Cargando.....</span>)
          }
        </select>

        <div className='flex items-center justify-center gap-2'>
          <input type='checkbox' checked />
          <label className='text-xs'>Tu información está segura con nosotros y nunca será compartida.</label>
        </div>
        <button className='bg-[#0052CC] p-3 text-white font-bold w-full rounded-md'>¡Regístrate Ahora!</button>
        <a href='' target='_blank' className='border border-[#00BC39] text-[#00BC39] font-bold rounded-md w-full p-3 flex items-center gap-3 justify-center'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-2xl' />
          Registro por WhasApp
        </a>
      </form>

    </div>
  )
}
