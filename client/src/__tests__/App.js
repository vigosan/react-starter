import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import App from '../App';

test('renders a text message', () => {
  const { getByTestId } = render(<App name="test" />);
  const message = getByTestId('message');
  expect(message).toHaveTextContent(/hello test!/i);
});

test('it is accesible', async () => {
  const { container } = render(<App name="test" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
