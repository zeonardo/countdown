import styled from "styled-components"
import ButtonProps from "./types"
import config from "../../styles/config"

const StyledButton = styled.button<ButtonProps>`
  display: block;
  border-width: 1px;
  border-style: solid;
  margin: 0;
  height: 30px;
  padding: 0 1rem;
  border-radius: 4px;
  color: ${props => props.theme === 'ghost'
    ? config.color.primary
    : config.color.white};
  border-color: ${props => props.theme === 'ghost'
    ? config.color.primary
    : 'transparent'};
  background: ${props => props.theme === 'ghost'
    ? 'transparent'
    : props.disabled
      ? config.color.gray
      : props.theme === 'secondary'
        ? config.color.secondary
        : config.color.primary};
  &:disabled
`

export default StyledButton