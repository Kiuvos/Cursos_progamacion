import React from 'react';

const Services = () => {
  return (
    <div className="container-text">
      <div className="title-text">
        <h2>Nuestros Servicios</h2>
      </div>
      <div className='body-text'>
        <p>
          Bienvenidos a nuestra plataforma educativa, donde nuestra misión es democratizar el aprendizaje de la programación para todos. Ofrecemos una gama diversa de cursos de programación, meticulosamente diseñados para satisfacer las necesidades de aprendizaje de una amplia audiencia, abarcando desde entusiastas que dan sus primeros pasos en el mundo digital hasta profesionales experimentados que buscan perfeccionar sus habilidades técnicas. A continuación, detallamos los servicios clave que ofrecemos, cada uno diseñado para proporcionarte una experiencia de aprendizaje integral y enriquecedora.
        </p>
      </div>
      
      <div className="cards-container">
        <div className="card">
          <h2>Cursos para Principiantes</h2>
          <div className='card-text'>
            <p>
              Para aquellos que están descubriendo el fascinante mundo de la programación, ofrecemos una serie de cursos introductorios que sirven como punto de partida ideal. Estos cursos están disponibles en una variedad de lenguajes de programación fundamentales, incluyendo Python, conocido por su sintaxis amigable y versatilidad; JavaScript, esencial para el desarrollo web moderno; y Java, un pilar de la programación empresarial. Cada curso está cuidadosamente estructurado para cubrir los principios esenciales de la programación, asegurando que adquieras una comprensión sólida y una base robusta para futuros aprendizajes.
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Cursos Avanzados</h2>
          <p>
            Para los desarrolladores que ya tienen una base sólida y buscan expandir su repertorio técnico, ofrecemos cursos avanzados que cubren una variedad de temas especializados. Estos incluyen el desarrollo web front-end y back-end, donde podrás aprender sobre frameworks modernos y arquitecturas de software; inteligencia artificial, que te permitirá explorar el aprendizaje automático y la visión por computadora; ciencia de datos, para dominar el análisis y la visualización de grandes volúmenes de información; y muchos otros campos emergentes. Estos cursos están diseñados no solo para impartir conocimiento, sino también para fomentar la innovación y prepararte para liderar en tu campo elegido.
          </p>
        </div>

        <div className="card">
          <h2>Proyectos Prácticos</h2>
          <p>
            En nuestra plataforma, creemos que la mejor manera de aprender es haciendo. Por eso, cada uno de nuestros cursos incluye una serie de proyectos prácticos que te desafían a aplicar tus conocimientos en escenarios del mundo real. Estos proyectos son una oportunidad para que experimentes con el código, resuelvas problemas complejos y, lo más importante, construyas un portafolio impresionante que demuestre tus habilidades a posibles empleadores. Desde construir tu primera aplicación web hasta analizar conjuntos de datos reales, estos proyectos son pasos cruciales en tu viaje de aprendizaje.
          </p>
        </div>

        <div className="card">
          <h2>Soporte de Mentores</h2>
          <p>
            Sabemos que el camino hacia el dominio de la programación puede estar lleno de desafíos y obstáculos inesperados. Por eso, ofrecemos soporte continuo de mentores que están disponibles para ayudarte a superar cualquier dificultad que encuentres. Nuestros mentores son profesionales altamente calificados y experimentados en la industria tecnológica, comprometidos con tu éxito. Ellos te proporcionarán orientación personalizada, compartirán sus experiencias y te ofrecerán consejos prácticos para asegurar que tu aprendizaje sea efectivo y gratificante.
          </p>
        </div>
      </div>
      
      <div className='body-text'>
        <p>
          Nuestro objetivo final es empoderarte con las habilidades y el conocimiento necesarios para sobresalir en el dinámico y siempre cambiante mundo de la programación. Con una comunidad de aprendizaje solidaria y recursos de vanguardia a tu disposición, estás en el camino correcto hacia el éxito. ¡Estamos emocionados por la oportunidad de acompañarte en este viaje y esperamos darte la bienvenida en uno de nuestros cursos muy pronto!
        </p>
      </div>
    </div>
  );
};

export default Services;
