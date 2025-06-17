'use client'

import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import { SolicitaloAqui } from '@/old-components/SolicitaloAqui/SolicitaloAqui'
import postRequest from '@/helpers/postRequest'
import { useState } from 'react'
import Swal from 'sweetalert2'

export const InHouseBanner = () => {
  const [show, setShow] = useState<boolean>(false)
  const [values, setValues] = useState(
    {
      ingresatuNombre: '',
      ingresatuCorreo: '',
      ingresaTuTelefono: '',
      entidad: '',
      cantidadDeAlumnos: '',
      niveldelCurso: '',
      inhouseXD: 'Programa InHouse'
    }
  )

  const onChangeInhouse = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const enviar = async (e: any) => {
    e.preventDefault()

    const form = new FormData()
    form.append('pagina', 'www.desarrolloglobal.pe/InHouse/')
    form.append('cantidad', values.cantidadDeAlumnos)
    form.append('inhouse', values.inhouseXD)
    form.append('id_inhouse', '0')
    form.append('correo', values.ingresatuCorreo)
    form.append('entidad', values.entidad)
    form.append('nivel', values.niveldelCurso)
    form.append('nombres', values.ingresatuNombre)
    form.append('telefono', values.ingresaTuTelefono)
    form.append('ciudad', '')

    const { res } = await postRequest('inhouse', form, true)

    if (res === true) {
      fetch('/api/send-notify', {
        method: 'POST',
        body: form
      })
        .then((res) => {
          if (res.ok) {
            Swal.fire({
              title: 'Se han enviado los datos con Exito 😊',
              icon: 'success'
            })

            setValues({
              ingresatuNombre: '',
              ingresatuCorreo: '',
              ingresaTuTelefono: '',
              entidad: '',
              cantidadDeAlumnos: '',
              niveldelCurso: '',
              inhouseXD: ''
            })
          }
        })
        .catch(() => {
          Swal.fire({
            title: 'Error al enviar los datos ☹️',
            icon: 'error'
          })
        })
    } else {
      Swal.fire({
        title: 'Error al enviar los datos ☹️',
        icon: 'error'
      })
    }
  }

  return (
    <>
      <div className='text-[#fff] grid grid-cols-1 lg:grid-cols-2 mb-14 mt-5'>
        <section className='flex-1 block'>
          <div className='inline-block w-auto py-1 text-lg font-bold bg-yellow-400 rounded-md px-7'>
            <h1>CURSOS INHOUSE</h1>
          </div>
          <h2 className='font-extrabold text-[50px] leading-none text-[#fff] inHouseBanner2:text-[27px] flex flex-col mb-[1.2rem] inHouseBanner:flex-row inHouseBanner:flex-wrap inHouseBanner:gap-[.4rem] justify-start mt-5'>
            <span>CAPACITACIÓN</span>
            <span>EN ADMINISTRACIÓN</span>
            <span>Y GESTIÓN PÚBLICA</span>
          </h2>
          <p className='text-[16px] font-medium block mb-[2rem] inHouseBanner:pr-[0] text-balance inHouseBanner:text-start'>
            Ofrecemos más de 100 programas de capacitación en modalidad in-house, diseñados para satisfacer las necesidades específicas de tu entidad o institución.
          </p>
          <p className='text-[16px] font-medium block mb-[2rem] inHouseBanner:pr-[0] text-balance inHouseBanner:text-start'>
          ¿Listo para ejecutar tu Plan de Desarrollo de las Personas (PDP) 2025?  Nuestros cursos inhouse están diseñados para alinear las metas individuales con los objetivos estratégicos de tu organización, potenciando habilidades críticas y promoviendo el compromiso laboral. Implementar un PDP efectivo no solo impulsa el crecimiento profesional, sino que también mejora la productividad y retención del talento. Adaptamos cada programa a tus necesidades específicas para maximizar el impacto. ¡Haz del desarrollo de tu equipo una prioridad este 2025!
          </p>
          <div className='flex items-center justify-between p-4 bg-white rounded-md'>
            <picture>
              <img src='/DG-Logotipo_Color.webp' alt='logo Desarrollo Global' className='w-full aspect-auto max-w-[155px] lg:max-w-[200px]' width={0} height={0} loading='eager' />
            </picture>

            <picture>
              <img src='/ISO-2025.webp' alt='logo Desarrollo Global' className='w-full aspect-auto max-w-[200px]' width={0} height={0} loading='eager' />
            </picture>
          </div>
          <p className='mt-5'>Nuestra empresa cuenta con la &quot;Certificación de calidad&quot; ISO 9001-2015</p>
        </section>
        <section className='mt-5 lg:mt-0'>
          <form action='' className='bg-white p-8 rounded-md mx-auto text-black w-full md:w-[75%] text-center space-y-5' onSubmit={enviar}>
            <p className='text-4xl font-bold'>Solicita una cotizacion pesonalizada 👇</p>
            <p className=''>¡Completa el formulario y solicita tu proforma personalizada ahora mismo!</p>
            <div className='flex flex-wrap justify-between space-y-3'>
              <input type='text' className='w-full p-2 mt-3 border rounded-md' name='ingresatuNombre' placeholder='Nombre' onChange={onChangeInhouse} />
              <input type='text' className='w-full p-2 border rounded-md' name='ingresatuCorreo' placeholder='Correo Electronico' onChange={onChangeInhouse} />
              <input type='text' className='w-full p-2 border rounded-md' name='ingresaTuTelefono' placeholder='Telefono/Celular' onChange={onChangeInhouse} />
              <input type='text' className='w-full p-2 border rounded-md' name='entidad' placeholder='Empresa/Entidad' onChange={onChangeInhouse} />
              <textarea className='w-full p-2 border rounded-md' placeholder='¿Cúal es tu requerimiento?' name='niveldelCurso' onChange={onChangeInhouse} />
              <div className='flex items-center gap-2'>
                <input type='checkbox' defaultChecked />
                <label className='text-xs'>Acepto los Terminos y Condiciones y las politicas de Privacidad de Datos.</label>
              </div>
              <div className='grid w-full grid-cols-2 gap-3'>
                <button className='bg-[#f07f49] text-white rounded-md p-3 font-bold w-full'>Solicita Proforma</button>
                <a href='https://api.whatsapp.com/send?phone=51993403219&text=Hola,%20Solicito%20información%20de%20los%20CURSOS%20IN-HOUSE' target='_blank' className='text-white bg-[#0abe28] rounded-md p-3 font-bold w-full' rel='noreferrer'>WhatsApp</a>
              </div>
            </div>

          </form>
        </section>
      </div>
      <MyPopUp
        isOpen={show}
        setIsOpen={setShow}
        popUp={<SolicitaloAqui setIsOpen={setShow} />}
      />
    </>
  )
}
