import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUserAsync } from '../features/user/userSlice'

/**
 * Component for rendering the sign-in form.
 * @returns {JSX.Element} The rendered sign-in form component.
 */
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
      <div className="flex flex-col text-left mb-4">
        <label htmlFor="username" className="font-bold">
          Username
        </label>
        <input
          className="p-[5px] text-xl rounded-[5px] border-[1.5px] border-[#b8c4ce]"
          type="text"
          id="username"
          value={emailEntry}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col text-left mb-4">
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          className="p-[5px] text-xl rounded-[5px] border-[1.5px] border-[#b8c4ce]"
          type="password"
          id="password"
          value={passwordEntry}
          onChange={(e) => setPasswordEntry(e.target.value)}
          required
        />
      </div>
      <div className="flex">
        <input className="cursor-pointer" type="checkbox" id="remember-me" />
        <label htmlFor="remember-me" className="ms-1">
          Remember me
        </label>
      </div>
      <button
        className="block w-full p-2 rounded-[5px] text-lg font-bold mt-4 text-white border-0 bg-[#00bc77] cursor-pointer underline"
        type="submit"
      >
        Sign In
      </button>
    </form>
  )
}

export default SignIn
