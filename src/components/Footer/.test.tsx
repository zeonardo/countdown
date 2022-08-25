import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './index'

test('Footer renders', () => {
  render(<Footer>this is a test</Footer>)
  const footer = screen.getByText(/this is a test/i)
  expect(footer).toBeInTheDocument()
});
