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

export default function IziForm ({ setShowSuccess }:{setShowSuccess:any}) {
  const { auth } = useAuth()
  const { cart, setCart } = useContext(globalContext)
  const [load, setLoad] = useState(false)
  const [payType, setPayType] = useState('card')

  const { mutate: izi } = useMutation({
    mutationKey: ['izi-pay'],
    mutationFn: async ({
      user,
      products,
      amount
    }: {
      user?: string,
      products: {
        id: string
        tipo: string
        convenio?: boolean
      }[],
      amount: number
    }) => {
      const body = new FormData()
        
      body.append('amount', `${amount}`)
      body.append('idUser', `${user}`)
      body.append('productsArr', JSON.stringify(products))

      /*
        97649007:publickey_7BLQcvuVTHjNDjzzSmiyJM8VnfXpfQX9Li995qHar6NyA
        97649007:testpublickey_UTZAMW5mLnK026AEknrEn6L7WODbX2AllfyAycTISdiUX
      */

      const endpoint = 'https://api.micuentaweb.pe'
      const publicKey = '97649007:testpublickey_UTZAMW5mLnK026AEknrEn6L7WODbX2AllfyAycTISdiUX'

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

      const { KR: KRConfig } = await KR.setFormConfig({
        formToken: token,
        'kr-language': 'en-US'
      })

      const { KR: KRSubmit } = await KRConfig.onSubmit(async (paymentData: any) => {
        console.log({ paymentData })
        const data = new FormData()

        data.append('kr-hash', paymentData.hash)
        data.append('kr-hash-key', paymentData.hashKey)
        data.append('kr-hash-algorithm', paymentData.hashAlgorithm)
        data.append('kr-answer-type', paymentData._type)
        data.append('kr-answer', paymentData.rawClientAnswer)
        data.append('pago', JSON.stringify({ idUser: user, products }))

        const response = await fetch('https://aula.desarrolloglobal.pe/v03/api/pasarela/pago', {
          method: 'POST',
          body: data
        })

        if (!response.ok) {
          throw new Error(ErrorCodes.INVALID_DATA)
        }

        setShowSuccess('success')
        setCart([])
        localStorage.removeItem('DG-CART')

        return false
      })

      const { result } = await KRSubmit.attachForm('#myPaymentForm')

      KR.showForm(result.formId)
    }
  })

  useEffect(() => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 5000)
  }, [cart])

  useEffect(() => {
    const products = cart.map(pro => { return { id: pro.id, tipo: pro.tipo, convenio: pro.isConvenio } })
    const amount = cart
      .map(pro => { return !pro.isConvenio ? pro.precio.final : pro.precio.final_convenio })
      .reduce((sum, current) => {
        return sum + current
      }, 0)

    izi({ amount, products, user: auth?.id })
  }, [auth?.id, cart, izi])

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
      <Izi payType={payType} load={load} />
      {payType === 'deposito' && <DepositoForm cart={cart} />}
    </>
  )
}
