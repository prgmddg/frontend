import React from 'react'
import showPassword from './interfaces/showPassword'
import onlyNumFunc from '@/helpers/onlyNumFunc'
import onlyTextFunc from '@/helpers/onlyTextFunc'
import maxNum from '@/helpers/maxNum'

interface props
{
  name?:string,
  onlyText?:boolean,
  readonly?:boolean,
  type?:string,
  stylesInput?:string,
  options?:Array<string|{value:string, label:string}>,
  showPassword?:showPassword
  label:string,
  onChange?:(e:any)=>void,
  value?:string
  error?:boolean,
  checked?:boolean
  max?:number,
}

export const MyInput = (props:props) => {
  const
    {
      name,
      onlyText,
      readonly,
      type = 'text',
      options = [],
      showPassword = { show: true, shoPassword: false, type: undefined },
      onChange = () => null,
      label,
      value,
      max,
      checked
    } = props

  const regExp = /[\s]\w/ig

  let myName = ''

  if (name) {
    myName = name
  } else if (label !== '') {
    myName = label.toLowerCase().replace(regExp, (match) => {
      return match[1].toUpperCase()
    })
  }

  const styles = 'py-[6px] px-[12px] border-[1px] border-borderGrey rounded-[.5rem] focus:border-blue-500 outline-none flex-1'

  const myOptions = options.map(opt => {
    if (typeof opt === 'string') return { value: opt, label: opt }
    return opt
  })

  return (
    <>
      {options.length === 0 && (
        <>
          <input
            name={myName}
            placeholder={label}
            className={styles}
            readOnly={readonly}
            size={1}
            type={showPassword.type || type}
            onKeyPress={(e: any) => {
              if (type === 'number') onlyNumFunc(e)
              if (onlyText) onlyTextFunc(e)
            }}
            onChange={(e) => {
              if (max) {
                e.target.value = maxNum(e.target.value, max)
              }
              onChange(e)
            }}
            value={value}
            required
            checked={checked}
            min={0}
          />
          {type === 'checkbox' && <span className='mb-[.5rem] inline-block'>{label}</span>}
        </>
      )}
      {myOptions.length > 0 && (
        <select
          className={styles + ' min-w-[0px]'}
          size={1}
          onChange={onChange}
          defaultValue='none'
        >
          <option value='none' disabled>
            {label}
          </option>
          {myOptions.map((opt, pos) => {
            return (
              <option key={pos} value={opt.value}>
                {opt.label}
              </option>
            )
          })}
        </select>
      )}
    </>
  )
}
