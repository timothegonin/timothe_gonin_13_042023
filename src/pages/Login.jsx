import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthView from '../features/auth/AuthView'

const Login = () => {
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile')
    }
  }, [isAuthenticated, navigate])

  return (
    <main className="main bg-light">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <AuthView />
      </section>
    </main>
  )
}

export default Login
