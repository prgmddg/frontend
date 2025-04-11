import React from 'react'
import Link from 'next/link'

const list = [
  'Políticas de Protección de Datos',
  'Terminos de servicio',
  'Políticas de Cookies',
  'Política de la Calidad'
]

export const LinkItems = ({ styles = '', target = false }:{styles?:string, target?:boolean}) => {
  return (
    <>
      {list.map((lis, pos) => (
        <li key={pos} className={styles}>
          <Item lis={lis} pos={pos} target={target} />
        </li>
      ))}
    </>
  )
}

function Item ({ pos, lis, target }:{pos:number, lis:string, target:boolean}) {
  const sinTildes = lis.replace(/[áéíóú]/gi, (match) => {
    return match.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  })

  function getLink () {
    if (pos === 0) return ''
    return sinTildes.toLowerCase().replace(/\s/g, '-')
  }

  return (
    <Link href={`/politicas-de-privacidad/${getLink()}`} target={target ? '_blank' : ''} rel='noreferrer'>{lis}</Link>
  )
}
