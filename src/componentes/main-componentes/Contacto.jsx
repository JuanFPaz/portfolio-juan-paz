import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import './styles/Contacto.css'
import { useState } from 'react'
import FormContacto from './contacto-componentes/FormContacto'

function Contacto ({ id }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [renderData, setRenderData] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [renderLoading, setLoading] = useState(false)

  const handleData = (_data) => {
    if (renderError) setRenderError(false)
    setData(_data)
    setRenderData(true)
  }

  const handleError = (_data) => {
    if (renderData) setRenderData(false)
    setError(_data)
    setRenderError(true)
  }

  const handleLoading = (bool) => {
    if (bool) {
      setRenderData(false)
      setRenderError(false)
    }
    setLoading(bool)
  }
  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='contacto-encabezado'>
          <h1>Contacto</h1>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <p>
                <b>¡Gracias por haber visitado mi Portfolio!</b> Espero que haya
                sido de tu agrado y que hayas encontrado interesante el
                contenido de mi sitio.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='contacto-saludo-formulario mt-3'>
                <p>
                  Si deseas <b>contactarte conmigo</b>, completa el siguiente formulario, ingresando tu <b>nombre completo</b>, <b>correo electrónico</b> y el <b>motivo</b> del mensaje.
                </p>
              </div>
              <div className='contacto-formulario'>
                <FormContacto
                  onData={(d) => {
                    handleData(d)
                  }}
                  onError={handleError}
                  onLoading={handleLoading}
                />
                <div>
                  {renderLoading && (
                    <Spinner
                      className='mt-3'
                      animation='grow'
                      variant='success'
                    />
                  )}
                  {renderData && (
                    <Alert className='success mt-3' variant='success'>
                      {' '}
                      {data.message}{' '}
                    </Alert>
                  )}
                  {renderError && (
                    <Alert className='danger mt-3' variant='danger'>
                      {' '}
                      {error.message}{' '}
                    </Alert>
                  )}
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='contacto-alternativo mt-3'>
                <p>
                  También te dejo otros <b>enlaces</b>, para que me puedas seguir en <b>Linkedin</b> o en <b>Github</b>, o si deseas tener un contacto directo conmigo a través de <b>Whatsapp</b> o en <b>Discord</b>.
                </p>
              </div>
              <div className='contacto-enlaces mt-5'>
                <a href='https://www.linkedin.com/in/jpaz94/' target='blank'>
                  <img
                    src='https://jpaz.ar/icons/linkedin.svg'
                    alt='Link a perfil de Linkedin Juan Paz.'
                  />
                </a>
                <a href='https://github.com/JuanFPaz' target='blank'>
                  <img
                    id='gh'
                    src='https://jpaz.ar/icons/github.svg'
                    alt='Link a perfil de Github Juan Paz.'
                  />
                </a>
                <a
                  href='mailto:jpaz.dev94@gmail.com'
                  target='blank'
                  rel='noreferrer'
                >
                  <img
                    src='https://jpaz.ar/icons/gmail.svg'
                    alt='Link a Correo electronico jpaz.dev94@gmail.com'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
