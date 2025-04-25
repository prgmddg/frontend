
interface props
{
  img:string,
  alt:string
}

export const Entidad = ({ img, alt }:props) => {
  return (
    <div className='px-2'>
      <picture>
        <img src={img} width={0} height={0} className='w-full border shadow-md aspect-auto p-1.5 rounded-lg' alt={alt} loading='eager' />
      </picture>
    </div>
  )
}
