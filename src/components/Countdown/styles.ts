import styled from "styled-components"
import config from "../../styles/config"

const StyledCountdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CountdownCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 50vw;
  min-width: 300px;
  max-width: 800px;
  z-index: 0;
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${config.color.white};
    opacity: 0.8;
    filter: blur(2px);
    border-radius: 1rem;
    z-index: -1;
  }
`
export { CountdownCard }
export default StyledCountdown