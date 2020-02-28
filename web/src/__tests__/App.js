import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

test('renders a text message', () => {
  const { getByTestId } = render(<App app="test" />);
  const message = getByTestId('message');
  expect(message).toHaveTextContent(/Hello test!/);
});
