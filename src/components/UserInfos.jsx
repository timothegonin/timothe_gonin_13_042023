import React from 'react'

const UserInfos = ({ userInfos, handleToogle }) => {
  return (
    <React.Fragment>
      <h2>{`${userInfos.firstName} ${userInfos.name}!`}</h2>
      <button className="edit-button" onClick={handleToogle}>
        Edit Name
      </button>
    </React.Fragment>
  )
}

export default UserInfos
