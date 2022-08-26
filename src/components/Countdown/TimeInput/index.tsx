import React, { useEffect, useRef } from "react"
import Button from "../../Button"
import { Time } from "../types"
import StyledTimeInput, { StyledInput } from "./styles"
import TimeInputProps from "./types"

const TimeInput = ({ defaultTime, active, onSubmit, ...rest }: TimeInputProps) => {
  const inputHours = useRef<HTMLInputElement>(null)
  const inputMinutes = useRef<HTMLInputElement>(null)
  const inputSeconds = useRef<HTMLInputElement>(null)
  const time: Time = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    time[event.target.name as keyof typeof time] = +event.target.value
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('handleSubmit')
    event.preventDefault()
    if(!active
      || (!inputHours?.current?.value
          && !inputMinutes?.current?.value
          && !inputSeconds?.current?.value)
    ) return
    onSubmit(time)
  }
  
  useEffect(() => {
    if(active){
      if(inputHours?.current) inputHours.current.value = ''
      if(inputMinutes?.current) inputMinutes.current.value = ''
      if(inputSeconds?.current) inputSeconds.current.value = ''
    }
  }, [active])
  
  return (
    <StyledTimeInput className="countdown__timeinput" onSubmit={handleSubmit} {...rest}>
      <StyledInput
        ref={inputHours}
        type="number"
        defaultValue={defaultTime.hours ? defaultTime.hours : ''}
        disabled={!active}
        min={0}
        max={48}
        name="hours"
        placeholder="hh"
        className="countdown__input"
        onChange={handleChange}
      />:
      <StyledInput
        ref={inputMinutes}
        type="number"
        defaultValue={defaultTime.minutes ? defaultTime.minutes : ''}
        disabled={!active}
        min={0}
        max={59}
        name="minutes"
        placeholder="mm"
        className="countdown__input"
        onChange={handleChange}
      />:
      <StyledInput
        ref={inputSeconds}
        type="number"
        defaultValue={defaultTime.seconds ? defaultTime.seconds : ''}
        disabled={!active}
        min={0}
        max={59}
        name="seconds"
        placeholder="ss"
        className="countdown__input"
        onChange={handleChange}
      />
      &nbsp;
      <Button className="countdown__button" theme="primary" disabled={!active}>Start</Button>
    </StyledTimeInput>
  )
}

export default TimeInput