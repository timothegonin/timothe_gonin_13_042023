import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link } from 'react-router-dom'

/**
 * Error component that represents a page not found error.
 * @component Error
 * @returns {JSX.Element} The rendered Error component.
 */

const Error = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Argent Bank | Error</title>
      </Helmet>
      <main className="flex-1 flex flex-col mt-14">
        <h1>Page not found...</h1>
        <Link to="/" className="font-bold underline">
          Back to home page
        </Link>
      </main>
    </HelmetProvider>
  )
}

export default Error
