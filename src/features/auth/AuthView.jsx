import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from './authSlice'

const AuthView = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login())
    navigate('/profile')
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button onClick={handleLogin} className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  )
}

export default AuthView
