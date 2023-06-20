import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formIsOpen: false,
  userFirstName: '',
  userLastName: '',
}

const userInfosSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    openForm: (state) => {
      state.formIsOpen = true
    },
    closeForm: (state) => {
      state.formIsOpen = false
    },
    setUserInfos: (state, action) => {
      state.userFirstName = action.payload.firstName
      state.userLastName = action.payload.lastName
    },
  },
})

export const { openForm, closeForm, setUserInfos } = userInfosSlice.actions

export default userInfosSlice.reducer
