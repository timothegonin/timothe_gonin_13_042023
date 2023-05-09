import React from 'react'

const HelloUser = ({ userInfos, handleToogle }) => {
  return (
    <React.Fragment>
      <h1>
        Welcome back
        <br />
        {`${userInfos.firstName} ${userInfos.name}!`}
      </h1>
      <button className="edit-button" onClick={(e) => handleToogle(e)}>
        Edit Name
      </button>
    </React.Fragment>
  )
}

export default HelloUser
