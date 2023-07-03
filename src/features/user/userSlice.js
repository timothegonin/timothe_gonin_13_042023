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

export const loginUserAsync = createAsyncThunk(
  'user/loginUserAsync',
  async ({ email, password }) => {
    const { data } = await axios.post(loginUrl, { email, password })
    return data.body.token
  }
)

export const getUserInfosAsync = createAsyncThunk(
  'user/getUserInfosAsync',
  async (_, { getState }) => {
    const { userToken } = getState().user
    const headers = {
      Authorization: `Bearer ${userToken}`,
    }
    const { data } = await axios.post(profileUrl, {}, { headers })
    return data
  }
)

export const updateUserInfosAsync = createAsyncThunk(
  'user/updateUserInfosAsync',
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
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
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
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false
        state.userToken = ''
        state.error = action.error.message
      })
      .addCase(getUserInfosAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserInfosAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.userFirstName = action.payload.body.firstName
        state.userLastName = action.payload.body.lastName
        state.error = ''
      })
      .addCase(getUserInfosAsync.rejected, (state, action) => {
        state.isLoading = false
        state.userFirstName = ''
        state.userLastName = ''
        state.error = action.error.message
      })
      .addCase(updateUserInfosAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUserInfosAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.userFirstName = action.payload.body.firstName
        state.userLastName = action.payload.body.lastName
        state.error = ''
      })
      .addCase(updateUserInfosAsync.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
