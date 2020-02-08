import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders eduque tous chiens loisirs canins link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Eduque tous chiens loisirs canins/i);
  expect(linkElement).toBeInTheDocument();
});
