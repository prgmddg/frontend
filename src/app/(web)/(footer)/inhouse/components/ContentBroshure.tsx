'use client'

import useAccordion from '@/hooks/useAccordion'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContentBrochure ({ title, content }: { title: string, content: string[] }) {
  const { open, maxHeight, ref, handleOpen } = useAccordion()

  return (
    <div className='max-w-[1320px] w-full mx-auto'>
      <div
        className='w-full block overflow-hidden transition-all ease-in-out duration-300 rounded-b-lg border relative min-h-[60px] h-full rounded-t-xl'
        style={{ maxHeight: open ? maxHeight : 0 }}
      >
        <div
          className='px-10 mob:px-[.8rem] pt-20 pb-4'
          ref={ref}
        >
          <ul className='list-disc text-left'>
            {
              content.map((item, index) => (<li key={index}>{item}</li>))
            }
          </ul>
        </div>

        <button onClick={handleOpen} className='absolute top-0 left-0 right-0 text-lg p-4 font-semibold text-left rounded-xl bg-[#003399] text-white w-full flex items-center justify-between gap-4'>
          <span>{title}</span>
          <FontAwesomeIcon
            className='text-white'
            icon={open ? faMinus : faPlus}
          />
        </button>
      </div>
    </div>
  )

}