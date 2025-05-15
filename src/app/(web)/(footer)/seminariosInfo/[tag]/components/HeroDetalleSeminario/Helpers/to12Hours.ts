export default function to12Hours (hour:any) {
  const theHour = hour.split(':')
  const myHour = theHour[0] % 12
  const myMins = theHour[1]

  return `${myHour}:${myMins} ${theHour[0] > 12 ? 'PM' : 'AM'}`
}
