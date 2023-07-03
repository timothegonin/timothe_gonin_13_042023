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
  userFirstNameEntry: '',
  userLastNameEntry: '',
  userFirstName: '',
  userLastName: '',
}

const loginUrl = 'http://localhost:3001/api/v1/user/login'
const profileUrl = 'http://localhost:3001/api/v1/user/profile'

export const loginAsync = createAsyncThunk(
  'user/loginAsync',
  async ({ email, password }) => {
    const { data } = await axios.post(loginUrl, { email, password })
    return data.body.token
  }
)

export const userInfosAsync = createAsyncThunk(
  'user/userInfosAsync',
  async (_, { getState }) => {
    const { userToken } = getState().user
    const headers = {
      Authorization: `Bearer ${userToken}`,
    }
    const { data } = await axios.post(profileUrl, {}, { headers })
    return data
  }
)

export const newUserInfosAsync = createAsyncThunk(
  'user/newUserInfosAsync',
  async ({ firstName, lastName }, { getState }) => {
    const { userToken } = getState().user
    const headers = {
      Authorization: `Bearer ${userToken}`,
    }
    const { data } = await axios.put(
      profileUrl,
      { firstName, lastName },
      { headers }
    )
    return data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      state.userToken = ''
      sessionStorage.setItem('isAuthenticated', 'false')
      sessionStorage.removeItem('isAuthenticatedToken')
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
        state.isAuthenticated = true
        sessionStorage.setItem('isAuthenticated', 'true')
        sessionStorage.setItem(
          'isAuthenticatedToken',
          JSON.stringify(action.payload)
        )
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
      .addCase(newUserInfosAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(newUserInfosAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.userFirstName = action.payload.body.firstName
        state.userLastName = action.payload.body.lastName
        state.userFirstNameEntry = ''
        state.userLastNameEntry = ''
        state.error = ''
      })
      .addCase(newUserInfosAsync.rejected, (state, action) => {
        state.isLoading = false
        state.userFirstNameEntry = ''
        state.userLastNameEntry = ''
        state.error = action.error.message
      })
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
