import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Argent Bank | Error</title>
      </Helmet>
      <main>
        <h1>Page not found...</h1>
        <Link to="/">Back to home page</Link>
      </main>
    </HelmetProvider>
  )
}

export default Error
