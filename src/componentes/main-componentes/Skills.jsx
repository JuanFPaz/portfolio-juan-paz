/* eslint-disable import/no-absolute-path */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import html from '/icons/html-5.svg'
import css from '/icons/css-3.svg'
import js from '/icons/js.svg'
import express from '/icons/express.svg'
import react from '/icons/react.svg'
import vite from '/icons/vite.svg'
import bootstrap from '/icons/bootstrap.svg'
import node from '/icons/node.svg'
import java from '/icons/java.svg'
import notion from '/icons/notion.svg'
import trello from '/icons/trello.svg'
import git from '/icons/git.svg'
import github from '/icons/github.svg'
import vscode from '/icons/vs-code.svg'

import './Section.css'
import './styles/Skills.css'

const arrayDeImagenes = [
  {
    nombre: 'HTML 5',
    info: 'Lenguaje de Marcado.',
    url: html,
    alt: 'Logo HTML 5',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'CSS 3',
    info: 'Lenguaje de Estilos.',
    url: css,
    alt: 'Logo CSS 3',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Bootstrap',
    info: 'Framework de Estilos.',
    url: bootstrap,
    alt: 'Logo Bootstrap',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'JavaScript',
    info: 'Lenguaje de Programación.',
    url: js,
    alt: 'Logo JavaScript',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'React',
    info: 'Librería de Javascript.',
    url: react,
    alt: 'Logo React',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Vite',
    info: 'Herramienta de Desarrollo Frontend.',
    url: vite,
    alt: 'Logo Vite',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Java',
    info: 'Lenguaje de Programación.',
    url: java,
    alt: 'Logo Java',
    id: self.crypto.randomUUID()
  }
]

const arrayDeImagenesDos = [{
  nombre: 'Node.js',
  info: 'Entorno de desarrollo.',
  url: node,
  alt: 'Logo Node.js',
  id: self.crypto.randomUUID()
},
{
  nombre: 'Express.js',
  info: 'Framework de Node.js.',
  url: express,
  alt: 'Logo Express.js',
  id: self.crypto.randomUUID()
},
{
  nombre: 'Notion',
  info: 'Herramienta de Gestión de Tareas.',
  url: notion,
  alt: 'Logo Notion',
  id: self.crypto.randomUUID()
},
{
  nombre: 'Trello',
  info: 'Herramienta de Gestión de Tareas.',
  url: trello,
  alt: 'Logo Trello',
  id: self.crypto.randomUUID()
},
{
  nombre: 'Git',
  info: 'Sistema de Gestión de Versiones.',
  url: git,
  alt: 'Logo Git',
  id: self.crypto.randomUUID()
},
{
  nombre: 'GitHub',
  info: 'Plataforma de Almacenamiento de Proyectos.',
  url: github,
  alt: 'Logo GitHub',
  id: self.crypto.randomUUID()
},
{
  nombre: 'VS Code',
  info: 'Editor de Código.',
  url: vscode,
  alt: 'Logo Visual Studio Code',
  id: self.crypto.randomUUID()
}
]

const softSkillsText = [
  {
    id: 0,
    text: 'Adaptabilidad'
  },
  {
    id: 1,
    text: 'Empatía'
  },

  {
    id: 2,
    text: 'Compromiso'
  },
  {
    id: 3,
    text: 'Trabajo en Equipo'
  },
  {
    id: 4,
    text: 'Colaborador'
  }
]

const softSkillsTextDos = [
  {
    id: 4,
    text: 'Autodidacta'
  },
  {
    id: 5,
    text: 'Comunicación'
  },
  {
    id: 6,
    text: 'Resolución  de Problemas'
  },
  {
    id: 7,
    text: 'Rápido Aprendizaje'
  },
  {
    id: 8,
    text: 'Gestión de Proyectos'
  }
]

function SoftSkills () {
  return (
    <div className='softSkills-contenedor'>
      <div className='skills-titulo'>
        <h2>
          Habilidades Blandas
        </h2>
      </div>
      <div className='skills-list'>
        <div className='row'>
          <div className='col-lg-6'>
            {softSkillsText.map(({ id, text }) => (
              <div className='skills-items' key={id}>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className='col-lg-6'>
            {softSkillsTextDos.map(({ id, text }) => (
              <div className='skills-items' key={id}>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function HardSkills () {
  const [img, setImage] = useState([...arrayDeImagenes])
  const [img2, setImage2] = useState([...arrayDeImagenesDos])

  return (
    <div className='techHabilidades-contenedor'>
      <div className='skills-titulo'>
        <h2>
          Habilidades Técnicas
        </h2>
      </div>
      <div className='skills-list'>
        <div className='row'>
          <div className='col-lg-6'>
            {img.map((i) => (
              <div className='skills-items' key={i.id}>
                <img src={i.url} alt={i.alt} />
                <div className='desc-container d-flex flex-column justify-content-center'>
                  <ul>
                    <li className='nameItem'> {i.nombre} </li>
                    <li className='descItem'> {i.info ? i.info : 'miau'}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className='col-lg-6'>
            {img2.map((i) => (
              <div className='skills-items' key={i.id}>
                <img src={i.url} alt={i.alt} />
                <div className='desc-container d-flex flex-column justify-content-center'>
                  <ul>
                    <li className='nameItem'> {i.nombre} </li>
                    <li className='descItem'> {i.info ? i.info : 'miau'}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function Skills ({ id }) {
  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='skills-encabezado'>
          <h1>Habilidades</h1>
        </div>
        <div className='skills-contenido'>
          <SoftSkills />
          <HardSkills />
        </div>
      </div>
    </section>

  )
}

export default Skills
