import danzaContemporanea from "../assets/images/clases/DanzaContemporanea.jpg";
import reggaeton from "../assets/images/clases/reggaeton.svg";
import entrenamientoFuncional from "../assets/images/clases/EntrenamientoFuncional.jpg";
import kpop from "../assets/images/clases/Kpop.jpg";
import kpopKids from "../assets/images/clases/KpopKids.jpg";
import hiphop from "../assets/images/clases/HipHop.jpg";
import ritmosLatinos from "../assets/images/clases/RitmosLatinos.jpg";
import chairDance from "../assets/images/clases/ChairDance.jpg";
import danzasPolinesias from "../assets/images/clases/DanzasPolinesias.jpg";

export const clasesInfo = [
  {
    id: 1,
    nombre: "DANZA CONTEMPORÁNEA ",
    descripcion: "DANZA CONTEMPORÁNEA (+14 años)",
    img: danzaContemporanea,
    horario: [
      {
        turno: "Vespertino",
        dias: [
          {
            dia: "Lunes",
            hora: "17:30 a 19:00",
          },
          {
            dia: "Míercoles",
            hora: "17:30 a 19:00",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    nombre: "REGGAETON",
    descripcion: "REGGAETON (+16 años)",
    img: reggaeton,
    horario: [
      {
        turno: "Vespertino",
        dias: [
          {
            dia: "Lunes",
            hora: "19:00 a 20:00",
          },
          {
            dia: "Viernes",
            hora: "19:00 a 20:00",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    nombre: "ENTRENAMIENTO FUNCIONAL PARA DANZA",
    descripcion: "ENTRENAMIENTO FUNCIONAL PARA DANZA (+14 años)",
    img: entrenamientoFuncional,
    horario: [
      {
        turno: "Matutino",
        dias: [
          {
            dia: "Martes",
            hora: "10:00 a 11:30",
          },
          {
            dia: "Jueves",
            hora: "10:00 a 11:30",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    nombre: "KPOP",
    descripcion: "KPOP (+14 años)",
    img: kpop,
    horario: [
      {
        turno: "Matutino",
        dias: [
          {
            dia: "Martes",
            hora: "11:30 a 12:30",
          },
          {
            dia: "Jueves",
            hora: "11:30 a 12:30",
          },
        ],
      },
      {
        turno: "Vespertino",
        dias: [
          {
            dia: "Martes",
            hora: "19:00 a 20:00",
          },
          {
            dia: "Jueves",
            hora: "19:00 a 20:00",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    nombre: "KPOP KIDS",
    descripcion: "KPOP KIDS (+6 años)",
    img: kpopKids,
    horario: [
      {
        turno: "Vespertino",
        dias: [
          {
            dia: "Martes",
            hora: "17:00 a 18:00",
          },
          {
            dia: "Jueves",
            hora: "17:00 a 18:00",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    nombre: "HIPHOP - RITMOS URBANOS",
    descripcion: "HIPHOP - RITMOS URBANOS (+14 años)",
    img: hiphop,
    horario: [
      {
        turno: "Vespertino",
        dias: [
          {
            dia: "Martes",
            hora: "12:30 a 13:30",
          },
          {
            dia: "Jueves",
            hora: "12:30 a 13:30",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    nombre: "RITMOS LATINOS (SALSA & BACHATA)",
    descripcion: "RITMOS LATINOS (SALSA & BACHATA) (+14 años)",
    img: ritmosLatinos,
    horario: [
      {
        turno: "Vespertino",
        dias: [
          {
            dia: "Martes",
            hora: "20:00 a 21:00",
          },
          {
            dia: "Jueves",
            hora: "20:00 a 21:00",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    nombre: "CHAIR DANCE",
    descripcion: "CHAIR DANCE (+18 años)",
    img: chairDance,
    horario: [
      {
        turno: "Vespertino",
        dias: [
          {
            dia: "Miercoles",
            hora: "19:00 a 20:00",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    nombre: "DANZAS POLINESIAS (HAWAIANO & TAHITIANO)",
    descripcion: "DANZAS POLINESIAS (HAWAIANO & TAHITIANO) (+14 años)",
    img: danzasPolinesias,
    horario: [
      {
        turno: "Matutino",
        dias: [
          {
            dia: "Miercoles",
            hora: "20:00 a 21:00",
          },
        ],
      },
      {
        turno: "Vespertino",
        dias: [
          {
            dia: "Sábados",
            hora: "10:00 a 12:00",
          },
        ],
      },
    ],
  },
];
