import React from 'react'
import { render, screen } from '@testing-library/react'
import Display from './index'

test('Actions renders', () => {
  render(<Display hours={1} minutes={2} seconds={3}/>)
  const display = screen.getByText((content, node) => {
    const hasText = (node) => node.textContent === "01:02:03";
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node?.children || []).every(
      (child) => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  })
  expect(display).toBeInTheDocument()
});
