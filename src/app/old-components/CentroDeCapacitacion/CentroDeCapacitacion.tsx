import { MyBlock } from '@/old-components/MyBlock/MyBlock'
import { Video } from '@/old-components/Video/Video'

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
        <Video src='http://player.vimeo.com/video/728721225' styles='w-full h-full' />
      </div>
    </MyBlock>
  )
}
