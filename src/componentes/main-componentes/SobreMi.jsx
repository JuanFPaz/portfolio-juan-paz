/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
import './Section.css'
import './styles/SobreMi.css'
import profile from '/img/profile2.webp'

function SobreMi ({ id }) {
  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='sobreMi-encabezado'>
          <h1>Sobre mí</h1>
        </div>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <div className='sobreMi-main'>
              <p>Soy de la Ciudad de Buenos Aires, Argentina. Tengo 30 años, soy <b>trabajador autónomo</b> en aplicaciones de reparto y <b>desarrollador web</b> en mis tiempos libres. Me defino como una persona <b>empática</b>, me gusta <b>ayudar</b> a las personas y soy capaz de <b>adaptarme</b> a los nuevos desafíos que se me presenten.</p>
              <p><b>Me interesé</b> por el desarrollo de aplicaciones en 2019 como <b>autodidacta</b> dando mis primeros pasos en la programación con Java y explorando el desarrollo de videojuegos con Unity. Más tarde, <b>me inscribí</b> en Argentina Programa, donde <b>reforcé</b> mis conocimientos con nuevas tecnologías como Javascript, React, Node, Git, entre otras.</p>
              <p>Actualmente <b>busco</b> forjar mi <b>perfil profesional</b> como desarrollador, <b>aportando</b> mis conocimientos en un grupo de trabajo, <b>colaborar</b> para resolver todo tipo de problemas y seguir <b>aprendiendo</b> para mejorar como desarollador de software.</p>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='sobreMi-aside'>
              <img src={profile} alt='mi-foto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
