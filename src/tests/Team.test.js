import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Team from "../pages/Team";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Team />, div);
});
