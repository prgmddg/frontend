export interface Asesor {
    nombre: string;
    telefono: string;
}

export interface Profesor {
    nombre: string;
    descripcion: string;
    perfil: string;
}

export interface Promocion {
    img: string;
    enlace: string;
}

export interface Banner {
    promocion: Promocion[];
    seminario: string;
    oferta: string;
}

export default interface seminarios {
    id: string;
    titulo: string;
    descripcion: string;
    etiqueta: string;
    fecha: string;
    hora: string;
    id_video: string;
    banner: Banner;
    profesor: Profesor;
    asesor: Asesor[];
    tipo: string;
    source: string;
    codigo_envivo: string;
    tipo_programa: string;
}
