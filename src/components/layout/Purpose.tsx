import { Card } from "../../components/ui/card";

const Purpose = () => {
  return (
    <div id="purpose" className="w-full max-w-5xl mx-auto px-4 my-8 md:my-16">
      <div className="text-center space-y-4 ">
        {/* Título principal - más grueso y oscuro */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-teal-900 text-center mb-2">
          GOSPEL UNITED
        </h1>
        <h6 className="font-semibold">15° Congreso Presenta:</h6>

        {/* Texto descriptivo - más ligero y gris */}
        <div className=" mx-auto  my-4 mb-8">
          <h3 className="text-xl text-justify text-balance md:text-balance  max-w-[80%] mx-auto font-sm text-neutral-500 mb-4">
            Concierto Solidario de alabanza, teatro, danza y participaciones
            especiales <strong>a favor de los damnificados por la DANA 2024</strong>, unidos en
            fe y solidaridad.
          </h3>
          <h5 className="text-[12px] md:text-sm max-w-[80%] mx-auto font-bold md:font-bold text-neutral-700 mb-4">
            * Lucas 10:33 (NVI) - "Pero un samaritano que iba de viaje, llegó a
            donde estaba el hombre y, viéndolo, se compadeció de él."
          </h5>
        </div>

        <div className="flex flex-col-reverse justify-start items-start md:flex-row gap-2">
          <div className="w-[80%] mx-auto  md:w-1/2 space-y-4 text-left">
            {/* Subtítulo - peso medio */}
            <h2 className="text-2xl font-medium text-teal-900 my-6">
            Afectaciones Causadas por la DANA
            </h2>

            {/* Texto descriptivo - más ligero y gris */}
            <div className="space-y-6">
              <p className="font-sm text-neutral-500 text-justify">
                
                Según los medios de comunicación la DANA en la Comunidad Valenciana dejó un total <strong>aproximado</strong> de <strong>224 muertos </strong>
                y <strong>decenas de desaparecidos</strong> en la provincia de Valencia. La alerta se emitió cuando las
                inundaciones ya habían causado importantes daños.{" "}
                <a
                  href="https://www.lavanguardia.com/natural/20241106/10083829/dana-hoy-directo-ultima-hora-inundaciones-valencia-desaparecidos-numero-muertos.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                 (Más información - La Vanguardia)
                </a>
              </p>
              <p className="font-sm text-neutral-500 text-justify">
                Se estima que unos <strong>134.418 inmuebles</strong>  resultaron afectados, con
                un total de <strong>54.312 hectáreas dañadas</strong>, alrededor de <strong>115 colegios</strong> afectados, más de <strong>5,000 comercios</strong> afectados de los cuales <strong>3,000 siguen cerrados.</strong> el impacto económico total se estima en <strong>21.819 millones de euros</strong>, lo que representa aproximadamente el <strong>32% del Producto Interior Bruto (PIB) de la provincia.{" "}</strong>
                <a
                  href="https://cnnespanol.cnn.com/2024/11/01/noticias-dana-tormentas-valencia-muertos-espana-orix-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  (Más información - CNN en español)
                </a>
              </p>
            </div>
          </div>

          <Card className="flex flex-col justify-start items-center w-full md:w-1/2 h-96 rounded-3xl border-neutral-200">
            <iframe
              className="w-[90%]  h-full md:w-xs lg:w-md object-cover rounded-md"
              src="https://www.youtube.com/embed/M03mDft2FD0?si=IEIDp6LocjRzgvHS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
