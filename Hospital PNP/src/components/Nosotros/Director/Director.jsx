import React from 'react'
import director from '../../../assets/Director.jpg'
import './Director.css'

// componente de presentación del director del ho spital
const Director = () => {
  return (
    <section className="director">
      <div className="director-container">

        {/* foto del director */}
        <img src={director} alt="Director del hospital" className="foto-director"/>

        {/* mensaje del director */}
        <div className="director-descripcion">

          <h2 className="director-titulo">Mensaje del Director</h2>

          <p>Un cordial saludo para todos los miembros de la familia policial, en mi calidad de Director del Hospital Nacional PNP "Luis N. Saenz", heredero de una noble tradición de servicio y atención integral orientada a la necesidad de los pacientes y como hospital de referencia de alta calidad y abierto a las innovaciones, es de mi agrado darles la bienvenida a nuestro nuevo sitio web.</p>

          <p>En este sitio podrán acceder a los servicios en línea y contar con la información oportuna sobre los procedimientos para su atención médica. Asimismo, conocer sobre las últimas noticias y eventos respecto a nuestro recinto hospitalario.</p>

          <p>Sirvan estas palabras para expresar mi agradecimiento por visitar nuestro sitio web y con mucho entusiasmo esperamos que este sea un canal que nos permita conectar con ustedes y mantenerlos al tanto de los avances que el hospital va alcanzando día a día.</p>

          {/* firma del director — cada línea separada con <br/> */}
          <p className="director-firma">
            Ricardo Jesús TINOCO TEJADA <br />
            General Médico SPNP <br />
            Director del Hospital Nacional PNP «Luis N. Sáenz»
          </p>
        </div>

      </div>
    </section>
  )
}

export default Director