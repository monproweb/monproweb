import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
});

test("renders monproweb home link", () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/Mon Pro Web/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders black lives matter link", () => {
  render(<NavBar />);
  const linkElement = screen.getByText(
    /Soutenez la Equal Justice Initiative./i
  );
  expect(linkElement).toBeInTheDocument();
});
