import { LinkItems } from '@/old-components/LinkItems/LinkItems'

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
        !list && <LinkItems />
      }
    </ul>
  )
}
