import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { close, open, setUserInfos } from './userInfosFormSlice.js'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const Button = styled.button`
  cursor: pointer;
  width: 101px;
  height: 35px;
  border-radius: 2.5px;
  font-weight: bold;
  font-size: 12px;
  padding: 10px;
  margin-top: 1.2rem;
  position: relative;
  z-index: 1;
  border: 1.5px solid #5256ec;
  background-color: #5256ec;
  color: #fff;
  &:hover {
    color: #5256ec;
    &::after {
      opacity: 1;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0;
    z-index: -1;
    transition: opacity 250ms;
  }
  ${(props) =>
    props.$outline &&
    `margin-top: 0;
    background-color: #fff;
    color: #5256ec; 
    &:hover {
    color: #fff;
    }
    &::after {
    background: #5256ec;
    }`}
`

const Form = styled.form`
  margin-top: 1.2rem;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 13px;
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
  column-gap: 13px;
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   JSX                                                                       │
  └─────────────────────────────────────────────────────────────────────────────┘
 */

const UserInfosView = () => {
  const { isOpen, userFirstName, userLastName } = useSelector(
    (state) => state.userInfosSetter
  )
  const dispatch = useDispatch()

  const initialState = {
    firstName: userFirstName,
    lastName: userLastName,
  }
  const [newUserInfos, setNewUserInfos] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setUserInfos(newUserInfos))
    dispatch(close())
  }

  const handleInput = (e) => {
    e.preventDefault()
    setNewUserInfos({ firstName: '', lastName: '' })
  }

  return (
    <React.Fragment>
      {!isOpen ? (
        <React.Fragment>
          <h2>{`${userFirstName} ${userLastName}!`}</h2>
          <Button className="edit-button" onClick={() => dispatch(open())}>
            Edit Name
          </Button>
        </React.Fragment>
      ) : (
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <input
              type="text"
              placeholder={
                newUserInfos.firstName.length > 0
                  ? newUserInfos.firstName
                  : 'Firstname'
              }
              value={newUserInfos.firstName}
              onChange={(e) =>
                setNewUserInfos({ ...newUserInfos, firstName: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder={
                newUserInfos.lastName > 0 ? newUserInfos.lastName : 'Name'
              }
              value={newUserInfos.lastName}
              onChange={(e) =>
                setNewUserInfos({ ...newUserInfos, lastName: e.target.value })
              }
              required
            />
          </InputWrapper>

          <ButtonsWrapper>
            <Button $outline>Save</Button>
            <Button onClick={(e) => handleInput(e)} $outline>
              Cancel
            </Button>
          </ButtonsWrapper>
        </Form>
      )}
    </React.Fragment>
  )
}
export default UserInfosView
