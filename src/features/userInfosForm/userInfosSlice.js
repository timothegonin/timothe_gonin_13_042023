import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const tokenFromLocalStorage = JSON.parse(
  localStorage.getItem('isAuthenticatedToken')
)

const initialState = {
  formIsOpen: false,
  isLoading: false,
  error: '',
  userToken: tokenFromLocalStorage,
  userFirstName: '',
  userLastName: '',
}

const url = 'http://localhost:3001/api/v1/user/profile'

export const userInfosAsync = createAsyncThunk(
  'userInfos/userInfosAsync',
  async () => {
    const headers = {
      Authorization: `Bearer ${initialState.userToken}`,
    }
    const { data } = await axios.post(url, {}, { headers: headers })
    return data
  }
)

const userInfosSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    setUserInfos: (state, action) => {
      state.userFirstName = action.payload.firstName
      state.userLastName = action.payload.lastName
    },
  },
  extraReducers: (builder) => {
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

export const { openForm, closeForm, setUserInfos } = userInfosSlice.actions

export default userInfosSlice.reducer
