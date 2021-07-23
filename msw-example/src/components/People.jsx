import React, { useState, useEffect } from 'react'
import Person from './Person'

export default function People() {
  const [swData, setSwData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchData() {
    try {
      const response = await fetch('https://swapi.dev/api/people')
      const data = await response.json()
      setSwData(data.results)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (error) {
    return `Sorry error loading your data ${error.message}`
  }

  if (loading) {
    return <p>Loading...</p>
  }

  console.log('swData :>> ', swData)

  return (
    <div>
      {swData.map((person) => (
        <Person key={person.name} {...person}/>
      ))}
    </div>
  )
}
