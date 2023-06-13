import { createSlice } from '@reduxjs/toolkit'

const storedIsAuthenticated = JSON.parse(
  localStorage.getItem('isAuthenticated')
)

const initialState = {
  isAuthenticated: storedIsAuthenticated,
  email: '',
  password: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuthenticated = true
      state.email = payload.emailEntry
      state.password = payload.passwordEntry
      localStorage.setItem('isAuthenticated', 'true')
    },
    logout: (state) => {
      state.isAuthenticated = false
      localStorage.setItem('isAuthenticated', 'false')
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
