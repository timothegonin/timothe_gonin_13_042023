import React from 'react'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../features/userInfosForm/userInfosFormSlice'

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
  border: 1.5px solid #5256ec;
  background-color: #5256ec;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  padding: 10px;
  margin-top: 1.2rem;
  position: relative;
  z-index: 1;
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
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const UserInfos = () => {
  const dispatch = useDispatch()
  const { userFirstName, userLastName } = useSelector(
    (state) => state.userInfosSetter
  )

  return (
    <React.Fragment>
      <h2>{`${userFirstName} ${userLastName}!`}</h2>
      <Button className="edit-button" onClick={() => dispatch(open())}>
        Edit Name
      </Button>
    </React.Fragment>
  )
}

export default UserInfos
