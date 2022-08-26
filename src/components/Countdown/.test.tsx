import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Countdown from './index'

test('Countdown renders', () => {
  render(<Countdown/>)

  const countdown = screen.getByRole('timer')
  expect(countdown).toBeInTheDocument()
});
// TODO: implement countdown assertive tests
/* 
test('Countdown renders', () => {
  render(<Countdown defaultTime={{ hours: 1, minutes: 2, seconds: 3}}/>)
  const countdown = screen.getByRole('timer')
  expect(countdown).toBeInTheDocument()
});
 */