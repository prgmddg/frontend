import React from 'react'
import { MoonLoader } from 'react-spinners'

export default function Spinner ({ size = 100, style, color = 'rgb(96,165,250)' }:{ size?: number, style?: string, color?: string }) {
  return (
    <div className={`flex justify-center items-center mb-[1rem] ${style}`}>
      <MoonLoader size={size} color={color} />
    </div>
  )
}
