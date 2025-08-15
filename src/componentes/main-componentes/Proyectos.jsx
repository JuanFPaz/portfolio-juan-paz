/* eslint-disable import/no-absolute-path */
import { useState, useEffect, useRef } from 'react'
// Iconos
import enlace from '/icons/enlace-blue.svg'
import ghBlue from '/icons/gh-blue.svg'
import react from '/icons/react.svg'
import node from '/icons/nodejs-icon.svg'
import java from '/icons/java.svg'
import js from '/icons/js.svg'
// background
import reactFootballito from '/img/proyectos/reactFBrowser.png'
import apiFootballito from '/img/proyectos/apiF.png'
import nasa from '/img/proyectos/spaceOddity.png'
import musica from '/img/proyectos/musica-2.png'
import sistema from '/img/proyectos/sistemav.png'
import jumpingGuy from '/img/proyectos/jg.png'
import juliPaz from '/img/proyectos/julianPaz.png'

import './styles/Proyectos.css'

const proyectosBotones = [
  {
    id: 0,
    titulo: 'Portfolio Julían Paz',
    src: react,
    class: 'react-icon'
  },
  {
    id: 1,
    titulo: 'React Footballito',
    src: react,
    class: 'react-icon'
  },
  {
    id: 2,
    titulo: 'API Footballito',
    src: node,
    class: 'node-icon'
  },
  {
    id: 3,
    titulo: 'Reproductor de Musica',
    src: js,
    class: 'js-icon'
  },
  {
    id: 4,
    titulo: 'Space Oddity',
    src: js,
    class: 'js-icon'
  },
  {
    id: 5,
    titulo: 'Sistema Vacacional',
    src: java,
    class: 'java-icon'
  }
]

const proyectosContenido = [
  {
    id: 0,
    background: juliPaz,
    dev: true,
    titulo: 'Portfolio Julián Paz',
    repositorio: 'https://github.com/JuanFPaz/porfolio-julian-paz',
    repoTitle: 'JuanFPaz/porfolio-julian-Paz',
    url: 'https://porfolio-julianpaz.jpaz.ar/',
    html: `
   <p><b>Portfolio de Julián Paz</b> es una aplicación en <b>Front end</b> en desarrollo creada <b>Javascript</b>, <b>React</b> y configurada con <b>Vite</b>. Para este proyecto <b>reutilice</b> el maquetado  y el estilo de mi <b>portfolio</b>, <b>adaptándolo</b> para un nuevo cliente y cumplir con sus requisitos.</p>
           <p>La aplicación actualmente se encuentra desplegada en <a target='blank' href='https://porfolio-julianpaz.jpaz.ar/'>porfolio-julianpaz.jpaz.ar</a>.</p>
 
   `
  },
  {
    id: 1,
    background: reactFootballito,
    dev: true,
    titulo: 'React Footballito',
    repositorio: 'https://github.com/JuanFPaz/react-footballito',
    repoTitle: 'JuanFPaz/React-Footballito',
    html: `
    <p><b>React Footballito</b> es una aplicación en <b>Front end</b> en desarrollo creada <b>Javascript</b>, <b>React</b> y configurada con <b>Vite</b>. Esta proyecto visualiza los datos de diferentes ligas y copas de fútbol a nivel clubes y selecciones, inspirada en <a href='https://promiedos.com.ar' target='blank'>promiedos.com.ar</a>.</p>    `
  },
  {
    id: 2,
    background: apiFootballito,
    dev: true,
    titulo: 'API Footballito',
    repositorio: 'https://github.com/JuanFPaz/API-Football',
    repoTitle: 'JuanFPaz/API-Footballito',
    html: '<p><b>API Footballito</b> es una aplicación <b>Back end</b> en desarrollo con <b>Node.js</b> y <b>Express</b>, que obtiene, procesa y almacena los datos de diferentes ligas y copas de la <a target=\'blank\' href=\'https://api-sports.io/documentation/football/v3\'>API Sports</a>, para luego <b>facilitar</b> el trabajo en el <b>Front End</b> (React Footballito), enviando los datos solicitados.</p>'
  },
  {
    id: 3,
    background: musica,
    dev: false,
    titulo: 'Reproductor de música',
    repositorio: 'https://github.com/JuanFPaz/reproductor-de-musica',
    repoTitle: 'JuanFPaz/Reproductor-de-musica',
    url: 'https://musica.jpaz.ar',
    urlTitle: 'musica.jpaz.ar',
    html: `
        <p><b>Reproductor de música</b> es una aplicación <b>Front end</b> desarrollada con <b>JavaScript</b> y configurada con <b>Vite</b>. Para este proyecto <b>reutilice</b> la lógica de un reproductor de música que aprendí en el <a target='blank' href='https://hektorprofe.net/'>curso de Unity</a> y adaptarlo a un entorno diferente como el navegador con <b>Javascript</b>.</p>
        <p>La aplicación actualmente se encuentra desplegada en <a target='blank' href='https://musica.jpaz.ar'>musica.jpaz.ar</a>.</p>
        `
  },
  {
    id: 4,
    background: nasa,
    dev: false,
    titulo: 'Space Oddity',
    repositorio: 'https://github.com/JuanFPaz/space-oddity',
    repoTitle: 'JuanFPaz/Space-Oddity',
    url: 'https://spaceoddity.jpaz.ar',
    urlTitle: 'spaceoddity.jpaz.ar',
    html: `
        <p><b>Space Oddity</b> es una aplicación <b>frontend</b> desarrollada con <b>JavaScript</b> y configurada con <b>Vite</b>. Esta aplicación obtiene imágenes y videos desde 1996 hasta la fecha actual de la <a target='blank' href='https://api.nasa.gov/'>API APOD</a> (Astronomic Picture of the Day) de la <b>NASA</b>.</p>
        <p>La aplicación actualmente se encuentra finalizada y desplegada en <a target='blank'  href='https://spaceoddity.jpaz.ar'>spaceoddity.jpaz.ar</a>.</p>
        `
  },
  {
    id: 5,
    background: sistema,
    dev: false,
    titulo: 'Sistema Vacacional',
    figDesc: 'Vista previa del Sistema Vacacional.',
    repositorio: 'https://github.com/JuanFPaz/Sistema-Vacacional',
    repoTitle: 'JuanFPaz/Sistema-Vacacional',
    html: `
      <p><b>Sistema Vacacional</b> es una aplicación de <b>escritorio</b> desarrollada con <b>Java</b> y configurada con <b>Maven</b>. Este <b>proyecto integra</b> lo aprendido en el <a target='blank' href='https://www.youtube.com/watch?v=L1oMLsiMusQ'>curso de Java</a> en mis inicios como programador. <b>Destaco</b> de este proyecto los conceptos técnicos aprendidos, que me permitieron <b>adaptarme</b> más rápido a nuevos lenguajes de programación.</p>
    `
  },
  {
    id: 6,
    background: jumpingGuy,
    titulo: 'Jumping Guy',
    repositorio: 'https://github.com/JuanFPaz/Jumping-Guy',
    repoTitle: 'JuanFPaz/Jumping-Guy',
    html: `
      <p><b>Jumping Guy</b> es un <b>videojuego 2D</b> desarrollado en <b>Unity Engine</b> y <b>C#</b>. Este <b>proyecto integrada</b> lo aprendido en el <a target='blank' href='https://hektorprofe.net/'>curso de Unity</a>.</p>
      <p>La jugabilidad es similar al juego del <b>Dino Chrome</b>, el personaje principal debe esquivar la mayor cantidad de obstaculos posibles. Lo que <b>destaco</b> de este proyecto, son los <b>conceptos tecnicos</b> aprendidos sobre el desarrollo de videojuegos, a configurar un escenario, creacion y movimiento de personajes, sobre fisicas 2D y la creacion de scripts con <b>C#</b>, entre otras cosas más.</p>      `
  }
]

