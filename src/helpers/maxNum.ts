export default function maxNum(value:string,max:number)
{
  if(Number(value.length)>max)
  {              
    const resul = value.substring(0,max)
    return resul
  }
  return value
}