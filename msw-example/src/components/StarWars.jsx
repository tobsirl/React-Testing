import React, { useState, useEffect } from 'react'

export default function StarWars() {
  const [swData, setSwData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  return (
    <div>
      <h1>load data</h1>
    </div>
  )
}
