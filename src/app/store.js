import { configureStore } from '@reduxjs/toolkit'
import userInfosFormSlice from '../features/userInfosForm/userInfosFormSlice'

export const store = configureStore({
  reducer: {
    userInfosSetter: userInfosFormSlice,
  },
})
