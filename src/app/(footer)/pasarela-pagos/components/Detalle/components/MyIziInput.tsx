import React from 'react'

export default function MyIziInput ({ field }:any) {
  return (
    <div className='border-[1px] border-gray-200 flex items-center px-[1rem] pt-[.3rem] pb-[.6rem] rounded-[.5rem] flex-[1]'>
      {field}
    </div>
  )
}
