import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("Home page component", () => {
  it("shows corresponding welcome text and image on page load", () => {
    const { getByTestId, getByAltText } = render(<Home />);
    const welcomeTitle = "welcome";
    const appAboutText = "appAbout";
    const explore = "explore";

    expect(getByTestId("home-page")).toHaveTextContent(welcomeTitle);
    expect(getByTestId("home-page")).toHaveTextContent(appAboutText);
    expect(getByTestId("home-page")).toHaveTextContent(explore);

    expect(getByAltText("World")).toBeInTheDocument();
  });
});
