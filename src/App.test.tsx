import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils.js";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
