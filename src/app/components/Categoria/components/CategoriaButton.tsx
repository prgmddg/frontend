import program from '@/types/program'
import { Dispatch, SetStateAction, useContext } from 'react'
import Link from 'next/link'
import { MyProgramContext } from '@/app/contextMyProgram'

interface props {
  label: program,
  program?: program,
  setMyProgram?: Dispatch<SetStateAction<program>>
  href?: string,
  blank?: boolean,
  bigger?: boolean
}

export const CategoriaButton = (props: props) => {
  const cn = useContext(MyProgramContext)
  if (cn === null) return

  const
    {
      label,
      href = undefined,
      blank = false,
      bigger = false
    } = props

  const isActive = label === cn.pr

  const optionStyle = `py-[.6rem] px-[.8rem] text-center rounded-[15rem] ${isActive ? 'bg-[#fff] text-primary' : 'bg-transparent text-[#fff]'
  } ${bigger ? 'program-selector:flex-3' : 'program-selector:flex-1'}`

  return (
    <>
      {!href && (
        <button
          className={optionStyle} onClick={() => {
            cn.togglePr(label)
          }}
        >
          <MyLabel label={label} />
        </button>
      )}
      {href && (
        <>
          <Link className={optionStyle} href={href} target={blank ? '_blank' : ''} rel='noreferrer'>
            <MyLabel label={label} />
          </Link>
        </>
      )}
    </>
  )
}

function MyLabel ({ label }: { label: string }) {
  return <span className='capitalize font-bold transition-all duration-[200ms]'>{label}</span>
}
