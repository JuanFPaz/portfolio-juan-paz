import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Logo from './header-componentes/LogoHeader'
import './Header.css'
import { useState } from 'react'

function Header () {
  const [show, setShow] = useState(false)
  /* Eventos para el offcanvas del header */
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <header className='fixed-top'>
        <Container fluid='lg'>
          <Navbar expand='lg' className='navbar-dark'>
            <Container fluid>
              <Navbar.Brand href='#'><Logo /></Navbar.Brand>
              <button className='d-lg-none toggleOffCanvas' onClick={handleShow}>
                <svg xmlns='http://www.w3.org/2000/svg' width='42' height='42' fill='rgba(255, 255, 255, 1)' className='bi bi-list' viewBox='0 0 16 16'>
                  <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
                </svg>
              </button>
              <Navbar.Offcanvas
                className='offCanvasHeader'
                id='offcanvasNavbar-expand-lg'
                aria-labelledby='offcanvasNavbarLabel-expand-lg'
                placement='end'
                show={show}
              >
                <Offcanvas.Header>
                  <Navbar.Brand href='#'><Logo /></Navbar.Brand>
                  <button className='toggleOffCanvas' onClick={handleClose}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='42' height='42' fill='rgba(255, 251, 251, 1)' className='bi bi-x-lg' viewBox='0 0 16 16'>
                      <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z' />
                    </svg>
                  </button>
                </Offcanvas.Header>
                <Offcanvas.Body className='d-flex justify-content-center justify-content-lg-end'>
                  <Nav variant='underline'>
                    <Nav.Item>
                      <Nav.Link href='#proyectos'>Proyectos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#sobremi'>Sobre Mi</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#experiencia'>Experiencia</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#habilidades'>Habilidades</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#contacto'>Contacto</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Container>
      </header>
    </>
  )
}
export default Header
