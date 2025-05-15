import getMetadata from '@/helpers/getMetadata'
import getRequest from '@/helpers/getRequest'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Chat from './components/Chat/Chat'
import VideoSemi from './components/VideoSemi'
import SeminarioContext from './context/SeminarioContext'

export async function generateMetadata ({ params }: any): Promise<Metadata> {
  return await getMetadata(params, 'seminarios')
}

export default async function page ({ params }: any) {
  const { name } = await params
  const { res: seminarios, err } = await getRequest('seminarios', name)

  if (seminarios === 'ERROR 02: $Id de Seminario no existe' || err) return notFound()

  return (
    <SeminarioContext seminarios={seminarios}>
      <div className='flex w-[1920px] mx-auto max-w-[100%] gap-[2rem] 1500px:flex-col 1500px:gap-[.3rem] 1500px:h-[calc(100vh_-_80px)]'>
        <VideoSemi {...seminarios} />
        <Chat />
      </div>
    </SeminarioContext>
  )
}
