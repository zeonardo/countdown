import React, { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './index'

test('Button renders', () => {
  render(<Button>this is a test</Button>)
  expect(screen.getByText('this is a test')).toBeInTheDocument()
});

test('Button renders with primary class', () => {
  render(<Button>this is a test</Button>)
  const button = screen.getByRole('button', { name: /this is a test/i })
  expect(button).toHaveClass('button--primary')
});

test('Button renders with secondary class', () => {
  render(<Button theme="secondary">this is a test</Button>)
  const button = screen.getByRole('button', { name: /this is a test/i })
  expect(button).toHaveClass('button--secondary')
});

test('Button renders with ghost class', () => {
  render(<Button theme="ghost">this is a test</Button>)
  const button = screen.getByRole('button', { name: /this is a test/i })
  expect(button).toHaveClass('button--ghost')
});

test('Button renders disabled with class', () => {
  render(<Button disabled={true}>this is a test</Button>)
  const button = screen.getByRole('button', { name: /this is a test/i })
  expect(button).toHaveClass('button--disabled')
  expect(button).toBeDisabled()
});

test('Button clicks', () => {
  const ButtonController = () => {
    const [text, setText] = useState('text 1')
    const handleClick = () => {
      setText(prevState => prevState === 'text 1' ? 'text 2' : 'text 1')
    }
    return (
      <>
        <Button onClick={handleClick}>{text}</Button>
      </>
    )
  }

  render(<ButtonController/>)
  const button = screen.getByRole('button', { name: /text 1/i })
  expect(button).toHaveTextContent(/text 1/i)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/text 2/i)
});

