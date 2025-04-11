export default function parsearFecha(fecha:string)
{
  if(fecha===undefined)return 'error'
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const fechaNumero = fecha.split('-')
  const fechaParas = meses.find((mes, index) => {
    return index === parseInt(fechaNumero[1]) - 1
  })
  return fechaParas
};