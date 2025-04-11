import React from 'react'
import VideoSemi from './components/VideoSemi'
import Chat from './components/Chat/Chat'
import SeminarioContext from './context/SeminarioContext'
import { notFound } from 'next/navigation'
import getMetadata from '@/helpers/getMetadata'
import { Metadata } from 'next'
import podcasts from '../_data/podcasts.json'

export async function generateMetadata ({ params }: any): Promise<Metadata> {
  const { name } = await params
  return await getMetadata({ name }, 'seminarios')
}

export default async function Page ({ params }: any) {
  const { name } = await params // Desestructuramos primero

  const podcast = podcasts.find(podcast => podcast.etiqueta === name)

  if (!podcast) return notFound()

  return (
    <SeminarioContext seminarios={podcast}>
      <div className='flex w-[1920px] mx-auto max-w-[100%] gap-[2rem] 1500px:flex-col 1500px:gap-[.3rem] 1500px:h-[calc(100vh_-_80px)]'>
        <VideoSemi {...podcast} />
        <Chat />
      </div>
    </SeminarioContext>
  )
}
