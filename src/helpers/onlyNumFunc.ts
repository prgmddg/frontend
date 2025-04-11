import { KeyboardEvent } from 'react'

export default function onlyNumFunc(e:KeyboardEvent<HTMLInputElement>)
{
  if (e.code.length === 7||e.code.includes('Digit')) return null
  e.preventDefault()
}