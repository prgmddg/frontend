import { KeyboardEvent } from 'react'

export default function onlyTextFunc(e:KeyboardEvent<HTMLInputElement>)
{
  if (e.code.includes('Key')) return null
  e.preventDefault()
}