import styled from 'styled-components'
import config from '../../styles/config';
import { StyledContentProps } from './types';

const StyledContent = styled.main<StyledContentProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$align === 'top' ? 'flex-start' : props.$align === 'bottom' ? 'flex-end' : 'center'};
  align-items: center;
  background-color: rgba(0,0,0,0.3);
  background-color: rgba(238,147,35,0.5);
  padding: 1rem;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  &:after{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${({ $background }) => $background ? 'block': 'none'};
    background: ${({ $background }) => $background ? `url('${$background}') no-repeat center`: undefined};
    background-size: cover;
    opacity: 0.3;
    z-index: -1;
  }
  `;
export default StyledContent