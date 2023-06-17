import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const storedIsAuthenticated = JSON.parse(
  localStorage.getItem('isAuthenticated'),
  localStorage.getItem('isAuthenticatedToken')
)

const initialState = {
  isAuthenticated: storedIsAuthenticated,
  isAuthenticatedToken: !storedIsAuthenticated && '',
}

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      { email, password }
    )
    return data.body.token
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
      state.isAuthenticatedToken = ''
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
      authSlice.caseReducers.login(state, action)
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
