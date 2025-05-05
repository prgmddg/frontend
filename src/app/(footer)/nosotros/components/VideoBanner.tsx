import LiteVimeoEmbed from '@/components/LiteVimeo'

export default function VideoBanner() {
  return (
    <div className='w-full px-4 py-20 bg-primary'>
      <div className='grid w-full max-w-screen-xl gap-8 mx-auto text-center'>
        <h2 className='text-4xl font-bold text-white'>Centro de Capacitación y Desarrollo Global</h2>
        <div className='w-full'>
          <LiteVimeoEmbed videoId='728721225' poster='/web/thumb_video_inicio.webp' autoLoad></LiteVimeoEmbed>
        </div>
        <p className='text-3xl font-semibold text-white'>Más de 13 años brindando capacitaciones virtuales.</p>
      </div>
    </div>
  )
}