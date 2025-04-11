import jobs from './_data/jobs.json'

export default function Page () {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  const lenghtJobs = jobs.filter((job) => job.active)

  return (
    <div className='grid gap-10 py-10 mx-4'>
      <h1 className='text-center text-4xl !font-bold text-[#0E2FAA] max-w-[650px] mx-auto'>Explora Las Oportunidades Laborales que Tenemos para ti</h1>

      {
        lenghtJobs.length > 0
          ? (
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1200px] mx-auto gap-[.8rem]'>
              {jobs.map((job, index) => {
                const day = new Date(job.date)

                return job.active && (
                  <div key={index} className='w-[380px] my-shadow2 pb-[18px] 430px:w-[initial] rounded-lg mx-auto flex flex-col border-[4px] p-[.4rem] border-[transparent] hover:border-primary hover:translate-y-[-1rem] duration-[400ms] ease-in-out bg-white'>
                    <a className='overflow-hidden rounded-lg" href="/cursos/normas-internacionales-de-contabilidad-para-el-sector-publico'>
                      <picture>
                        <img alt='imagen de trabajo' loading='lazy' width='330' height='220' decoding='async' data-nimg='1' className='w-full rounded-t-md' src={job.img} style={{ color: 'transparent' }} />
                      </picture>
                    </a>

                    <div className='flex flex-col flex-1 px-0 pt-5'>
                      <div className='flex flex-col gap-[.3rem] text-[.8rem] mb-[8px]'>
                        <div className='flex justify-between text-white h-[30px] 430px:h-[initial] 430px:!text-[.8rem] 430px:flex-col 430px:gap-[.2rem] 430px:text-center'>
                          <span className='flex items-center bg-primary font-medium capitalize px-[.8rem] text-[.9rem]  rounded-[0px_.5rem_.5rem_0px] 430px:rounded-[.5rem] justify-center'>Trabajo Disponible</span>
                        </div>
                      </div>
                      <div className='px-[1.2rem] flex-1 flex flex-col justify-between'>
                        <span className='text-xl h-[90px] text-[26px] font-bold text-center overflow-hidden flex items-center justify-center'>
                          <span className='line-clamp-3'>{job.title}</span>
                        </span>
                        <div className='border-b-[1px] border-myGray mb-[1rem] block' />
                        <div className='grid grid-cols-2 grid-rows-2 gap-4 py-4 pt-2 text-sm'>
                          <div className='flex gap-[14px] items-center'>
                            <svg className='w-6 h-6 text-primary' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                              <path d='M480 48c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48l0 48-64 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72c0-13.3-10.7-24-24-24S64 10.7 64 24l0 72L48 96C21.5 96 0 117.5 0 144l0 96L0 464c0 26.5 21.5 48 48 48l256 0 32 0 96 0 160 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-112 0 0-144zm96 320l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 416l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM560 256c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 176l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM112 320l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zm304-48l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16z' />
                            </svg>
                            <span className='font-bold max-w-[100px]'>{job.city}</span>
                          </div>
                          <div className='flex gap-[14px] items-center text-myRed'>
                            <svg className='w-6 h-6' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                              <path d='M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l448 0c53 0 96-43 96-96l0-320c0-53-43-96-96-96L96 0zM64 96c0-17.7 14.3-32 32-32l448 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32L64 96zm159.8 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 309.3c0 14.7 11.9 26.7 26.7 26.7l56.1 0c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4l-69.3 0C119.9 256 96 279.9 96 309.3zM461.2 336l56.1 0c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3l-69.3 0c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1l-80 0c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47zM512 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z' />
                            </svg>
                            <span className='font-bold max-w-[100px]'>{job.area}</span>
                          </div>
                          <div className='flex gap-[14px] items-center'>
                            <svg className='w-6 h-6 text-primary' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z' /></svg>
                            <span className='font-bold max-w-[100px]'>{job.type}</span>
                          </div>
                          <div className='flex gap-[14px] items-center'>
                            <svg className='w-6 h-6 text-primary' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                              <path d='M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z' />
                            </svg>
                            <span className='font-bold max-w-[100px]'>{`${day.getDate()} ${months[day.getMonth()]} ${day.getFullYear()}`}</span>
                          </div>
                        </div>
                        <a className='hover:bg-primary hover:text-white border-[3px] bg-white text-primary border-primary duration-[400ms] ease-in-out text-[18px] font-bold px-[.5rem] w-[100%] block text-center rounded-[.5rem] py-[16px]' href={`/trabajos/${job.tag}`}>Más Información</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
          : (<div className='text-center'>No hay trabajos disponibles</div>)
      }
    </div>
  )
}
