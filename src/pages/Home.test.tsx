import React from 'react';
import { render } from '../../test/test-utils';
import { screen } from '@testing-library/react'


import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  render(<Home />);
  expect(screen.queryByText("Welcome!")).toBeTruthy();
  expect(screen.queryAllByText("Go to about")).toBeTruthy();
});
