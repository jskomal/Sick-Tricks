import React from 'react'
import './TrickCard.css'

const TrickCard = ({ name, stance, obstacle, tutorial, id }) => {
  return (
    <article className='trick-card'>
      <h2 className='trick-title'>{name}</h2>
      <h3>stance: {stance}</h3>
      <h3>obstacle: {obstacle}</h3>
      <a href={tutorial}>tutorial</a>
      <button>delete trick</button>
    </article>
  )
}

export default TrickCard
