import React, { useState } from 'react'
import './TrickCard.css'

const TrickCard = ({ name, stance, obstacle, tutorial, id, deleteTrick }) => {
  const [attempts, setAttempts] = useState(0)

  const addAttempt = () => {
    setAttempts(attempts + 1)
  }

  return (
    <article className='trick-card' id={name}>
      <h2 className='trick-title'>{name}</h2>
      <div className='detail-pair'>
        <h5>
          <em>stance:</em>
        </h5>
        <h3>{stance}</h3>
      </div>
      <div className='detail-pair'>
        <h5>
          <em>obstacle:</em>
        </h5>
        <h3>{obstacle}</h3>
      </div>
      <div className='detail-pair'>
        <h5>
          <em>attempts:</em>
        </h5>
        <h3>{attempts}</h3>
      </div>
      {tutorial && <a href={tutorial}>tutorial</a>}
      <button className='trick-button' id={`attempt${name.trim()}`} onClick={addAttempt}>
        add attempt
      </button>
      <button
        className='trick-button'
        id={`delete${name.trim()}`}
        onClick={(e) => deleteTrick(id)}
      >
        delete trick
      </button>
    </article>
  )
}

export default TrickCard
