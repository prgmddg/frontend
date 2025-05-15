import whatDayIs from './whatDayIs'
import whatMonthIs from './whatMonthIs'

export default function formattingDate (date:any) {
  const theDate = new Date(date)

  const myDate = date?.split('-')
  const month = whatMonthIs(myDate)
  const day = whatDayIs(theDate.getDay())

  return `${day} ${myDate[2]} de ${month}`
}
