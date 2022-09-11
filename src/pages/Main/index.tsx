import { FC, useMemo } from "react";
import MainLayout from "layouts/MainLayout";
import H2 from "components/H2";
import Paragraph from "components/Paragraph";
import ArticleTitle from "components/ArticleTitle";
import Image from "components/Image";
import Subscription from "components/Subscription";
import Comment from "components/Comment";
import uuid from "react-uuid";

import foto1 from "assets/images/article1/foto1.jpg";
import foto2 from "assets/images/article1/foto2.jpg";
import foto3 from "assets/images/article1/foto3.jpg";
import foto4 from "assets/images/article1/foto4.jpg";
import foto5 from "assets/images/article1/foto5.jpg";
import foto6 from "assets/images/article1/foto6.jpg";
import { dataComments } from "./data";

import "./styles.scss";

const Main: FC = () => {
  const comments = useMemo(() => (
    dataComments.map((elem) => (
      <Comment
        key={uuid()}
        avatar={elem.avatar}
        date={elem.date}
        name={elem.name}
        text={elem.text}
        photo={elem.photo}
      />
    ))
  ), []);

  return (
    <MainLayout pageTitle="Hola / Main">
      <div className="Main">
        <div className="Main__content">
          <ArticleTitle
            title="¿QUIERES PERDER 26 KG? ¡ES MUY FÁCIL!"
            text="Los secretos para perder peso de Adamari López"
            image={foto1}
          />

          <H2>HE PERDIDO PESO YO MISMA Y TE AYUDARÉ A PERDER PESO</H2>

          <Paragraph>¡Hola a todos!Lo siento, pero simplemente no tuve tiempo de responder todas vuestras preguntas.Si nos ponemos a pensar, es el mismo tema: cómo perder peso de una vez y para siempre. ¡Y por supuesto sin dañar la salud!Así que decidí escribir sobre todo en este post y contar cómo perdí 26 kilos</Paragraph>

          <Image
            src={foto1}
            alt="foto1"
            width="100%"
          />

          <Subscription>ESTAS FOTOS FUERON TOMADAS HACE 2 MESES, INCREÍBLE ¿NO ES ASÍ?</Subscription>

          <Paragraph>Nunca he sido una mujer débil, pero mi cuerpo se volvió loco y tenía gorditos en todas partes: tenía un bocio que colgaba del pecho como un pavo, tenía grasa y celulitis en todas partes, en el estómago, en las piernas e incluso en los brazos. Después de darme cuenta de eso boté todas las camisetas sin mangas.</Paragraph>
          <Paragraph>Estaba cansada de llorar frente al espejo hasta que pude ponerme en pie de nuevo. ¡Más precisamente para recuperar mi cuerpo gordo! Probé de todo y al mismo tiempo, probablemente como todas las otras chicas ingenuas como yo. Me puse a dieta y comencé a hacer ejercicio. Me despertaba al amanecer, comía un huevo crudo (¡nunca lo hagáis!) E iba a rastras a la calle, apenas movía los pies. Dejé los alimentos fritos, me inscribí en el gimnasio, compré té para bajar de peso y llené el refrigerador con yogur. Tenía todo el paquete, por así decirlo. ¿Creéis que logré algo?</Paragraph>
          <Paragraph>¡Al contrario! Aumenté aún más de peso, de repente subí otros 5 kg en estas semanas que practiqué deporte intensamente. ¡En total llegué a 89 kg! ¡Con un poco más de 1,60 cm de estatura!Más tarde, los médicos me explicaron que el cuerpo estaba bajo estrés, por lo que comenzó a acumular intensamente 'suministros' Mi organismo creía que quería destruirlo. Olvidé el sabor del pan, olvidé qué es la carne, olvidé cómo se derrite el helado en mi boca. Comía solo manzanas y bebía solo agua, pero en todo vano.</Paragraph>
          <Paragraph>En resumen, durante meses probé diferentes métodos para perder peso hasta que un día me volví loca</Paragraph>

          <Image
            src={foto2}
            alt="foto2"
            width="300px"
          />

          <Paragraph>Me avergüenza hablar de esto, pero un día decidí que estaba destinada a morir como una anciana gorda rodeada de 7 gatos. Fui directamente a McDonald's, compré la mitad del menú y me detuve media hora después. Después lloré durante horas, sentí que no podía ser peor.</Paragraph>
          <Paragraph>En ese momento sucedió un milagro. No en el water de McDonald's, sino luego de dos semanas, pero sigue siendo un milagro. Vi en youtube un blog de una español que contaba cómo soñaba con deshacerse de la maldición en su familia, todos ellos eran gordos. Biolica la ayudó a lograrlo.Yo también pedí el Biolica .Luego leí mucha información sobre este producto en internet. Resultó que muchas estrellas de Hollywood perdieron peso con su ayuda. No creía en una transformación milagrosa, ya que había probado casi todas las dietas y programas existentes, y ninguno de estos me ayudó, así que dudaba de todo eso Biolica me ayudará. Bueno, ¡no debería haber dudado!</Paragraph>
          <Paragraph>El paquete llegó rápidamente, en menos de una semana. Durante este tiempo, leí muchas reseñas e información sobre Biolica y me convencí de que era la mejor opción. Seguí las instrucciones, bebí el Biolica dos veces al día, por la mañana y por la noche.</Paragraph>
          <Paragraph>Ahora ten cuidado. Mejor siéntate.</Paragraph>
          <Paragraph>¡En 2 semanas perdí 13 kg! Eso significa que estaba perdiendo alrededor de una libra por día, ¿puedes creerlo?!</Paragraph>

          <H2>MILLONES DE MUJERES EN EUROPA Y ESTADOS UNIDOS BAJARON LOS KILOS DE MÁS CON BIOLICA. SEGÚN LAS ESTADÍSTICAS, EL 96,7% LOGRÓ RESULTADOS IMPRESIONANTES : ¡CADA UNO PERDIÓ 8-11,5 KG EN 23 DÍAS!</H2>

          <Image
            src={foto3}
            alt="foto3"
            width="100%"
          />

          <H2>LA COMBINACIÓN ÚNICA DE SUS COMPONENTES HACE QUE EL PROCESO DE PÉRDIDA DE PESO SEA SIMPLE Y REAL: ¡LOS RESULTADOS SON IMPRESIONANTES!</H2>

          <Paragraph>Mis nalgas se han vuelto más delgadas por casi 10 cm, el estómagosimplemente desapareció - no lo creía. Mi piel, cabello: todo se volvió brillante y saludable, las espinillas en la espalda y el pecho desaparecieron desde el principio. Comencé a creer que realmente podía pasar de ser una mujer gorda a una princesa real: ¡la balanza y el espejo no mienten! Y créanme, no seguía ninguna dieta, el éxito de mi pérdida de peso lo logré únicamente con la ayuda de Biolica.</Paragraph>

          <Image
            src={foto4}
            alt="foto4"
            width="300px"
          />

          <Paragraph>
            Y la tercera semana fue un éxito: perdí 6 kg de peso.
            Y lo más sorprendente fue que no tenía que hacer nada, solo bebía Biolica todo según las instrucciones y trataba de recordar tomar la dosis recomendada. Incluso la persona más perezosa puede hacerlo.
          </Paragraph>
          <Paragraph>En 3 semanas perdí 10 kg. Sin esfuerzo, sin restricciones dietéticas o ejercicio extenuante. Mi panza gorda, mis brazos llenos de celulitis y mi bocio se fueron para siempre. Casi lloro de felicidad mientras escribo esto :)</Paragraph>
          <Paragraph>Después de una dieta completa con Biolica, es decir, después de 2 meses, perdió 26 kg. No sabemos cuántos milagros puede lograr el cuerpo humano si se le ayuda.Ya no tengo 20 años, una edad en la que los kilos se acumulan y se pueden perder rápidamente.</Paragraph>

          <H2>MILES DE PERSONAS AÚN NO PUEDEN CREER LO QUE ESTÁN VIENDO AHORA:</H2>

          <Image
            src={foto5}
            alt="foto5"
            width="100%"
          />

          <H2>POR CIERTO, BIOLICA FUE PROBADO POR LA ACADEMIA NACIONAL DE CIENCIAS EN 2021 . LOS RESULTADOS HABRÍAN TENIDO UN EFECTO BOMBA, POR LO QUE NO LOS HICIERON PÚBLICOS.</H2>
          <H2>¿POR QUÉ? ¡PORQUE EL PRODUCTO QUE REALMENTE FUNCIONA QUEBRARÍA A LAS COMPAÑÍAS FARMACÉUTICAS, LOS MÉDICOS, LOS NUTRICIONISTAS Y LAS CLÍNICAS PRIVADAS!Y ESPECIALMENTE UN PRODUCTO BARATO.</H2>

          <Paragraph>Ahora les cuento a todos mis amigos y colegas sobre Biolica, porque creo que todos deberían saberlo.Ser delgado y enérgico es tan bueno, y quiero que todos a mi alrededor entiendan cuánta felicidad puede traer este producto. Al realizar el pedido, compré solo en el sitio web oficial del producto. Dejemos de matarnos del hambre, cansarnos en el gimnasio, somos inteligentes cuando sabemos qué hacer.</Paragraph>

          <Image
            src={foto6}
            alt="foto6"
            width="100%"
          />

          <Paragraph>¿TODAVÍA SUEÑAS CON UN CUERPO DELGADO? ¡ES HORA DE ACTUAR!¡DESHAGÁMONOS DE LA GRASA HORRIBLE DE INMEDIATO!</Paragraph>

          <div className="Main__comments">
            <p className="Main__comments_title">Comments</p>
            {comments}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;
