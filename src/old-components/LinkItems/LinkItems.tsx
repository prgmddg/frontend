import Link from 'next/link'

const list = [
  'Políticas de Protección de Datos',
  'Terminos de servicio',
  'Políticas de Cookies',
  'Política de la Calidad'
]

export const LinkItems = ({ styles = '' }:{styles?:string}) => {
  return (
    <>
      {list.map((lis, pos) => (
        <li key={pos} className={styles}>
          <Item lis={lis} pos={pos} />
        </li>
      ))}
    </>
  )
}

function Item ({ pos, lis }:{pos:number, lis:string}) {
  const sinTildes = lis.replace(/[áéíóú]/gi, (match) => {
    return match.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  })

  function getLink () {
    if (pos === 0) return ''
    return sinTildes.toLowerCase().replace(/\s/g, '-')
  }

  return (
    <Link href={`/politicas-de-privacidad/${getLink()}`} rel='noreferrer'>{lis}</Link>
  )
}
