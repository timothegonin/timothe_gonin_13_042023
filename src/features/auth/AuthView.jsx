import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './authSlice'
import axios from 'axios'

const AuthView = () => {
  const dispatch = useDispatch()

  const [emailEntry, setEmail] = useState('')
  const [passwordEntry, setPasswordEntry] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        { email: emailEntry, password: passwordEntry }
      )
      // console.log(response.data)
      response.data.body.token &&
        dispatch(login({ token: response.data.body.token }))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={emailEntry}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={passwordEntry}
          onChange={(e) => setPasswordEntry(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  )
}

export default AuthView
