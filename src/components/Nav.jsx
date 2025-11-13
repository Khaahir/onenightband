import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <nav className="sticky top-0 z-40 bg-black/60 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="text-xl font-bold">One Night</div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink className={({isActive})=> isActive? 'nav-link text-white':'nav-link'} to="/">Hem</NavLink>
            <NavLink className="nav-link" to="/gallery">Galleri</NavLink>
            <NavLink className="nav-link" to="/events">Event</NavLink>
            <NavLink className="nav-link" to="/about">Om oss</NavLink>
            <NavLink className="nav-link" to="/contact">Kontakt</NavLink>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden" ref={menuRef}>
            <button
              onClick={() => setOpen(v => !v)}
              aria-expanded={open}
              aria-label={open ? 'Stäng meny' : 'Öppna meny'}
              className="p-2 rounded text-white"
            >
              {open ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>

            {/* Mobile menu */}
            <div
              className={`absolute right-4 top-12 w-56 bg-black/95 backdrop-blur-sm rounded-md shadow-lg overflow-hidden transition-transform transform origin-top ${
                open ? 'scale-100' : 'scale-95 pointer-events-none opacity-0'
              } ${open ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDuration: '150ms' }}
              role="menu"
            >
              <div className="flex flex-col px-3 py-2">
                <NavLink onClick={() => setOpen(false)} className={({isActive})=> isActive? 'nav-link py-2 text-white':'nav-link py-2'} to="/">Hem</NavLink>
                <NavLink onClick={() => setOpen(false)} className="nav-link py-2" to="/gallery">Galleri</NavLink>
                <NavLink onClick={() => setOpen(false)} className="nav-link py-2" to="/events">Event</NavLink>
                <NavLink onClick={() => setOpen(false)} className="nav-link py-2" to="/about">Om oss</NavLink>
                <NavLink onClick={() => setOpen(false)} className="nav-link py-2" to="/contact">Kontakt</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
