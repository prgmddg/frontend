import React, { Dispatch, Fragment, SetStateAction } from 'react'
import ReactPlayer from 'react-player'
import { Dialog, Transition } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface Props {
  url: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

export default function VideoPopUp ({ show, setShow, url }: Props) {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog
        className='fixed inset-0 z-[9999999] overflow-y-auto bg-black bg-opacity-[.8]'
        onClose={() => setShow(false)}
      >
        <div className='min-h-screen px-[.8rem] flex items-center justify-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='relative rounded-[.5rem] overflow-hidden flex-auto max-w-[800px]'>
              <ReactPlayer url={url} playing width='100%' height='auto' style={{ aspectRatio: '16/9' }} controls />
              <button
                className={twMerge('absolute top-[1rem] right-[1rem] text-[#858484] hover:text-[#333]', 'bg-black w-[2.5rem] h-[2.5rem] rounded-[100%] border-[1px] border-white flex justify-center items-center text-[1.5rem] text-white hover:text-white top-[0rem]')}
                onClick={() => setShow(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
