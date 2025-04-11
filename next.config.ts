import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'nuevapagina.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 's3-us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'archivos-comunes.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'desarrollo-global.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'aula.desarrolloglobal.pe',
      },
      {
        protocol: 'https',
        hostname: 'archivos-comunes.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],    
  },
  async redirects () {
    return [
      {
        source: '/blog/que-es-el-siaf-y-como-funciona',
        destination:
          'https://blog.desarrolloglobal.pe/que-es-el-siaf-y-como-funciona',
        permanent: true
      },
      {
        source: '/diplomados',
        destination: 'https://desarrolloglobal.pe',
        permanent: true,
      },
      {
        source: '/diplomas/diploma-contrataciones-estado-seace-osce',
        destination: 'https://desarrolloglobal.pe',
        permanent: true
      },
      {
        source: '/diplomas/diploma-gestion-bienes-estado-y-control-patrimonial',
        destination:
          'https://desarrolloglobal.pe/diplomas/diploma-gestion-y-control-de-bienes-muebles-e-inmuebles-del-estado',
        permanent: true
      },
      {
        source: '/diplomas/diploma-bienes-estado-control-patrimonial',
        destination:
          'https://desarrolloglobal.pe/diplomas/diploma-gestion-y-control-de-bienes-muebles-e-inmuebles-del-estado',
        permanent: true
      },
      {
        source:
          '/diplomas/sistemas-administrativos-gestion-publica-siaf-siga-seace',
        destination:
          'https://desarrolloglobal.pe/diplomas/sistemas-administrativos-gestion-publica-siaf-siga-osce',
        permanent: true
      },
      {
        source: '/diplomas/diploma-contrataciones-estado-y-seace',
        destination:
          'https://desarrolloglobal.pe/diplomas/diploma-formulacion-y-evaluacion-de-proyectos-de-inversion-publica',
        permanent: true
      },
      {
        source: '/diplomas/diploma-formulacion-proyectos',
        destination:
          'https://desarrolloglobal.pe/diplomas/diploma-formulacion-y-evaluacion-de-proyectos-de-inversion-publica',
        permanent: true
      },
      {
        source:
          '/diplomas/sistemas-administrativos-gestion-publica-siaf-siga-osce',
        destination:
          'https://desarrolloglobal.pe/diplomas/sistemas-administrativos-gestion-publica-siaf-siga-tesoreria',
        permanent: true
      }
    ]
  }
}

export default nextConfig
