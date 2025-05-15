import React from 'react'

const inHouseCardContext = React.createContext<any>({
  setShow: () => null,
  id: '',
  titulo: '',
  descripcion: '',
  imagen: '',
  color: '',
  icono: '',
  asesores: [
    {
      nombre: '',
      descripcion: '',
      profesion: '',
      telefono: '',
      telefono_2: '',
      avatar: ''
    }
  ]
})

export default inHouseCardContext
