import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NosProjets from './pages/NosProjets'
import Devis from './pages/Devis'
import Contact from './pages/Contact'
import Catalog from './pages/Catalog'

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/nos-projets' element = {<NosProjets/>} />
        <Route path='/devis' element = {<Devis/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/catalog' element = {<Catalog/>} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
