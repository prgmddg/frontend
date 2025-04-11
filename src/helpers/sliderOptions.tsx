import { CustomArrow } from '@/components/CustomArrow/CustomArrow'

const sliderOptions =
{
  dots: true,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  
  arrows: true,
  prevArrow: <CustomArrow direction='left' />,
  nextArrow: <CustomArrow direction='rite' />
}

export default sliderOptions
