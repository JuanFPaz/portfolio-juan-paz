/* eslint-disable react-refresh/only-export-components */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react-hooks/exhaustive-deps */
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import { Outlet } from 'react-router-dom'

function App () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
