/* eslint-disable react-refresh/only-export-components */
import SobreMi from './main-componentes/SobreMi'
import Inicio from './main-componentes/Inicio'
import Skills from './main-componentes/Skills'
import Experiencia from './main-componentes/Experiencia'
import Proyectos from './main-componentes/Proyectos'
import Contacto from './main-componentes/Contacto'
import './Main.css'
import './main-componentes/Section.css'

function Main () {
  return (
    <main>
      <Inicio id='inicio' />
      <Proyectos id='proyectos' />
      <SobreMi id='sobremi' />
      <Experiencia id='experiencia' />
      <Skills id='habilidades' />
      <Contacto id='contacto' />
    </main>
  )
}

export default Main
