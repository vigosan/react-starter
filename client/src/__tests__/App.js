import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders a text message', () => {
  const { getByRole } = render(<App />);
  const message = getByRole('heading');

  expect(message).toHaveTextContent(/Hello World!/i);
});
