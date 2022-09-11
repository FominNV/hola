import { ICommentProps } from "components/Comment/types";
import avatar1 from "assets/images/avatars/ava1.jpg";
import avatar2 from "assets/images/avatars/ava2.jpg";
import avatar3 from "assets/images/avatars/ava3.jpg";
import avatar4 from "assets/images/avatars/ava4.jpg";
import avatar5 from "assets/images/avatars/ava5.jpg";

import comment1 from "assets/images/comments/c1.jpg";
import comment2 from "assets/images/comments/c2.jpg";
import comment4 from "assets/images/comments/c4.jpg";

export const dataComments: ICommentProps[] = [
  {
    avatar: avatar1,
    date: "26.11.2021",
    name: "Cristina Mendoza",
    text: "¡Querida Adamari, estoy muy agradecida por su recomendación! He leído mucho sobre Biolica pero tenía miedo y no pensé que funcionaría. Solo lo pedí después de leer su publicación.Han pasado nueve semanas desde que terminé la dieta completa con Biolica . ¡Perdí 21 kg!¡GRACIAS!",
    photo: comment1,
  },
  {
    avatar: avatar2,
    date: "26.11.2021",
    name: "Carolina Martín",
    text: "Desde peque soñaba con un cuerpo delgado. Me enteré sobre Biolica hace tres meses. Dudaba en pedirlo, pero mi madre me convenció. ¡No es realmente costoso hacer realidad tu sueño! Ahora ambas estamos perdiendo peso. Ella también pudo perder peso más que yo, pero los resultados siguen siendo increíbles.",
    photo: comment2,
  },
  {
    avatar: avatar3,
    date: "26.11.2021",
    name: "María Flores",
    text: "¡Estoy tan contenta de haberme topado con tu publicación!Definitivamente probaré también Biolica .",
    photo: undefined,
  },
  {
    avatar: avatar4,
    date: "27.11.2021",
    name: "Ramona Márquez",
    text: "¡Hola, Adamari! Yo ya probé Biolica, yahorapuedo decirte que salvaste a mi familia y mi matrimonio:) mi esposo comenzó a ver a una mujer en mí otra vez, me hace confiar en mí misma.Me siento ahora mejor, ¡gracias! :)",
    photo: comment4,
  },
  {
    avatar: avatar5,
    date: "27.11.2021",
    name: "Mariela Benítez",
    text: "Cariño, Adamari, tienes un blog maravilloso y todo lo que recomiendas realmente funciona. También probé docenas de dietas y programas de pérdida de peso, pero los resultados siempre estuvieron por debajo de mis expectativas. Peso 85 kg y mi estatura es 1.63 cm. Ordené Biolica justo después de leer tu publicación. Espero que esto me ayude a perder 26 kg.Prometo que te comentaré mis resultados.",
    photo: undefined,
  },
];
