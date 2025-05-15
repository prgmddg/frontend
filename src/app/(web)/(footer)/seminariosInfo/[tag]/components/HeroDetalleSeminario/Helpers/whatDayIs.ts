export default function whatDayIs (myDay:number) {
  switch (myDay) {
  case 0:
  {
    return 'Lunes'
  }
  case 1:
  {
    return 'Martes'
  }
  case 2:
  {
    return 'Miercoles'
  }
  case 3:
  {
    return 'Jueves'
  }
  case 4:
  {
    return 'Viernes'
  }
  case 5:
  {
    return 'Sabado'
  }
  case 6:
  {
    return 'Domingo'
  }
  default: return ''
  }
}
