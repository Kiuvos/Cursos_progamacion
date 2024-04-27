import React from 'react'

export const Footer = () => {
  return (
    <div>
	<footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="footer-heading">Comunidad de Desarrolladores</h1>
            <p className="footer-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              <br/><br/>
            </p>
          </div>
          <div className="col">
            <h2 className="footer-heading">Información de Contacto</h2>
            <p className="footer-text">Barranquilla, Colombia</p>
            <p className="footer-text">(+57)3016737458</p>
            <p className="footer-text"><a href="#">Contáctanos</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2024 Todos los Derechos Reservados | Jesus Camargo</p>
        
      </div>
    </footer>
    </div>
  )
}
