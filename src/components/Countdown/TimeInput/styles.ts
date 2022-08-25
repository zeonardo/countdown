import styled from "styled-components"
import config from "../../../styles/config"

const StyledTimeInput = styled.form`
  display: inline-flex;
  margin: 0;
  align-items: center;
`

const StyledInput = styled.input`
  display: block;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 0;
  border: 1px solid ${config.color.primary};
  border-radius: 4px;
  appearance: none;
  margin: 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder{
    color: ${config.color.gray};
  }
  &:disabled{
    color: ${config.color.gray};
    border-color: currentColor;
  }
`

export { StyledInput }
export default StyledTimeInput