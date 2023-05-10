import React from 'react'
import styled from 'styled-components'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 13px;
  input {
    padding: 10px;
    font-size: 1.2rem;
    font-size: 12px;
    border: 1.5px solid #b8c4ce;
    border-radius: 2.5px;
    color: #b8c4ce;
    width: 167px;
    &::placeholder {
      color: #b8c4ce;
    }
  }
`

const ButtonsWrapper = styled.div`
  margin-top: 9px;
  display: flex;
  justify-content: center;
  gap: 13px;
  button {
    cursor: pointer;
    width: 101px;
    height: 35px;
    border-radius: 2.5px;
    border: 1.5px solid #a9acea;
    background-color: #fff;
    color: #5256ec;
    font-weight: bold;
    font-size: 12px;
    padding: 10px;
  }
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const UserInfosForm = ({ userInfos, handleToogle, setUserInfos }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setUserInfos({ firstName: userInfos.firstName, name: userInfos.name })
    handleToogle()
  }

  const handleInput = (e) => {
    e.preventDefault()
    setUserInfos({ firstName: '', name: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
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
      </InputWrapper>

      <ButtonsWrapper>
        <button>Save</button>
        <button onClick={(e) => handleInput(e)}>Cancel</button>
      </ButtonsWrapper>
    </form>
  )
}

export default UserInfosForm
