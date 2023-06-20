import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import userInfosSlice from '../features/userInfosForm/userInfosSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    userInfos: userInfosSlice,
  },
})
