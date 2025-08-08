/* eslint-disable import/no-absolute-path */
import gm from '/icons/gmail.svg'
import gh from '/icons/github.svg'
import linkedin from '/icons/linkedin.svg'
import './styles/Contacto.css'

function Contacto ({ id }) {
  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='contacto-encabezado'>
          <h1>Contacto</h1>
        </div>
        <div className='contacto-contenido'>
          <p>
            <b>¡Gracias por haber visitado mi Portfolio!</b> Espero que haya
            sido de tu agrado y que hayas encontrado interesante el contenido de
            mi sitio.
            <br />
            <br />
            Si deseas <b>contactarte conmigo</b>, a continuación encontrarás unos <b>enlaces</b> para que puedas enviarme un mensaje a mi <b>perfil de linkedin</b>, mi <b>perfil de github</b> o mi <b>correo electrónico.</b>
          </p>
        </div>
        <div className='contacto-enlaces'>
          <a href='https://www.linkedin.com/in/jpaz94/' target='blank'>
            <img src={linkedin} alt='Link a perfil de Linkedin Juan Paz.' />
          </a>
          <a href='https://github.com/JuanFPaz' target='blank'>
            <img id='gh' src={gh} alt='Link a perfil de Github Juan Paz.' />
          </a>
          <a href='mailto:jpaz.dev94@gmail.com' target='blank' rel='noreferrer'>
            <img src={gm} alt='Link a Correo electronico jpaz.dev94@gmail.com' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto
