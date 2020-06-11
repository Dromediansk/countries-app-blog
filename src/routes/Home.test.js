import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home page component", () => {
  it('shows "Welcome" text and image on page load', () => {
    const { getByTestId, getByAltText } = render(<Home />);
    const welcomeTitle = "Welcome!";

    expect(getByTestId("home-page")).toHaveTextContent(welcomeTitle);
    expect(getByAltText("World")).toBeInTheDocument();
  });
});
