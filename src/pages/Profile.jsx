import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userInfosAsync } from '../features/auth/authSlice'

import Account from '../components/Account'
import UserInfosView from '../features/userInfosForm/UserInfosView'
import Loader from '../components/Loader'

const Profile = () => {
  const { isLoading } = useSelector((state) => state.userInfos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userInfosAsync())
  }, [])

  return (
    <main className="main bg-light">
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className="header">
            <h1>Welcome back</h1>
            <UserInfosView />
          </div>
          <div className="accounts-wrapper">
            <h2 className="sr-only">Accounts</h2>
            <Account
              title="Argent Bank Checking (x8349)"
              amount="$2,082.79"
              amount_description="Available Balance"
            />
            <Account
              title="Argent Bank Savings (x6712)"
              amount="$10,928.42"
              amount_description="Available Balance"
            />
            <Account
              title="Argent Bank Credit Card (x8349)"
              amount="$184.30"
              amount_description="Current Balance"
            />
          </div>
        </React.Fragment>
      )}
    </main>
  )
}

export default Profile
