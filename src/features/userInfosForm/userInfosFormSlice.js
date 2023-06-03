import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
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
  },
})

export const { open, close } = userInfosFormSlice.actions

export default userInfosFormSlice.reducer
