import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});
