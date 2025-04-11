import { ReactNode } from 'react'

interface requirements
{
  value:ReactNode,
  propertie:string
}

export default function validatingRequired(values:Record<any,any>,requirements:Array<requirements|string>=[]):boolean
{

  let requierementsArr:Array<requirements|string>=requirements

  if(requirements.length===0)
  {
    requierementsArr=Object.keys(values)
  }

  const isValid=requierementsArr.every(requirement=>
  {
    const finalRequirement =
      typeof requirement === 'string'
        ? { propertie: requirement, value: '' }
        : requirement

    return `${values[finalRequirement.propertie]}`!==`${finalRequirement.value}`
  }) 



  return isValid
}