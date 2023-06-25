import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const storedIsAuthenticated = localStorage.getItem('isAuthenticated')
const tokenFromLocalStorage = localStorage.getItem('isAuthenticatedToken')

const initialState = {
  isAuthenticated: storedIsAuthenticated
    ? JSON.parse(storedIsAuthenticated)
    : false,
  isLoading: false,
  error: '',
  userToken: tokenFromLocalStorage ? JSON.parse(tokenFromLocalStorage) : '',
  userFirstName: '',
  userLastName: '',
}

const loginUrl = 'http://localhost:3001/api/v1/user/login'
const profileUrl = 'http://localhost:3001/api/v1/user/profile'

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ email, password }) => {
    const { data } = await axios.post(loginUrl, { email, password })
    return data.body.token
  }
)

export const userInfosAsync = createAsyncThunk(
  'auth/userInfosAsync',
  async () => {
    const headers = {
      Authorization: `Bearer ${initialState.userToken}`,
    }
    const { data } = await axios.post(profileUrl, {}, { headers: headers })
    return data
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
      state.userToken = ''
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
      state.userToken = action.payload
      authSlice.caseReducers.login(state, action)
      state.error = ''
    })
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isLoading = false
      state.userToken = ''
      state.error = action.error.message
    })
    builder.addCase(userInfosAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(userInfosAsync.fulfilled, (state, action) => {
      state.isLoading = false
      state.userFirstName = action.payload.body.firstName
      state.userLastName = action.payload.body.lastName
      state.error = ''
    })
    builder.addCase(userInfosAsync.rejected, (state, action) => {
      state.isLoading = false
      state.userFirstName = ''
      state.userLastName = ''
      state.error = action.error.message
    })
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer
