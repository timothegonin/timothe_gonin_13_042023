import { createSlice } from '@reduxjs/toolkit'

const storedIsAuthenticated = JSON.parse(
  localStorage.getItem('isAuthenticated'),
  localStorage.getItem('isAuthenticatedToken')
)

const initialState = {
  isAuthenticated: storedIsAuthenticated,
  isAuthenticatedToken: storedIsAuthenticated,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuthenticated = true
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem(
        'isAuthenticatedToken',
        JSON.stringify(payload.token)
      )
    },
    logout: (state) => {
      state.isAuthenticated = false
      localStorage.setItem('isAuthenticated', 'false')
      localStorage.removeItem('isAuthenticatedToken')
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
