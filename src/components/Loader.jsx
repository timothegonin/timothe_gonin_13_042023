import styled, { keyframes } from 'styled-components'

/**
 * Displaying loader until the DOM is loaded
 * @function Loader
 * @returns {HTMLElement}
 */

/* 
    ┌─────────────────────────────────────────────────────────────────────────┐
    │ STYLES                                                                  │
    └─────────────────────────────────────────────────────────────────────────┘
   */

// SPIN LOADER
const rotate = keyframes`
      from {
          transform: rotate(0deg);
      }
  
      to {
      transform: rotate(360deg);
      }
  `

const Spin = styled.div`
  padding: 10px;
  border: 6px solid #6458f5;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

const SpinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

// BOUNCE LOADER
const inlineGrowing = keyframes` 
  0% {
      transform: scale(0);
  }
  100% {
      transform: scale(1);
  }`

const BounceWrapper = styled.div`
  display: inline-flex;
  gap: 2.5px;
  :first-child {
    animation-delay: -0.3s;
  }
  :nth-child(2) {
    animation-delay: -0.15s;
  }
`

const BouncePoint = styled.div`
  width: 8px;
  height: 8px;
  background: #333;
  border-radius: 50%;
  display: inline-block;
  animation: ${inlineGrowing} 0.5s ease-in-out infinite alternate;
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const Loader = ({ type }) => {
  return type ? (
    <BounceWrapper>
      <BouncePoint className="bounce1"></BouncePoint>
      <BouncePoint className="bounce2"></BouncePoint>
      <BouncePoint className="bounce3"></BouncePoint>
    </BounceWrapper>
  ) : (
    <SpinWrapper>
      <Spin />
    </SpinWrapper>
  )
}
export default Loader
