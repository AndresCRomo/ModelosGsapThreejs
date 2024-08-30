import hiphop from "../assets/VinylRecords/VINYL-RECORD-HIPHOP.png"
import twerk from "../assets/VinylRecords/VINYL-RECORD-TWERK.png"
import kpop from "../assets/VinylRecords/VINYL-RECORD-KPOP.png"

export const clasesInfo = [
    {
        id: 1,
        nombre: "Hiphop",
        descripcion: "Clase de hiphop para principiantes",
        img: hiphop,
        horario: [
           {
            turno: "matutino",
            dias: [
                {
                    dia: "Lunes",
                    hora: "10:00"
                },
                {
                    dia: "Martes",
                    hora: "10:00"
                },
                {
                    dia: "Miercoles",
                    hora: "10:00"
                },
                {
                    dia: "Jueves",
                    hora: "10:00"
                },
                {
                    dia: "Viernes",
                    hora: "10:00"
                }
            ]
           },
              {
                turno: "vespertino",
                dias: [
                 {
                      dia: "Lunes",
                      hora: "18:00"
                 },
                 {
                      dia: "Martes",
                      hora: "18:00"
                 },
                 {
                      dia: "Miercoles",
                      hora: "18:00"
                 },
                 {
                      dia: "Jueves",
                      hora: "18:00"
                 },
                 {
                      dia: "Viernes",
                      hora: "18:00"
                 }
                ]
              }
            
        ]
    },
    {
        id: 2,
        nombre: "twerk",
        descripcion: "Clase de twerk para principiantes",
        img: twerk,
        horario: [
            {
                turno: "matutino",
                dias: [
                    {
                        dia: "Lunes",
                        hora: "11:00"
                    },
                    {
                        dia: "Martes",
                        hora: "11:00"
                    },
                    {
                        dia: "Miercoles",
                        hora: "11:00"
                    },
                    {
                        dia: "Jueves",
                        hora: "11:00"
                    },
                    {
                        dia: "Viernes",
                        hora: "11:00"
                    }
                ]
            },
            {
                turno: "vespertino",
                dias: [
                    {
                        dia: "Lunes",
                        hora: "19:00"
                    },
                    {
                        dia: "Martes",
                        hora: "19:00"
                    },
                    {
                        dia: "Miercoles",
                        hora: "19:00"
                    },
                    {
                        dia: "Jueves",
                        hora: "19:00"
                    },
                    {
                        dia: "Viernes",
                        hora: "19:00"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        nombre: "Kpop",
        descripcion: "Clase de kpop para principiantes",
        img: kpop,
        horario: [
            {
                turno: "matutino",
                dias: [
                    {
                        dia: "Lunes",
                        hora: "12:00"
                    },
                    {
                        dia: "Martes",
                        hora: "12:00"
                    },
                    {
                        dia: "Miercoles",
                        hora: "12:00"
                    },
                    {
                        dia: "Jueves",
                        hora: "12:00"
                    },
                    {
                        dia: "Viernes",
                        hora: "12:00"
                    }
                ]
            },
            {
                turno: "vespertino",
                dias: [
                    {
                        dia: "Lunes",
                        hora: "20:00"
                    },
                    {
                        dia: "Martes",
                        hora: "20:00"
                    },
                    {
                        dia: "Miercoles",
                        hora: "20:00"
                    },
                    {
                        dia: "Jueves",
                        hora: "20:00"
                    },
                    {
                        dia: "Viernes",
                        hora: "20:00"
                    }
                ]
            }
        ]
    }
]