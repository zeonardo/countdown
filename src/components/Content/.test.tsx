import React from 'react'
import { render, screen } from '@testing-library/react'
import Content from './index'

test('Content renders', () => {
  render(<Content>this is a test</Content>)
  const content = screen.getByText(/this is a test/i)
  expect(content).toBeInTheDocument()
});