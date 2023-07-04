import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

/**
 * @typedef {Object} UserState
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @property {boolean} isLoading - Indicates if a request is in progress.
 * @property {string} error - Error message in case of a problem.
 * @property {string} userToken - User's authentication token.
 * @property {string} userFirstName - User's first name.
 * @property {string} userLastName - User's last name.
 */

const storedIsAuthenticated = sessionStorage.getItem('isAuthenticated')
const tokenFromStorage = sessionStorage.getItem('isAuthenticatedToken')

/**
 * @type {UserState}
 */
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

/**
 * Asynchronous action to log in a user.
 * @function loginUserAsync
 * @async
 * @param {Object} payload - The payload containing the user credentials.
 * @param {string} payload.email - The user's email.
 * @param {string} payload.password - The user's password.
 * @returns {Promise<string>} A promise that resolves to the user authentication token.
 */

export const loginUserAsync = createAsyncThunk(
  'user/loginUserAsync',
  async ({ email, password }) => {
    const { data } = await axios.post(loginUrl, { email, password })
    return data.body.token
  }
)

/**
 * Asynchronous action to get user information.
 * @function getUserInfosAsync
 * @async
 * @param {undefined} _ - Unused parameter (can be set to `null` or ignored).
 * @param {Object} thunkAPI - Redux Toolkit's `thunkAPI` object.
 * @param {Function} thunkAPI.getState - Function to access the current state.
 * @returns {Promise<any>} A promise that resolves to the user information data.
 */
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

/**
 * Asynchronous action to update user information.
 * @function updateUserInfosAsync
 * @async
 * @param {Object} payload - The payload containing the updated user information.
 * @param {string} payload.firstName - The updated first name.
 * @param {string} payload.lastName - The updated last name.
 * @param {Object} thunkAPI - Redux Toolkit's `thunkAPI` object.
 * @param {Function} thunkAPI.getState - Function to access the current state.
 * @returns {Promise<any>} A promise that resolves to the updated user information data.
 */

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
      // LOGIN USER CASES
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

      // GET USER INFOS CASES
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
      // UPDATE USER INFOS CASES
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
