import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const storedIsAuthenticated = sessionStorage.getItem('isAuthenticated')
const tokenFromStorage = sessionStorage.getItem('isAuthenticatedToken')

const initialState = {
  isAuthenticated: storedIsAuthenticated
    ? JSON.parse(storedIsAuthenticated)
    : false,
  isLoading: false,
  error: '',
  userToken: tokenFromStorage ? JSON.parse(tokenFromStorage) : '',
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
  async (_, { getState }) => {
    const { userToken } = getState().auth
    const headers = {
      Authorization: `Bearer ${userToken}`,
    }
    const { data } = await axios.post(profileUrl, {}, { headers })
    return data
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuthenticated = true
      sessionStorage.setItem('isAuthenticated', 'true')
      sessionStorage.setItem('isAuthenticatedToken', JSON.stringify(payload))
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.userToken = ''
      sessionStorage.setItem('isAuthenticated', 'false')
      sessionStorage.setItem('isAuthenticatedToken')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.userToken = action.payload
        authSlice.caseReducers.login(state, action)
        state.error = ''
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false
        state.userToken = ''
        state.error = action.error.message
      })
      .addCase(userInfosAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(userInfosAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.userFirstName = action.payload.body.firstName
        state.userLastName = action.payload.body.lastName
        state.error = ''
      })
      .addCase(userInfosAsync.rejected, (state, action) => {
        state.isLoading = false
        state.userFirstName = ''
        state.userLastName = ''
        state.error = action.error.message
      })
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer
