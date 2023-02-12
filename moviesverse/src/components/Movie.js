import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'>
      <img src={props.poster} alt="" />
        <p>{props.title}</p>
        <p>{props.year}</p>
        <p>{props.ImdbID}</p>
    </div>
  )
}

export default Movie