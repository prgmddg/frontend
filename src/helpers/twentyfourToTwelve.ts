export default function twentyfourToTwelve(horaFull: string) {

  if (horaFull !== undefined) {
    const arr = horaFull?.split(':')
    arr?.pop()

    const hora: number = Number(arr[0])

    if (hora > 13) {
      return `${hora - 12}:${arr[1]} PM`
    }

    return `${arr.join(':')} AM`
  }

  return ''

}