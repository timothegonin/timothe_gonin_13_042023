import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main>
      <h1>Page not found...</h1>
      <Link to="/">Back to home page</Link>
    </main>
  )
}

export default Error
