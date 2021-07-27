import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
});

it("renders h1 tagline", () => {
  render(<Home />);
  expect(
    screen.getByText("Je construis des applications Web et mobiles.")
  ).toBeInTheDocument();
});
