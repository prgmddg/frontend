import LiteVimeoEmbed from '@/components/LiteVimeo'
import { MyBlock } from '@/old-components/MyBlock/MyBlock'
export const CentroDeCapacitacion = () => {
  return (
    <MyBlock
      styles={{
        container: 'bg-darkBlueBg py-[134px] bg-primary',
        section: 'py-0'
      }}
    >
      <span className='bg-myYellow text-primary px-[42px] py-[11px] rounded-[2rem] text-[25px] font-medium mb-[36px] block 560px:text-[1rem]'>EXPERIENCIA COMPROBADA</span>
      <span className='text-[41px] font-bold text-white block mb-[28px] 560px:text-[25px]'>
        <span className='text-myYellow'>13 años</span>&nbsp;Capacitando en Gestión Pública
      </span>
      <div className='w-[880px] max-w-[100%] mx-auto h-[500px]'>
        <LiteVimeoEmbed videoId='728721225' poster='/web/thumb_video_inicio.webp' autoLoad></LiteVimeoEmbed>
      </div>
    </MyBlock>
  )
}
