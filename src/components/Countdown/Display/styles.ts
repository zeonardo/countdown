import styled from "styled-components";
import config from "../../../styles/config";

const StyledDisplay = styled.div<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  line-height: 1;
  font-size: 4rem;
  font-weight: bold;
  padding: 1rem 0;
  color: ${({ $active }) => $active ? config.color.primary : config.color.gray};
  @media(min-width: ${config.breakpoint.small.max}) {
    font-size: 10rem;
    font-size: 10vmin;
  }

`

export default StyledDisplay