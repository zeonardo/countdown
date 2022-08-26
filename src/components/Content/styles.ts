import styled from 'styled-components'
import { StyledContentProps } from './types';

const StyledContent = styled.main<StyledContentProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$align === 'top' ? 'flex-start' : props.$align === 'bottom' ? 'flex-end' : 'center'};
  align-items: center;
  background-color: rgba(238,147,35,0.5);
  padding: 1rem;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
`;

const ContentBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: -1;
  &:after{
    content: '';
    display: table;
    clear: both;
  }
`;
export default StyledContent

export { ContentBackground }

