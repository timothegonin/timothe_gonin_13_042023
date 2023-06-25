import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newUserFirstName: '',
  newUserLastName: '',
}

const userInfosSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    setUserInfos: (state, action) => {
      state.newUserFirstName = action.payload.firstName
      state.newUserLastName = action.payload.lastName
    },
  },
})

export const { setUserInfos } = userInfosSlice.actions

export default userInfosSlice.reducer
