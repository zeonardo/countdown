import React from 'react'
import { render, screen } from '@testing-library/react'
import Digits from './index'

test('Actions renders', () => {
  render(<Digits>7</Digits>)
  const digit = screen.getByText(/07/)
  expect(digit).toBeInTheDocument()
});
