import React from 'react'

export default function Home(){
  const videoUrl = "/video.mp4"

  return (
    <section className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 card">
        <h2 className="text-2xl font-bold">Om bandet</h2>
        <p className="mt-2 text-gray-300">
          One Night Band levererar energifyllda rockspelningar med repertoar som täcker från klassiker till moderna hits. Vi anpassar setlist efter publiken och eventet.
        </p>

        <h3 className="mt-3 font-semibold">Genrer</h3>
        <ul className="list-disc ml-5 mt-2 text-gray-300">
          <li>Rock</li>
          <li>Pop</li>
          <li>Dansband</li>
          <li>Bolaget</li>
        </ul>

      </div>

      <aside className="card">
        <h4 className="font-semibold">Snabbfakta</h4>
        <p className="text-gray-300 mt-2">Bas: Kristinehamn • Reser i hela Sverige • Speltid: 60–120 min</p>
        <a className="mt-4 inline-block cta" href="/contact">Boka nu</a>

        <h4 className="font-semibold mt-6">Sponsor</h4>
        <img
          src="/varmland.jpeg"
          alt="Värmland sponsor"
          className="mt-3 w-40 mx-auto rounded-lg"
        />
      </aside>

      <div className="md:col-span-3 mt-4 card">
        <h3 className="font-semibold">Senaste videon</h3>
        <div
          className="mt-3 aspect-video bg-black/40 flex items-center justify-center text-gray-400"
          role="region"
          aria-label="Senaste video - inbäddad video"
        >
          <video
            src={videoUrl}
            className="w-full h-full rounded-md"
            controls
            preload="metadata"
          >
            Din webbläsare stöder inte videouppspelning.
          </video>
        </div>
      </div>
    </section>
  )
}
