import React, { ReactNode } from 'react'

export const MyBannerContainer = ({ children }:{children:ReactNode, styles?:string}) => {
  return (
    <div style={{ backgroundImage: 'url(/img/myRealBanner.webp)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <article className='container block !pt-[2rem] px-[1rem] pb-[2rem]'>{children}</article>
    </div>
  )
}
