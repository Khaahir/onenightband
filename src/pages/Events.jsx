import React, {useEffect, useState} from 'react'
import { Client, Databases } from 'appwrite'

const endpoint = 'https://[YOUR_APPWRITE_ENDPOINT]' // e.g. https://cloud.appwrite.io/v1
const project = '[YOUR_PROJECT_ID]'
const databaseId = '[YOUR_DATABASE_ID]'
const collectionId = '[YOUR_COLLECTION_ID]'

const client = new Client().setEndpoint(endpoint).setProject(project)
const databases = new Databases(client)

export default function Events(){
  const [events,setEvents] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(()=>{
    async function fetchEvents(){
      try{
        // Replace with your Appwrite listDocuments call
        const res = await databases.listDocuments(databaseId, collectionId)
        setEvents(res.documents || [])
      }catch(err){
        console.error(err)
        setError('Kunde inte hämta event. Kontrollera Appwrite-konfigurationen.')
      }finally{setLoading(false)}
    }
    fetchEvents()
  },[])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kommande spelningar</h2>
      {loading && <div className="text-gray-400">Laddar...</div>}
      {error && <div className="text-red-400">{error}</div>}
      <div className="grid gap-4">
        {events.map(e=>(
          <div key={e.$id} className="card" role="article">
            <div className="flex justify-between">
              <div className="font-semibold">{e.date || e.data?.date}</div>
              <div className="text-gray-400">{e.place || e.data?.place}</div>
            </div>
            <p className="mt-2 text-gray-300">{e.desc || e.data?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
