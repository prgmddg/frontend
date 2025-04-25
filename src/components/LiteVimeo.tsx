'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Icon from '@/components/Icon'

type LiteVimeoEmbedProps = {
  videoId: string;
  videoTitle?: string;
  videoPlayLabel?: string;
  startAt?: string;
  autoLoad?: boolean;
  autoPlay?: boolean;
  poster: string
};

export default function LiteVimeoEmbed({
  videoId,
  poster,
  videoTitle = 'Video',
  videoPlayLabel = 'Play',
  startAt = '0s',
  autoLoad = false,
  autoPlay = false,
}: LiteVimeoEmbedProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const addIframe = useCallback(() => {
    if (!iframeLoaded && frameRef.current) {
      const autoplayParam = autoPlay ? 'autoplay=1' : ''
      const startParam = `#t=${startAt}`
      const iframe = document.createElement('iframe')
      iframe.src = `https://player.vimeo.com/video/${videoId}?${autoplayParam}${startParam}`
      iframe.allow =
        'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      iframe.allowFullscreen = true
      iframe.width = '100%'
      iframe.height = '100%'
      iframe.className = 'absolute top-0 left-0 w-full h-full'
      frameRef.current.appendChild(iframe)
      setIframeLoaded(true)
    }
  }, [autoPlay, iframeLoaded, startAt, videoId])

  useEffect(() => {
    const links = [
      'https://f.vimeocdn.com',
      'https://player.vimeo.com',
      'https://i.vimeocdn.com',
    ]
    links.forEach((href) => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = href
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    if (autoLoad) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !iframeLoaded) {
              addIframe()
              observer.disconnect()
            }
          })
        },
        { threshold: 0.25 }
      )
      if (frameRef.current) observer.observe(frameRef.current)
      return () => observer.disconnect()
    }
  }, [addIframe, autoLoad, iframeLoaded])

  return (
    <>
      <Head>
        <link
          rel='preload'
          as='image'
          href={`https://i.vimeocdn.com/video/${videoId}.jpg?mw=1100&mh=619&q=70`}
        />
      </Head>
      <div
        ref={frameRef}
        className='relative block w-full overflow-hidden shadow-md rounded-xl bg-neutral-900 aspect-video'
        onClick={addIframe}
        role='button'
        aria-label={`${videoPlayLabel}: ${videoTitle}`}
      >
        {!iframeLoaded && (
          <>
            <picture className='absolute top-0 left-0 w-full h-full'>
              <img
                className='object-cover w-full h-full'
                src={poster}
                alt={`Vista previa de ${videoTitle}`}
                loading='lazy'
                decoding='async'
              />
            </picture>
            <div className='absolute inset-0 transition-opacity bg-black bg-opacity-20 hover:bg-opacity-40' />
            <button
              className='absolute z-10 p-3 transition -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 left-1/2 bg-opacity-90 hover:bg-opacity-100'
              aria-label='Play video'
            >
              <Icon className='w-5 h-5' name='play' />
            </button>
          </>
        )}
      </div>
    </>
  )
}
