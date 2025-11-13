import React from 'react'

export default function Header(){
  return (
    // use a smaller height on small screens, full viewport on md+
    <header className="h-[60vh] sm:h-[70vh] md:h-screen flex items-center justify-center bg-black">
      <img
        src="/header.jpg"
        alt="One Night Band"
        className="max-w-full max-h-full object-contain"
      />
    </header>
  )
}
