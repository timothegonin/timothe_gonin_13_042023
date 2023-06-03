import { useState } from 'react'
import UserInfos from '../components/UserInfos'
import UserInfosForm from '../components/UserInfosForm'
import Account from '../components/Account'
import { useSelector } from 'react-redux'

const Profile = () => {
  const [userInfos, setUserInfos] = useState({
    firstName: 'Tony',
    name: 'Jarvis',
  })

  const { isOpen } = useSelector((store) => store.userInfosSetter)

  // const [toggleStatus, setToggleStatus] = useState(false)
  // const handleToogle = () => {
  //   setToggleStatus(!toggleStatus)
  // }

  // const userView = !toggleStatus ? (
  //   <UserInfos handleToogle={handleToogle} userInfos={userInfos} />
  // ) : (
  //   <UserInfosForm
  //     handleToogle={handleToogle}
  //     userInfos={userInfos}
  //     setUserInfos={setUserInfos}
  //   />
  // )
  const userView = !isOpen ? (
    <UserInfos userInfos={userInfos} />
  ) : (
    <UserInfosForm userInfos={userInfos} setUserInfos={setUserInfos} />
  )

  return (
    <main className="main bg-light">
      <div className="header">
        <h1>Welcome back</h1>
        {userView}
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
    </main>
  )
}

export default Profile
