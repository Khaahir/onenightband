import React, { useEffect, useState } from 'react'
import { Client, Databases } from 'appwrite'
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT)

const databases = new Databases(client)

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID
  const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID

  useEffect(() => {
    async function fetchEvents() {
      try {
        if (!databaseId || !collectionId) {
          throw new Error("Saknar miljövariabler för Appwrite")
        }

        const res = await databases.listDocuments(databaseId, collectionId)
        setEvents(res.documents || [])
      } catch (err) {
        console.error("Appwrite error:", err)
        setError("Kunde inte hämta event. Kontrollera Appwrite-konfigurationen.")
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [databaseId, collectionId])

  if (loading) {
    return <div className="text-gray-400">Laddar event...</div>
  }

  if (error) {
    return <div className="text-red-400">{error}</div>
  }

  if (events.length === 0) {
    return <div className="text-gray-400">Inga kommande spelningar inlagda.</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kommande spelningar</h2>

      <div className="grid gap-4">
        {events.map((e) => (
          <div key={e.$id} className="card bg-white p-4 rounded-md shadow" role="article">
            <div className="flex justify-between">
              <div className="font-semibold">{e.date}</div>
              <div className="text-gray-600">{e.place}</div>
            </div>
            <p className="mt-2 text-gray-700">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
