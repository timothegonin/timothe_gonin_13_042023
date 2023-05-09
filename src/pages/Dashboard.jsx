import { useState } from 'react'
import HelloUser from '../components/HelloUser'
import UserInfosForm from '../components/UserInfosForm'
import Account from '../components/Account'

const Dashboard = () => {
  const [toggleStatus, setToggleStatus] = useState(false)

  const [userInfos, setUserInfos] = useState({
    firstName: 'Tony',
    name: 'Jarvis',
  })

  const handleToogle = () => {
    setToggleStatus(!toggleStatus)
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        {!toggleStatus ? (
          <HelloUser handleToogle={handleToogle} userInfos={userInfos} />
        ) : (
          <UserInfosForm
            handleToogle={handleToogle}
            userInfos={userInfos}
            setUserInfos={setUserInfos}
          />
        )}
      </div>
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
    </main>
  )
}

export default Dashboard
