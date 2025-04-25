import icons from '@/data/icons'

export default function Icon ({ className, name }: { name: string, className: string }) {
  const icon = icons[name]

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={icon.viewBox}
      fill={icon.fill}
      className={className}
      stroke={icon.stroke}
      strokeWidth={icon.strokeWidth}
      strokeLinecap={icon.strokeLinecap}
      strokeLinejoin={icon.strokeLinejoin}
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