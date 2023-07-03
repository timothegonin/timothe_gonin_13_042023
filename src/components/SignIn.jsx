import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUserAsync } from '../features/user/userSlice'

const SignIn = () => {
  const dispatch = useDispatch()

  const [emailEntry, setEmail] = useState('')
  const [passwordEntry, setPasswordEntry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUserAsync({ email: emailEntry, password: passwordEntry }))
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
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={passwordEntry}
          onChange={(e) => setPasswordEntry(e.target.value)}
          required
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

export default SignIn
