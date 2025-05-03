import LiteVimeoEmbed from '@/components/LiteVimeo'

export default function VideoBanner() {
  return (
    <div className='w-full px-4 py-20 bg-primary'>
      <div className='w-full max-w-screen-xl mx-auto text-center'>
        <span className='bg-myYellow text-primary px-[42px] py-[11px] rounded-[2rem] text-[25px] font-medium mb-[36px] block 560px:text-[1rem]'>EXPERIENCIA COMPROBADA</span>
        <span className='text-[41px] font-bold text-white block mb-[28px] 560px:text-[25px]'>
          <span className='text-myYellow'>13 años</span>&nbsp;Capacitando en Gestión Pública
        </span>
        <div className='w-full'>
          <LiteVimeoEmbed videoId='728721225' poster='/web/thumb_video_inicio.webp' autoLoad></LiteVimeoEmbed>
        </div>
      </div>
    </div>
  )
}