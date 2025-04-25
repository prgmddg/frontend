'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface props
{
  style?:React.CSSProperties,
  res?:number,
  styles?:string
  src?:string
}

export const Video = (props:props) => {
  const {
    src = 'http://player.vimeo.com/video/728721225'
  } = props

  return (
    <ReactPlayer url={src} width='100%' controls height='100%' config={{
      vimeo: {
        playerOptions: {
          dnt: 1,
        }
      }
    }} />
  )
}
