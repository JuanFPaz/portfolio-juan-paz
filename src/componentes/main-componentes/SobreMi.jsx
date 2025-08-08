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
          <h1>Sobre Mi</h1>
        </div>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <div className='sobreMi-main'>
              <p>Soy de la Ciudad de Buenos Aires, Argentina. Tengo 30 años, soy <b>trabajador autónomo</b> en aplicaciones de reparto y <b>desarrollador web</b> en mis tiempos libres. Ademas de pasar tiempo libre en casa Programando, tambien me gusta recorrer la ciudad con mi Moto, escuchar musica y ver deportes.</p>
              <p><b>Me interesé</b> por el desarrollo de aplicaciones en 2019 dando mis primeros pasos en la  programación con Java y explorando el desarrollo de videojuegos con Unity. Más tarde, me inscribí en Argentina Programa, donde <b>reforcé</b> mis conocimientos con <b>nuevas tecnologías</b> como Javascript, React, Node, Git.</p>
              <p>Actualmente busco forjar mi <b>perfil profesional</b> como desarrollador, <b>aportartando mis conocimientos</b> en un grupo de trabajo, <b>continuar aprendiendo</b> para mejorar en el desarrollo de software y poder <b>invertir mi tiempo libre</b> en nuevas actividades.</p>
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
