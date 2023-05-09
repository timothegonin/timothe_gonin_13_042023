import React from 'react'

const UserInfosForm = ({ userInfos, handleToogle, setUserInfos }) => {
  const handleInput = (e) => {
    e.preventDefault()
    setUserInfos({ firstName: '', name: '' })
  }

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder={
            userInfos.firstName.length > 0 ? userInfos.firstName : 'Firstname'
          }
          value={userInfos.firstName}
          onChange={(e) =>
            setUserInfos({ ...userInfos, firstName: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder={userInfos.name.length > 0 ? userInfos.name : 'Name'}
          value={userInfos.name}
          onChange={(e) => setUserInfos({ ...userInfos, name: e.target.value })}
          required
        />
      </div>
      <div>
        <button onClick={(e) => handleToogle(e)}>Save</button>
        <button onClick={(e) => handleInput(e)}>Cancel</button>
      </div>
    </form>
  )
}

export default UserInfosForm
