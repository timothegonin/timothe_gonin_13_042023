import styled, { keyframes } from 'styled-components'

/**
 * Displaying loader until the DOM is loaded
 * @function Loader
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const Loader = () => {
  return (
    <SpinWrapper>
      <Spin />
    </SpinWrapper>
  )
}
export default Loader

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

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
  height: calc(100vh - 84px);
`
