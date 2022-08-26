import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Actions from "./Actions"
import Display from "./Display"
import StyledCountdown, { CountdownCard } from "./styles"
import TimeInput from "./TimeInput"
import CountdownProps, { Time } from "./types"

const secondsToTime = (secs: number): Time => {
  const hours = Math.floor(secs / (60 * 60))
  const divisor_minutes = secs % (60 * 60)
  const minutes = Math.floor(divisor_minutes / 60)
  const divisor_seconds = divisor_minutes % 60
  const seconds = Math.ceil(divisor_seconds)
  return {
    hours,
    minutes,
    seconds
  }
}

const timeToSeconds = (time: Time): number => {
  return (time.hours * 60 * 60) + (time.minutes * 60) + (time.seconds)
}

const Countdown = ({ defaultTime, ...props }: CountdownProps) => {
  const initialTime: Time = useMemo(() => (defaultTime || {
    hours: 0,
    minutes: 0,
    seconds: 0,
  }), [defaultTime])
  const [inputTime, setInputTime] = useState<Time>(initialTime)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [paused, setPaused] = useState<boolean>(false)
  const [started, setStarted] = useState<boolean>(false)

  const handleSubmit = (time: Time) => {
    setInputTime(time)
    setStarted(true)
  }

  const handlePause = () => {
    if(hours + minutes + seconds){
      setPaused(prevState => !prevState)
    }
  }
  const reset = useCallback(() => {
    setInputTime(initialTime)
    setPaused(false)
    setStarted(false)
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }, [initialTime])

  const handleReset = () => {
    reset()
  }

  let count = useRef(0)

  useEffect(() => {
    if(timeToSeconds(inputTime) <= 0) return

    const displayTime = count.current ? secondsToTime(count.current) : inputTime
    setHours(displayTime.hours)
    setMinutes(displayTime.minutes)
    setSeconds(displayTime.seconds)
    count.current = count.current || timeToSeconds(inputTime)//deals with pause
    const timeout = setInterval(() => {
      if(!paused){
        count.current -= 1
        const timeLeft = secondsToTime(count.current)
        setHours(timeLeft.hours)
        setMinutes(timeLeft.minutes)
        setSeconds(timeLeft.seconds)
        if(count.current === 0) {
          clearInterval(timeout)
          setStarted(false)
        }
      }
    }, 1000)
    return () => {
      clearInterval(timeout)
    }
  }, [inputTime, reset, paused])

  return (
    <StyledCountdown role="timer" className="countdown" aria-live="polite" {...props}>
      <CountdownCard className="countdown__card">
        <TimeInput defaultTime={inputTime} active={!started} onSubmit={handleSubmit} />
        <Display hours={hours} minutes={minutes} seconds={seconds}/>
        <Actions paused={paused} onPause={handlePause} onReset={handleReset}/>
      </CountdownCard>
    </StyledCountdown>
  )
}

export default Countdown