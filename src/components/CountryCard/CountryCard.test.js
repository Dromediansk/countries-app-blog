import React from "react";
import CountryCard from "./CountryCard";

import { render } from "@testing-library/react";

const stubbedCountry = {
  name: "Slovakia",
  population: 5000000,
  capital: "Bratislava",
  region: "Europe",
  flag: "Slovakia flag",
};

it("should match snapshot", () => {
  const { asFragment } = render(<CountryCard country={stubbedCountry} />);

  expect(asFragment()).toMatchSnapshot();
});
