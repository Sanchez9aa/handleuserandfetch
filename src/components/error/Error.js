import React from 'react'

export default function Error({error}) {
  return (
    <div>
      <h2> Ha ocurrido un error</h2>
      <hr></hr>
      <p>{error}</p>
    </div>
  )
}
