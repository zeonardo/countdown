import React from 'react'
import { prettyDOM, render, screen } from '@testing-library/react'
import Logo from './index'

test('Logo renders', () => {
  render(<Logo/>)
  const logo = screen.getByAltText(/Countdown/i)
  expect(logo).toBeInTheDocument()
});

test('Logo has src', () => {
  render(<Logo/>)
  const logo = screen.getByAltText(/Countdown/i)
  expect(logo).toHaveAttribute('src', 'logo.svg')
});
