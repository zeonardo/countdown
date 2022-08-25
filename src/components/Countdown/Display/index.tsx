import { Time } from "../types"
import Digits from "./Digits"
import StyledDisplay from "./styles"

const Display = (time: Time) => {
  return (
    <StyledDisplay $active={time.hours + time.minutes + time.seconds > 0} className="countdown__display">
      <Digits>{time.hours}</Digits>:
      <Digits>{time.minutes}</Digits>:
      <Digits>{time.seconds}</Digits>
    </StyledDisplay>
  )
}

export default Display