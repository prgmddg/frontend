'use client'

import React, { useContext, useState } from 'react'
import { MyInput } from '@/components/MyInput/MyInput'
import MyInputFlexContainer from '@/components/MyInputFlexContainer/MyInputFlexContainer'
import { MyForm } from '@/components/MyForm/MyForm'
import solicitaloAqui from '@/context/solicitaloAqui'
import { inHouseContext } from '@/context/InHouseContext'
import postRequest from '@/helpers/postRequest'
import cantidadDeAlumnos from '@/helpers/cantidadDeAlumnos'
import nivelesDelCurso from '@/helpers/nivelesDelCurso'
import CheckPoliticas from '@/components/CheckPoliticas/CheckPoliticas'

interface values
{
  ingresatuNombre:string,
  ingresatuCorreo:string,
  ingresatuTelefono:string,
  entidad:string,
  cantidadDeAlumnos:string,
  nivelDelCurso:string,
  eligeElProgramaDeTuInteres:string
  checkPolitica:boolean
}

export const SolicitaloForm = () => {
  const { inHouse } = useContext(inHouseContext)

  const programs = inHouse.map(({ titulo, id }) => { return { label: titulo, value: `${id}-${titulo}` } })

  const [values, setValues] = useState<values>(
    {
      ingresatuNombre: '',
      ingresatuCorreo: '',
      ingresatuTelefono: '',
      entidad: '',
      cantidadDeAlumnos: '',
      nivelDelCurso: '',
      eligeElProgramaDeTuInteres: '',
      checkPolitica: true
    }
  )
  const { entidad, ...rest } = values
  const isOk:boolean = Object.values(rest).every(entry => entry !== '' && entry)

  const { setIsOpen } = useContext(solicitaloAqui)

  return (
    <MyForm
      label='Enviar'
      setIsOpen={setIsOpen}
      styles='bg-[#e86b2a]'
      isOk={isOk}
      submit={() => postRequest('inhouse', creatingFormData(values), true)}
    >
      <div className='hidden'>{entidad}</div>
      <MyInputFlexContainer>
        <MyInput
          label='Ingresa tu Nombre'
          onlyText
          value={values.ingresatuNombre}
          onChange={(e) =>
            setValues({ ...values, ingresatuNombre: e.target.value })}
        />
        <MyInput
          label='Ingresa tu Correo'
          type='email'
          value={values.ingresatuCorreo}
          onChange={(e) =>
            setValues({ ...values, ingresatuCorreo: e.target.value })}
        />
      </MyInputFlexContainer>
      <MyInputFlexContainer>
        <MyInput
          label='Ingresa tu Telefono'
          max={9}
          type='number'
          value={values.ingresatuTelefono}
          onChange={(e) =>
            setValues({ ...values, ingresatuTelefono: e.target.value })}
        />
        <MyInput
          name='Entidad'
          label='Entidad (opcional)'
          value={values.entidad}
          onChange={(e) => setValues({ ...values, entidad: e.target.value })}
        />
      </MyInputFlexContainer>
      <MyInputFlexContainer>
        <MyInput
          label='Cantidad De Alumnos'
          options={cantidadDeAlumnos}
          value={values.cantidadDeAlumnos}
          onChange={(e) =>
            setValues({ ...values, cantidadDeAlumnos: e.target.value })}
        />
        <MyInput
          label='Nivel del Curso'
          options={nivelesDelCurso}
          value={values.nivelDelCurso}
          onChange={(e) =>
            setValues({ ...values, nivelDelCurso: e.target.value })}
        />
      </MyInputFlexContainer>
      <MyInputFlexContainer>
        <MyInput
          label='Elige el programa de tu interes'
          value={values.eligeElProgramaDeTuInteres}
          onChange={(e) =>
            setValues({ ...values, eligeElProgramaDeTuInteres: e.target.value })}
          options={programs}
        />
      </MyInputFlexContainer>
      <CheckPoliticas checked={values.checkPolitica} onChange={(e) => setValues(prev => { return { ...prev, checkPolitica: e.target.checked } })} />
    </MyForm>
  )
}

function creatingFormData (values:values) {
  const form = new FormData()
  form.append('pagina', 'https://www.desarrolloglobal.pe/InHouse')
  form.append('cantidad', values.cantidadDeAlumnos)
  form.append('inhouse', values.eligeElProgramaDeTuInteres.split('-')[1])
  form.append('id_inhouse', values.eligeElProgramaDeTuInteres.split('-')[0])
  form.append('correo', values.ingresatuCorreo)
  form.append('entidad', values.entidad)
  form.append('nivel', values.nivelDelCurso)
  form.append('nombres', values.ingresatuNombre)
  form.append('telefono', values.ingresatuTelefono)
  form.append('ciudad', '')

  return form
}
