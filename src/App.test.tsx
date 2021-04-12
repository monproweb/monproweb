import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mon pro web facebook link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Page Facebook/i);
  expect(linkElement).toBeInTheDocument();
});
