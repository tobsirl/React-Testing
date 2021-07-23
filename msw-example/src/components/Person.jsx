import React from 'react'

export default function Person({ name, height, mass, hair_color }) {
  return (
    <div className="person-row">
      <p>{name}</p>
    </div>
  )
}
