import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  return (
    <Router>
      <Header />
      <Nav />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mb-8">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </main>
      <footer className="py-4 sm:py-6 text-center text-gray-400 m-3">
        © {new Date().getFullYear()} One Night Band — Built with ❤️ of P&J Digital
      </footer>
    </Router>
  )
}
