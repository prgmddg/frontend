'use client'
import Link from 'next/link'
import Options from '../interfaces/options'
import { SetStateAction, useEffect, useState } from 'react'

interface props
{
  options:Options,
  setShow:React.Dispatch<SetStateAction<boolean>>
  show:boolean
}

export const MobMenuOption = (props:props) => {
  const { href, label } = props.options
  const { setShow, show } = props
  const [myShow, setMyShow] = useState<boolean>(false)

  useEffect(() => {
    if (!show) {
      setMyShow(false)
    }
  }, [show])

  return (
    <Link href={href} className='my-hover' onClick={() => setShow(false)}>
      <Label label={label} />
      <span className='hidden'>{myShow}</span>
    </Link>
  )
}

function Label ({ label }:{label:string}) {
  return <span className='capitalize font-bold'>{label}</span>
}
