import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import podcasts from '../_data/podcasts.json'
import Chat from './components/Chat/Chat'
import VideoSemi from './components/VideoSemi'
import SeminarioContext from './context/SeminarioContext'

export async function generateMetadata ({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params

  const podcast = podcasts.find(podcast => podcast.etiqueta === name)

  if (!podcast) return notFound()

  return {
    title: `Desarrollo Global | ${podcast.titulo}`,
    alternates: {
      canonical: `https://desarrolloglobal.pe/podcasts/${podcast.etiqueta}`
    },
  }
}

export default async function Page ({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params

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
