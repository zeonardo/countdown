import Button from "../../Button"
import StyledActions from "./styles"
import ActionProps from "./types"

const Actions = ({ paused, onPause, onReset }: ActionProps) => {
  return (
    <StyledActions className="countdown__actions">
      <Button className="countdown__button" role="button" theme={paused ? "secondary" : "ghost"} onClick={onPause}>{paused ? 'Resume' : 'Pause'}</Button>
      &nbsp;
      <Button className="countdown__button" role="button" theme="secondary" onClick={onReset}>Reset</Button>
    </StyledActions>
  )
}

export default Actions