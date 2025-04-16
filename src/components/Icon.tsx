import icons from '@/data/icons'

export default function Icon ({ className, name }: { name: string, className: string }) {
  const icon = icons[name]

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={icon.viewBox}
      fill={icon.fill}
      className={className}  
    >
      {
        icon.paths.map((path, index) => (
          <path
            key={index}
            d={path.d}
            fill={path.fill}
            stroke={path.stroke}
          />
        ))
      }  
    </svg>
  )
}