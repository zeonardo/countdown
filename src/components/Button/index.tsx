import StyledButton from "./styles"
import ButtonProps from "./types"

const Button = ({ theme = 'primary', children, className, ...rest }: ButtonProps) => {
  return (
    <StyledButton
      className={`button button--${theme}${rest.disabled ? ` button--disabled` : ''}${className ? ` ${className}` : ''}`}
      name={theme}
      theme={theme}
      type="submit"
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export default Button