import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders eduque tous chiens loisirs canins link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Eduque tous chiens loisirs canins/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders thomas developer", () => {
  const { getByText } = render(<App />);
  const developerElement = getByText(/Thomas/i);
  expect(developerElement).toBeInTheDocument();
});

test("renders antoine admin sys", () => {
  const { getByText } = render(<App />);
  const adminsysElement = getByText(/Antoine/i);
  expect(adminsysElement).toBeInTheDocument();
});
