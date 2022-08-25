import imageLogo from '../../assets/logo.svg'
import StyledLogo from './styles'

interface LogoProps extends React.ComponentPropsWithRef<"img"> {
  //props
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <StyledLogo
      src={imageLogo}
      className="logo"
      alt="Countdown"
      width={212}
      height={150}
      { ...props } />
  );
}

export default Logo;