import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  userFirstName: 'Tony',
  userLastName: 'Jarvis',
}

const userInfosFormSlice = createSlice({
  name: 'userInfosForm',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    setUserInfos: (state, action) => {
      state.userFirstName = action.payload.firstName
      state.userLastName = action.payload.lastName
    },
  },
})

export const { open, close, setUserInfos } = userInfosFormSlice.actions

export default userInfosFormSlice.reducer
