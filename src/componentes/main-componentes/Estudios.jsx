/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './styles/Experiencia.css'

const educacionList = [

  {
    id: 0,
    institucion: 'Universidad Tecnologica Nacional - Argentina Programa',
    ubicacion: 'Ubicacion: Buenos Aires.',
    titulo: 'Titulo: Desarrollador Front End React',
    fechaToString: 'Periodo: Febrero 2023 - Diciembre 2023'
  },
  {
    id: 1,
    institucion: 'Instituto Nacional de Tecnologia Industrial - Argentina Programa',
    ubicacion: 'Ubicacion: Buenos Aires.',
    titulo: 'Titulo: Desarrollador Full Stack',
    fechaToString: 'Periodo: Septiembre 2022 - Diciembre 2022'
  },
  {
    id: 2,
    institucion: 'Centro Universitario Vicente Lopez',
    ubicacion: 'Ubicacion: Buenos Aires.',
    titulo: 'Titulo: Mantenimiento de PC',
    fechaToString: 'Periodo: Agosto 2018 - Diciembre 2018'
  },
  {
    id: 3,
    institucion: 'Colegio Julio Argentino Roca Nº8 DE 10',
    ubicacion: 'Ubicacion: Ciudad de Buenos Aires.',
    titulo: 'Titulo: Bachiller',
    fechaToString: 'Periodo: Marzo 2010 - Diciembre 2014'
  }

]

function Estudios ({ id }) {
  const [est, setExp] = useState(educacionList[0])
  const [boton, setBoton] = useState(0)

  useEffect(() => {
    setExp(educacionList[boton])
  }, [boton, educacionList])

  function handleButton (idx) {
    setBoton(idx)
  }
  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='estudios-encabezado'>
          <h1>{'{ Educacion }'}</h1>
        </div>
        <div className='estudios-contenido'>
          <div className='estudios-botones'>
            <ul>
              {educacionList.map(estu => (
                <li key={estu.id}> <button id={boton === estu.id ? 'seleccionado' : ''} onClick={() => { handleButton(estu.id) }}>{`${estu.id + 1}. ${estu.institucion}`}</button> </li>
              ))}
            </ul>
          </div>
          <div className='estudios-descripcion'>
            <h1>{est.institucion}</h1>
            <ul>
              <li>{est.titulo}</li>
              <li>{est.ubicacion}</li>
              <li>{est.fechaToString}</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Estudios
