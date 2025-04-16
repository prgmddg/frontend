import getRequest from '@/helpers/getRequest'
import React from 'react'
import VideoSemi from './components/VideoSemi'
import Chat from './components/Chat/Chat'
import SeminarioContext from './context/SeminarioContext'
import { notFound } from 'next/navigation'
import getMetadata from '@/helpers/getMetadata'
import { Metadata } from 'next'

export async function generateMetadata ({ params }: any): Promise<Metadata> {
  return await getMetadata(params, 'seminarios')
}

export default async function page ({ params }: any) {
  const { name } = await params
  const { res: seminarios, err } = await getRequest('seminarios', name)

  if (err) return <div className='text-center text-red-500 w-[100%]'>an error was occurred</div>
  if (seminarios === 'ERROR 02: $Id de Seminario no existe') return notFound()

  return (
    <SeminarioContext seminarios={seminarios}>
      <div className='flex w-[1920px] mx-auto max-w-[100%] gap-[2rem] 1500px:flex-col 1500px:gap-[.3rem] 1500px:h-[calc(100vh_-_80px)]'>
        <VideoSemi {...seminarios} />
        <Chat />
      </div>
    </SeminarioContext>
  )
}