function Proyectos ({ id }) {
  const [boton, setBoton] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) {
      console.log('Ref es :' + ref)
    } else {
      ref.current.innerHTML = proyectosContenido[boton].html
    }
  }, [boton])

  function handleButton (idx) {
    setBoton(idx)
  }

  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='proyectos-encabezado'>
          <h1>Proyectos</h1>
        </div>
        <div className='proyectos-contenido d-lg-flex flex-lg-row'>
          <div className='proyectos-botones'>
            <ul className='d-flex flex-lg-column'>
              {proyectosBotones.map(b => (
                <li key={b.id}>
                  <button className={boton === b.id ? 'seleccionado' : ''} onClick={() => { handleButton(b.id) }}>
                    <div className={`iconTec ${b.class}`} style={{ backgroundImage: `url(${b.src})` }} />
                    {b.titulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='proyectos-descripcion'>
            <div className='proyectos-titulo'>
              <h2>{proyectosContenido[boton].titulo} {proyectosContenido[boton].dev ? (<i>(En desarrollo)</i>) : ''} </h2>
            </div>
            <div className='proyectos-resumen'>
              <div className='proyectos-img-container'>

                <div className='proyectos-img'>
                  <img src={proyectosContenido[boton].background} alt={proyectosContenido[boton].figDesc} />
                </div>
                <div className='proyectos-enlaces-container'>
                  <h3 style={{ color: '#fff' }}>Enlaces:</h3>
                  <div className='proyectos-enlaces'>
                    {proyectosContenido[boton].url
                      ? (
                        <a href={proyectosContenido[boton].url} target='blank'>
                          <img src={enlace} alt={`Link a enlace del proyecto ${proyectosContenido[boton].titulo}`} />
                        </a>)
                      : (<></>)}
                    <a href={proyectosContenido[boton].repositorio} target='blank'>
                      <img src={ghBlue} alt={`Link a enlace del repositorio de ${proyectosContenido[boton].titulo}`} />
                    </a>
                  </div>
                </div>
              </div>
              <div className='proyectos-text'>
                <div ref={ref} className='proyectos-parrafos' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyectos
