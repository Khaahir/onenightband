import React from 'react'

export default function Contact(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Kontakt</h2>
      <p className="mt-2 text-gray-300">Mail: <a className="text-accent" href="mailto:bergqvist_joakim@hotmail.com">bergqvist_joakim@hotmail.com</a></p>

      {/* Phone as clickable link */}
      <p className="mt-2 text-gray-300">
        Telefon:{' '}
        <a
          href="tel:+46701234567"
          className="text-accent"
          aria-label="Ring 070-123 45 67"
        >
          070-123 45 67
        </a>
      </p>

      {/* Large tap targets for mobile */}
      <div className="mt-4 flex gap-3">
        <a
          href="tel:+46701234567"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-black rounded-md shadow-sm"
          aria-label="Ring nu 070-123 45 67"
        >
           Ring nu
        </a>

        <a
          href="mailto:bergqvist_joakim@hotmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-black rounded-md shadow-sm"
          aria-label="Maila nu bergqvist_joakim@hotmail.com"
        >
           Maila nu
        </a>
      </div>

      <h3 className="mt-4 font-semibold">Boka oss</h3>
      <p className="mt-2 text-gray-300">Skicka datum, plats och antal gäster så återkommer vi med offert.</p>
    </div>
  )
}
