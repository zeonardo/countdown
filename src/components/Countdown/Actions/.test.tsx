import React from 'react'
import { prettyDOM, render, screen } from '@testing-library/react'
import Actions from './index'

const emptyFunc = () => {}
test('Actions renders', () => {
  render(<Actions paused={false} onPause={emptyFunc} onReset={emptyFunc}/>)
  const pause = screen.getByRole('button', { name: /pause/i })
  const reset = screen.getByRole('button', { name: /reset/i })
  expect(pause).toBeInTheDocument()
  expect(reset).toBeInTheDocument()
});

test('Actions pauses', () => {
  render(<Actions paused={true} onPause={emptyFunc} onReset={emptyFunc}/>)
  const resume = screen.getByRole('button', { name: /resume/i })
  expect(resume).toBeInTheDocument()
});
