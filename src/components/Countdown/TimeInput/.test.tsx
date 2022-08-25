import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import TimeInput from './index'
import { Time } from '../types';

const emptyFunc = () => {}
test('TimeInput renders', () => {
  render(<TimeInput data-testid="test-form" defaultTime={{ hours: 0, minutes: 0, seconds: 0}} active={true} onSubmit={emptyFunc}/>)

  const timeInput = screen.getByTestId('test-form')
  expect(timeInput).toBeInTheDocument()
});

test('TimeInput inputs and button renders', () => {
  render(<TimeInput defaultTime={{ hours: 0, minutes: 0, seconds: 0}} active={true} onSubmit={emptyFunc}/>)

  const inputs = screen.getAllByDisplayValue('')
  expect(inputs.length).toEqual(3);

  const button = screen.getByText(/start/i)
  expect(button).toBeInTheDocument()
});

test('TimeInput has default digits', () => {
  render(<TimeInput defaultTime={{ hours: 1, minutes: 2, seconds: 3}} active={true} onSubmit={emptyFunc}/>)

  const inputHours = screen.getByPlaceholderText('hh')
  const inputMinutes = screen.getByPlaceholderText('mm')
  const inputSeconds = screen.getByPlaceholderText('ss')
  /* 
  const button = screen.getByRole('button', { name: /start/i })
  fireEvent.click(button)
   */
  expect(inputHours).toHaveAttribute('value', '1')
  expect(inputMinutes).toHaveAttribute('value', '2')
  expect(inputSeconds).toHaveAttribute('value', '3')
});

//TODO: implement TimeInput form test
/* 
test('TimeInput returns time', () => {
  let inputTime = {}
  const handleSubmit = (time: Time) => {
    console.log('##', inputTime)
    inputTime = time
  }
  render(<TimeInput data-testid="test-form" defaultTime={{ hours: 1, minutes: 2, seconds: 3}} active={true} onSubmit={handleSubmit}/>)
  const form = screen.getByTestId('test-form')
  fireEvent.submit(form)
  console.log('>>', inputTime)
});
 */