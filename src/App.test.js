import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders monproweb home link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Mon Pro Web/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders black lives matter link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Soutenez la Equal Justice Initiative./i);
  expect(linkElement).toBeInTheDocument();
});
