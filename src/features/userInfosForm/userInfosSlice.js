import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const tokenFromStorage = sessionStorage.getItem('isAuthenticatedToken')

const initialState = {
  isLoading: false,
  error: '',
  userToken: tokenFromStorage ? JSON.parse(tokenFromStorage) : '',
  newUserFirstName: '',
  newUserLastName: '',
  userFirstNameEntry: '',
  userLastNameEntry: '',
}

const profileUrl = 'http://localhost:3001/api/v1/user/profile'

export const newUserInfosAsync = createAsyncThunk(
  'auth/newUserInfosAsync',
  async ({ firstName, lastName }, { getState }) => {
    const { userToken } = getState().auth
    const headers = {
      Authorization: `Bearer ${userToken}`,
    }
    const { data } = await axios.put(
      profileUrl,
      {
        firstName,
        lastName,
      },
      { headers }
    )
    return data
  }
)

const userInfosSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    setUserInfos: (state, action) => {
      state.newUserFirstName = action.payload.firstName
      state.newUserLastName = action.payload.lastName
    },
    updateUserInfos: (state, action) => {
      state.newUserFirstName = action.payload
      state.newUserLastName = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(newUserInfosAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(newUserInfosAsync.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload.body)
        state.userFirstNameEntry = action.payload.body.firstName
        state.userLastNameEntry = action.payload.body.lastName
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

export const { setUserInfos } = userInfosSlice.actions

export default userInfosSlice.reducer
