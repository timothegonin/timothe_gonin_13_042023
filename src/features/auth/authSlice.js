import { createSlice } from '@reduxjs/toolkit'

const storedIsAuthenticated = JSON.parse(
  localStorage.getItem('isAuthenticated')
)

const initialState = {
  isAuthenticated: storedIsAuthenticated,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
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
