import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserInfosAsync } from '../features/user/userSlice'

import Account from '../components/Account'
import UserInfos from '../components/UserInfos'

const Profile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfosAsync())
  }, [])

  return (
    <main className="main bg-light">
      <React.Fragment>
        <div className="header">
          <h1>Welcome back</h1>
          <UserInfos />
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
    </main>
  )
}

export default Profile
