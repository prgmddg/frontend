'use client'

import React, { useState, useEffect, useContext } from 'react'
import KRGlue from '@lyracom/embedded-form-glue'
import Izi from './Izi'
import PayTypes from './PayTypes'
import DepositoForm from './DepositoForm'
import LoadFormMsg from './LoadFormMsg'
import Spinner from '@/old-components/Spinner/Spinner'
import { globalContext } from '@/context/GlobalContext'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { ErrorCodes } from '@/types/errors'
import ToastSuccess from '@/components/ToastSuccess'
import user from '@/interfaces/user'

export default function IziForm ({ setShowSuccess }:{setShowSuccess:any}) {
  const { auth } = useAuth()
  const { cart, setCart } = useContext(globalContext)
  const [load, setLoad] = useState(false)
  const [paying, setPaying] = useState(false)
  const [payType, setPayType] = useState('card')

  const { mutate: izi } = useMutation({
    mutationKey: ['izi-pay'],
    mutationFn: async ({
      u,
      products,
      amount
    }: {
      u: user | null,
      products: {
        id: string
        tipo: string
        amount: number
        convenio?: boolean
      }[],
      amount: number
    }) => {
      if (!u) return

      setLoad(true)
      const body = new FormData()
        
      body.append('amount', `${amount}`)
      body.append('idUser', `${u.id}`)
      body.append('productsArr', JSON.stringify(products))

      /*
        97649007:publickey_7BLQcvuVTHjNDjzzSmiyJM8VnfXpfQX9Li995qHar6NyA
        97649007:testpublickey_UTZAMW5mLnK026AEknrEn6L7WODbX2AllfyAycTISdiUX
      */

      const endpoint = 'https://api.micuentaweb.pe'
      const publicKey = '97649007:publickey_7BLQcvuVTHjNDjzzSmiyJM8VnfXpfQX9Li995qHar6NyA'

      const response = await fetch('https://aula.desarrolloglobal.pe/v03/api/pasarela/generar-token', {
        method: 'POST',
        body,
      })

      if (!response.ok) {
        throw new Error(ErrorCodes.INVALID_DATA)
      }

      const { error, token } = (await response.json()) as { error: string, token: string }

      if (error.length > 0) {
        throw new Error(ErrorCodes.INVALID_DATA)
      }

      const { KR } = await KRGlue.loadLibrary(
        endpoint,
        publicKey
      )

      await KR.setFormConfig({
        formToken: token,
        'kr-language': 'es-PE'
      })

      await KR.onSubmit(async (paymentData: any) => {
        const data = new FormData()

        data.append('kr-hash', paymentData.hash)
        data.append('kr-hash-key', paymentData.hashKey)
        data.append('kr-hash-algorithm', paymentData.hashAlgorithm)
        data.append('kr-answer-type', paymentData._type)
        data.append('kr-answer', paymentData.rawClientAnswer)
        data.append('pago', JSON.stringify({
          usuario: u,
          programas: products
        }))

        const response = await fetch('https://aula.desarrolloglobal.pe/v03/api/pasarela/pago', {
          method: 'POST',
          body: data
        })

        if (!response.ok) {
          throw new Error(ErrorCodes.INVALID_DATA)
        }

        setCart([])
        localStorage.removeItem('DG-CART')
        setPaying(false)
        setShowSuccess('success')

        return false
      })

      await KR.removeForms()
      await KR.renderElements('#myPaymentForm')
      setLoad(false)
    }
  })

  useEffect(() => {
    if (paying) {
      ToastSuccess({
        isConfirmed: false,
        message: 'Realizando el pago, no cierre esta ventana',
        confirmedAction: () => {},
      })
    }
  }, [paying])

  useEffect(() => {
    const products = cart.map(pro => { return { id: pro.id, amount: !pro.isConvenio ? pro.precio.final : pro.precio.final_convenio, tipo: pro.tipo, convenio: pro.isConvenio } })
    const amount = cart
      .map(pro => { return !pro.isConvenio ? pro.precio.final : pro.precio.final_convenio })
      .reduce((sum, current) => {
        return sum + current
      }, 0)

    izi({ amount, products, u: auth })
  }, [auth, cart, izi])

  return (
    <>
      <PayTypes setPayType={setPayType} payType={payType} />
      <div className='flex items-center justify-between 1000px:flex-col 1000px:items-start'>
        <span className='block mt-[1rem] text-[12.5px]'>
          Recuerda activar tu tarjeta para compras por internet
        </span>
        <LoadFormMsg />
      </div>
      {load && (
        <div className='w-[100%] top-[15rem] absolute flex justify-center left-0 1000px:top-[20rem]'>
          <Spinner />
        </div>
      )}
      <Izi payType={payType} load={load}/>
      {payType === 'deposito' && <DepositoForm cart={cart}/>}
    </>
  )
}
