export default interface cartItem
{
   id:string,
   titulo:string,
   precio:{final:number, descuento:number, normal:number, final_convenio: number, normal_convenio: number},
   imagen:string
   tipo:string
   total_sesiones:number
   isConvenio?: boolean
   isViewMessage?: boolean
}
