import programData from '@/types/programData'

export interface profesor {
    id:                string;
    nombres:           string;
    apellidos:         string;
    tituloProfesional: string;
    descripcion:       string;
    foto:              string;
    calificación:      number;
    totalCursos:       number;
    cursos:            Array<programData>;
    totalAlumnos:      number;
    video: string
}
