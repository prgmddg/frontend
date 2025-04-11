import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CustomArrow = (props:any) => {
  const { direction, onClick, big = false, inside = false } = props

  let settings:{icon:IconProp, direction:string} = { icon: faChevronRight, direction: '' }

  if (direction === 'left') settings = { icon: faChevronLeft, direction: `left-0 ${inside ? 'translate-x-[3.8rem]' : 'translate-x-[-1.8rem]'}` }
  if (direction === 'rite') settings = { ...settings, direction: `right-0 ${inside ? 'translate-x-[-3.8rem]' : 'translate-x-[1.8rem]'}` }

  return (
    <div
      onClick={onClick}
      className={`absolute hover:opacity-[.8] ${settings.direction} estamosEnLinea:hidden top-[50%]  translate-y-[-50%] z-[99] text-borderGrey ${big ? 'text-[3rem]' : 'text-[1.8rem]'}  cursor-pointer`}
    >
      <FontAwesomeIcon size='2xs' icon={settings.icon} />
    </div>
  )
}
