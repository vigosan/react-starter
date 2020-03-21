import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders a text message', () => {
  const { getByRole } = render(<App name="test" />);
  const message = getByRole('heading');
  expect(message).toHaveTextContent(/hello test!/i);
});
