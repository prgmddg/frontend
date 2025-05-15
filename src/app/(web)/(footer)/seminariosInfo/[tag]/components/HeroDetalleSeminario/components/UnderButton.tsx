import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function UnderButton (props:any) {
  const { icon, data, label, styles } = props

  return (
    <p className={`bg-[#fff] w-[22rem] mob3:w-[auto] px-[1rem] py-[.5rem] inline-flex justify-start gap-[.7rem] items-center text-[#000] rounded-[.5rem] ${styles}`}>
      <FontAwesomeIcon icon={icon} />
      <strong className='flex-1 max-w-[100%] whitespace-nowrap text-ellipsis overflow-hidden' title={`${label}: ${data}`}>{label}: {data}</strong>
    </p>
  )
}
