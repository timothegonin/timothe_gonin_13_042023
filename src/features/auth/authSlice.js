import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const storedIsAuthenticated = JSON.parse(
  localStorage.getItem('isAuthenticated'),
  localStorage.getItem('isAuthenticatedToken')
)

const initialState = {
  isAuthenticated: storedIsAuthenticated,
  isAuthenticatedToken: storedIsAuthenticated,
}

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        { email, password }
      )
      const token = response.data.body.token
      return token
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuthenticated = true
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('isAuthenticatedToken', JSON.stringify(payload))
    },
    logout: (state) => {
      state.isAuthenticated = false
      localStorage.setItem('isAuthenticated', 'false')
      localStorage.removeItem('isAuthenticatedToken')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.isLoading = false
      state.isAuthenticatedToken = action.payload
      state.error = ''
    })
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isLoading = false
      state.isAuthenticatedToken = ''
      state.error = action.error.message
    })
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
