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
              <h1>Hola, soy Juan Paz.</h1>
              <p>
                Soy un <b>desarrollador web</b>  especializado en Javascript creando aplicaciones Front end y Back end, <b>gestionando eficazmente</b> mis proyectos y con <b>conocimientos sólidos</b> utilizando diferentes lenguajes de programación y herramientas de desarrollo.
                <br />
                <br />
                Actualmente estoy en <b>busqueda de trabajo</b>, para forjar mi perfil profesional como <b>desarrollo de Software</b>.
              </p>
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
