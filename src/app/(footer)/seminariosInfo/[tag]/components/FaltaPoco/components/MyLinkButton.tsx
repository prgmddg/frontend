import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyLinkButton (props:any) {
  const
    {
      icon,
      label,
      styles = '',
      path = '#',
      iconSize = '2xl',
      type = 'link',
      onClick = () => null
    } = props

  const theStyles = `hover:!text-[#fff] hover:bg-blue-700 hover:translate-y-[-.2rem] rounded-[.5rem] text-[#fff] font-bold bg-blue-600 flex items-center gap-[.5rem] px-[1.3rem] py-[.5rem] transition-all duration-200 ease-in-out ${styles}`

  return (
    <>
      {type === 'link' && (
        <a
          className={theStyles} href={path}
          target='_blank' rel='noreferrer'
        >
          <FontAwesomeIcon size={iconSize} icon={icon} />
          <span>{label}</span>
        </a>
      )}
      {type === 'button' && (
        <button onClick={onClick} className={theStyles}>
          <FontAwesomeIcon size={iconSize} icon={icon} />
          <span>{label}</span>
        </button>
      )}
    </>
  )
}
