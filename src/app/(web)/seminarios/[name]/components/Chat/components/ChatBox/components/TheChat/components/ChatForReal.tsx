'use client'

import { seminarioContext } from '@/app/(web)/seminarios/[name]/context/SeminarioContext'
import { useAuth } from '@/hooks/useAuth'
import comment from '@/interfaces/comment'
import seminarios from '@/interfaces/seminarios'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client/debug'

export default function ChatForReal () {
  const { auth } = useAuth()
  const { id: seminarioId } = useContext(seminarioContext) as seminarios
  const [socketState, setSocketState] = useState<any>(null)
  const [comments, setComments] = useState<Array<comment>>([])
  const [text, setText] = useState<string>('')

  useEffect(() => {
    const socket = io('https://api.desarrolloglobal.pe')
    setSocketState(socket)
    socket.emit('conectar', seminarioId, { id: auth?.id, nombre: auth?.nombre, avatar: auth?.avatar })
    socket.on('mostrar_total_mensajes', data => setComments(data))
    socket.on('mostrar_mensaje', data => setComments(prev => { return [...prev, data] }))
  }, [auth?.id, auth?.avatar, auth?.nombre, seminarioId])

  function submittingMsg (e:FormEvent) {
    e.preventDefault()
    if (text === '') return
    socketState.emit('enviar_mensaje', seminarioId, text)
    setText('')
  }

  const divRef = useRef(null)
  useEffect(() => {
    if (divRef.current === null) return
    const myHtml = divRef.current as HTMLElement
    myHtml.scrollIntoView({ behavior: 'smooth' })
  })

  return (
    <div className='w-[100%] pt-[.8rem] h-[100%] overflow-hidden flex flex-col justify-end relative'>
      <div className='flex flex-col gap-[1rem] chatMedi absolute bottom-[72px] max-h-[43.7rem]'>
        {comments.map((comment, pos) => (
          <Comment
            {...comment}
            key={pos}
            isMine={auth?.id === comment.usuario}
          />
        ))}
        <div ref={divRef} />
      </div>
      <form onSubmit={submittingMsg}>
        <div className='flex justify-between bg-[#fff] px-[16px] py-[8px] rounded-[.3rem] items-center'>
          <input
            type='text'
            className='outline-none p-[16px] flex-1'
            placeholder='Escribe tu comentario o pregunta...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className='text=white w-[60px] h-[47px] flex justify-center items-center rounded-[.3rem] text-white bg-[#0d6efd]'>
            <FontAwesomeIcon size='xl' icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </div>
  )
}

interface props extends comment
{
   isMine:boolean
}

function Comment (props:props) {
  const { contenido, avatar, nombre, isMine } = props

  return (
    <div className='flex items-start gap-[24px] px-[.5rem] mob:gap-[18px]'>
      <Image
        src={avatar}
        alt='avatar de usuario'
        width={50}
        height={50}
        className='object-cover w-[50px] h-[50px] rounded-[100%]'
      />
      <section
        className={`${
          isMine ? 'bg-[#4b58a5]' : 'bg-[#14206b]'
        } p-[16px] rounded-[.5rem] text-white flex-1`}
      >
        <span className='font-bold'>{nombre}</span>
        <p>{contenido}</p>
      </section>
    </div>
  )
}
