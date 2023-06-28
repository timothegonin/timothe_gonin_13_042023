import styled, { keyframes } from 'styled-components'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLE                                                                   │
  └─────────────────────────────────────────────────────────────────────────┘
  */

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
const MiniLoader = () => {
  return (
    <BounceWrapper>
      <BouncePoint className="bounce1"></BouncePoint>
      <BouncePoint className="bounce2"></BouncePoint>
      <BouncePoint className="bounce3"></BouncePoint>
    </BounceWrapper>
  )
}

export default MiniLoader
