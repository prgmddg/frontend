import apiurl from '@/types/apiUrl'

interface props
{
  type:apiurl
  tag?:string
  prospecto?:boolean
  id?:string
  limit?:string
}

export default function gettingUrl (params:props) {
  const { type, tag = '', prospecto = false, id = '' } = params

  const url = 'https://aula.desarrolloglobal.pe/v03/api/'

  if (prospecto) {
    return `https://aula.desarrolloglobal.pe/v03/api/${type}/setProspecto`
  }

  switch (type) {
  case 'modal':
  {
    return 'https://aula.desarrolloglobal.pe/v03/api/modal/envivo'
  }
  case 'diplomas':
  {
    return 'https://aula.desarrolloglobal.pe/v03/api/diplomas/envivo/' + tag
  }
  case 'cursos':
  {
    return 'https://aula.desarrolloglobal.pe/v03/api/cursos/envivo/' + tag
  }
  case 'geo':
  {
    return 'https://ipgeolocation.abstractapi.com/v1/?api_key=5439d75ced19410c865a3d67a41f04d6'
  }
  case 'diplomados':
  {
    return 'https://aula.desarrolloglobal.pe/v03/api/diplomados/envivo/' + tag
  }
  case 'inhouse':
  {
    return 'https://aula.desarrolloglobal.pe/v03/api/inhouses/' + tag
  }
  case 'profesores':
  {
    return 'https://aula.desarrolloglobal.pe/v03/api/profesores/' + id
  }
  case 'login':
  {
    return `${url}sesiones/login`
  }
  case 'validation':
  {
    return `${url}sesiones/verificar`
  }
  case 'logout':
  {
    return `${url}sesiones/logout`
  }
  case 'signUp':
  {
    return `${url}sesiones/registrar`
  }
  case 'seminarios':
  {
    return 'https://aula.desarrolloglobal.pe/v03/api/seminarios/' + tag
  }
  case 'grabadosDiplomas':{
    return 'https://aula.desarrolloglobal.pe/v03/api/diplomas/grabado/' + tag
  }
  case 'grabadosCurso':{
    return 'https://aula.desarrolloglobal.pe/v03/api/cursos/grabado/' + tag
  }

  default: return ''
  }
}
