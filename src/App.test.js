import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./pages/Home";

test("renders monproweb home link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Mon Pro Web/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders black lives matter link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Soutenez la Equal Justice Initiative./i
  );
  expect(linkElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders h1 tagline", () => {
  render(<Home />);
  expect(
    screen.getByText("Je construis des applications Web et mobiles.")
  ).toBeInTheDocument();
});
