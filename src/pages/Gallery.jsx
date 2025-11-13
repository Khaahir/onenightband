import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = ['/header.jpg','/image1.bmp','image2.bmp','/image3.bmp','/afte.jpg','image3.bmp']

export default function Gallery(){
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') setIndex(i => Math.min(i + 1, images.length - 1))
      if (e.key === 'ArrowLeft') setIndex(i => Math.max(i - 1, 0))
    }
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  function openImage(i) {
    setIndex(i)
    setOpen(true)
  }

  function prev() {
    setIndex(i => Math.max(i - 1, 0))
  }
  function next() {
    setIndex(i => Math.min(i + 1, images.length - 1))
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches?.[0]?.clientX ?? null
  }
  function handleTouchEnd(e) {
    if (touchStartX.current == null) return
    const endX = e.changedTouches?.[0]?.clientX ?? null
    if (endX == null) return
    const dx = endX - touchStartX.current
    if (dx > 50) prev()
    if (dx < -50) next()
    touchStartX.current = null
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Galleri</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2 }
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Galleri bild ${i + 1}`}
              className="w-full h-44 sm:h-56 md:h-64 object-cover rounded-lg cursor-zoom-in"
              onClick={() => openImage(i)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Förhandsgranskning bild ${index + 1}`}
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 md:p-2"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
            aria-label="Stäng förhandsgranskning"
          >
            ✕
          </button>

          {/* Prev / Next buttons (large tappable areas on mobile) */}
          <button
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 md:p-2"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Föregående bild"
          >
            ‹
          </button>
          <button
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 md:p-2"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Nästa bild"
          >
            ›
          </button>

          {/* Constrain container so content never exceeds viewport (leave some padding) */}
          <div
            className="flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ maxWidth: 'calc(100vw - 3rem)', maxHeight: 'calc(100vh - 3rem)', width: '100%', height: '100%' }}
          >
            <img
              src={images[index]}
              alt={`Stor vy bild ${index + 1}`}
              className="rounded-lg object-contain shadow-lg"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
