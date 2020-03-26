import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders facebook link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Notre page Facebook/i);
  expect(linkElement).toBeInTheDocument();
});
