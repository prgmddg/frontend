import { BASE_API_URL } from '@/lib/const'

interface ResponsePrograms {
  envivo: [{
    etiqueta: string
  }]
  grabado: [{
    etiqueta: string
  }]
}

interface ResponseInhouses {
  etiqueta: string
}

interface ResponseSeminarios {
  proximos: [{
    etiqueta: string
  }]
  terminados: [{
    etiqueta: string
  }]
}

export async function getPrograms (type: 'cursos' | 'diplomas' | 'diplomados', typeClass : 'envivo' | 'grabado') {
  const url = `${BASE_API_URL}/${type}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = (await response.json()) as ResponsePrograms

  return data[typeClass]
}

export async function getInhouses (): Promise<ResponseInhouses[]> {
  const url = `${BASE_API_URL}/inhouses`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return (await response.json()) as ResponseInhouses[]
}

export async function getSeminarios (type: 'proximos' | 'terminados') {
  const url = `${BASE_API_URL}/seminarios`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = (await response.json()) as ResponseSeminarios

  return data[type]
}
