import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent } from '../../test/test-utils';
import About from './About';
import { screen } from '@testing-library/react'

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  render(<About />);
  expect(screen.queryByText("About Page")).toBeTruthy();
  expect(screen.queryAllByText("Increment")).toBeTruthy();
  expect(screen.queryAllByText("Current Count: 0")).toBeTruthy();
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  render(<About />);
  expect(screen.queryAllByTestId("Current Count: 0")).toBeTruthy();
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.queryAllByTestId("Current Count: 1")).toBeTruthy();
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.queryAllByTestId("Current Count: 2")).toBeTruthy();
});
