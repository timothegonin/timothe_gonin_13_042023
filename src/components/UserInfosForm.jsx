import React from 'react'

const UserInfosForm = ({ userInfos, handleToogle }) => {
  return (
    <form>
      <div>
        <input type="text" placeholder={userInfos.firstName} />
        <input type="text" placeholder={userInfos.name} />
      </div>
      <div>
        <button onClick={(e) => handleToogle(e)}>Save</button>
        <button>Cancel</button>
      </div>
    </form>
  )
}

export default UserInfosForm
