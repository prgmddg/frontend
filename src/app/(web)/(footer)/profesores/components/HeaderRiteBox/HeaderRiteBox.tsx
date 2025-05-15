import { profesor } from '@/interfaces/profesor'

import React from 'react'
import ProfPic from '../ProfPic'
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Social from '../Social'

type props = profesor

export default function HeaderRiteBox (props:props) {
  const { foto } = props

  return (
    <div className='flex flex-col 1151px:hidden'>
      <ProfPic foto={foto} />
      <ul className='flex flex-col mt-[21px] gap-[13px]'>
        <Social label='Linkedin' icon={faLinkedin} />
        <Social label='Facebook' icon={faFacebook} />
        <Social label='Youtube' icon={faYoutube} />
      </ul>
    </div>
  )
}
