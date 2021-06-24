import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders monproweb home link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Mon Pro Web/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders monproweb about link', () => {
  render(<App />)
  const linkElement = screen.getByText(/À-propos/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders monproweb team link', () => {
  render(<App />)
  const linkElement = screen.getByText(/L'équipe/i)
  expect(linkElement).toBeInTheDocument()
})
