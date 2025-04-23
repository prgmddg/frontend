
interface props
{
  img:string,
  alt:string
}

export const Entidad = ({ img, alt }:props) => {
  return (
    <div className='px-2'>
      <picture>
        <img src={img} width={0} height={0} className='w-full aspect-auto h-[70px] shadow-md' alt={alt} />
      </picture>
    </div>
  )
}
