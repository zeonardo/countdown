import StyledDigits from "./styles"
import DigitsProps from "./types"

const Digits = ({ children, ...props }: DigitsProps) => {
  return <StyledDigits className="countdown__digits" {...props}>{`0${children}`.slice(-2)}</StyledDigits>
}

export default Digits