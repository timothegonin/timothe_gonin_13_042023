import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import userInfosFormSlice from '../features/userInfosForm/userInfosFormSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    userInfosSetter: userInfosFormSlice,
  },
})
