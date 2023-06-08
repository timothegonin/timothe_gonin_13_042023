import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthendicated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthendicated = true
      localStorage.setItem('isAuthenticated', 'true')
    },
    logout: (state) => {
      state.isAuthendicated = false
      localStorage.setItem('isAuthenticated', 'false')
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
