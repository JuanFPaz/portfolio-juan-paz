/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './styles/Experiencia.css'

const experienciaList = [
  {
    id: 0,
    titulo: 'Desarrollador Web',
    subtitulo: 'Portfolio jpaz.ar',
    fechaToString: 'Octubre 2023 - Actualidad',
    descripcion: [
      'Desarrollo de proyectos personales enfocados en lógica, código reutilizable y despliegue en dominio propio.',
      'Implementación de metodologías ágiles, para la planificación de mis proyectos personales.',
      'Creación de soluciones técnicas mediante la investigación autónoma y documentación oficiales.'
    ]
  },
  {
    id: 1,
    titulo: 'Aplicaciones de reparto',
    subtitulo: 'Trabajo autónomo',
    fechaToString: 'Octubre 2020 - Actualidad',
    descripcion: [
      'Repartos en CABA y Vicente López.',
      'Desarrollo de habilidades de gestión, planificación y organización para cumplir objetivos semanales.',
      'Adaptación a entornos dinámicos y resolución de problemas imprevistos.'
    ]
  },
  {
    id: 2,
    titulo: 'Ejecutivo de Telemarketing ',
    subtitulo: 'Dyktel S.A.',
    fechaToString: 'Marzo 2017 - Octubre 2020',
    descripcion: [
      'Contacto con clientes para venta de tarjetas del Banco Santander Río.',
      'Implementación de sistema de gestión de datos para leads no concretados.',
      'Mejora progresiva en ventas, posicionándome entre los 5 mejores vendedores.'
    ]
  }
]

function Experiencia ({ id }) {
  const [exp, setExp] = useState(experienciaList[0])
  const [boton, setBoton] = useState(0)

  useEffect(() => {
    setExp(experienciaList[boton])
  }, [boton, experienciaList])

  function handleButton (idx) {
    setBoton(idx)
  }
  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='experiencia-encabezado'>
          <h1>Experiencia</h1>
        </div>
        <div className='experiencia-contenido d-lg-flex flex-lg-row'>
          <div className='experiencia-botones'>
            <ul className='d-flex flex-lg-column'>
              {experienciaList.map(exps => (
                <li key={exps.id}> <button className={boton === exps.id ? 'seleccionado' : ''} onClick={() => { handleButton(exps.id) }}><span>{`${exps.id + 1}. ${exps.titulo}`}</span></button> </li>
              ))}
            </ul>
          </div>
          <div className='experiencia-descripcion'>
            <div className='experiencia-titulo-fecha'>
              <h2>{exp.titulo} - {exp.subtitulo}</h2>
              <h3>{exp.fechaToString}</h3>
            </div>
            <div className='experiencia-lista'>
              <ul>
                {exp.descripcion.map((desc, idx) => (
                  <li className='mb-3' key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experiencia
