import React, { ReactNode } from 'react'
import styles from './css/styles.module.css'

export const PoliticaBlock = ({ title, children }:{title:string, children:ReactNode}) => {
  return (
    <>
      <h2 className='text-center block mb-[1rem] text-[24px]'>
        {
          title
        }
      </h2>
      <div className={`text-left ${styles.container}`}>
        {
          children
        }
      </div>
    </>
  )
}
