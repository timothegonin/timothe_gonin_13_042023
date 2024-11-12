import React from 'react'
import styled from 'styled-components'

/**
 * Displaying account information
 * @function Account
 * @returns {JSXElement}
 */

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
    color: #00bc77;
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
    <section className="flex flex-col justify-between items-center mx-auto my-0 mb-8 p-5 text-left bg-white leading-8 w-4/5 rounded-[5px] min-[720px]:flex-row">
      <div className="w-full flex-1">
        <h3 className="m-0 p-0 text-[1rem]">{title}</h3>
        <p className="m-0 text-[2.5rem] font-bold">{amount}</p>
        <p className="m-0">{amount_description}</p>
      </div>
      <div className="w-full flex-1 min-[720px]:grow-0">
        <TransactionButton className="rounded-[5px] block w-full p-[6px] text-[1.1rem] font-bold mt-1rem border-[3px] border-[#00bc77] bg-[#00bc77] text-white shadow-slate-300 shadow-md min-[720px]:w-48">
          View transactions
        </TransactionButton>
      </div>
    </section>
  )
}

export default Account
