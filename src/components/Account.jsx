import React from 'react'
import styled from 'styled-components'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const TransactionButton = styled.button`
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:hover {
    color: #6458f5;
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
    border-radius: 5px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.25s ease-in-out;
  }
`
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Account = ({ title, amount, amount_description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amount_description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <TransactionButton className="transaction-button">
          View transactions
        </TransactionButton>
      </div>
    </section>
  )
}

export default Account
