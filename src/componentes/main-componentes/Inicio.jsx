/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
import './styles/Inicio.css'
import cv from '/pdf/CV-JuanPaz-2025.pdf'

function Inicio ({ id }) {
  return (
    <>
      <section>
        <div id={id} className='container-lg'>
          <div className='container-fluid'>
            <div className='row'>
              <h1>Hola, soy Juan Paz, <b>desarrollador web</b>.</h1>
              <p className='mt-3'>Especializado en <b>Javascript</b>, creando <b>soluciones</b> técnicas con código limpio, escalable y buenas prácticas, mediante la investigacion y aprendizaje continuo.</p>
              <p> Busco <b>unirme</b> a un equipo donde pueda <b>aportar</b> mis conocimientos sólidos y <b>crecer</b> profesionalmente.</p>
            </div>
            <div className='row mt-5'>
              <div className='containerButton  d-flex justify-content-center'>
                <button>
                  <a href={cv} target='_blank' rel='noopener noreferrer'> Ver Curriculum Vitae </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio
