import React from 'react';
import { render } from '../../test/test-utils';
import LayoutContainer from './LayoutContainer';
import { screen, fireEvent } from '@testing-library/react'

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  render(<LayoutContainer />);
  expect(screen.queryByText("Welcome!")).toBeTruthy();
  expect(screen.queryAllByText("Go to about")).toBeTruthy();
  fireEvent.click(screen.getByText("Go to about"));
  await screen.findByText("About Page");
  expect(screen.queryByText("About Page")).toBeTruthy();
  expect(screen.queryAllByText("Increment")).toBeTruthy();
  expect(screen.queryAllByText("Current Count: 0")).toBeTruthy();
});
