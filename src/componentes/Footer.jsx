import './Footer.css'

function Footer () {
  return (
    <footer>
      <ul>
        <li>Desarrollado por Juan Paz.</li>
        <li>Desplegado con Github Pages.</li>
        <li>2023 - {new Date().getFullYear()}</li>
      </ul>
    </footer>
  )
}

export default Footer
