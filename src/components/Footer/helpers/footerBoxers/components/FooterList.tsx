import { LinkItems } from '@/components/LinkItems/LinkItems'
import React from 'react'

export const FooterList = ({ list }:{list?:Array<string>}) => {
  return (
    <ul className='flex flex-col'>
      {
        list &&
          <>
            {
              list.map((li, pos) =>
                (
                  <li key={pos}>
                    {
                      li
                    }
                  </li>
                ))
            }
          </>
      }
      {
        !list && <LinkItems target />
      }
    </ul>
  )
}
