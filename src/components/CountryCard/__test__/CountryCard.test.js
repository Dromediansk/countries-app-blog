import React from "react";
import CountryCard from "../CountryCard";

import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

const mockedCountry = {
  name: "Slovakia",
  population: 5000000,
  capital: "Bratislava",
  region: "Europe",
  flag: "../../assets/favourites/Canada.jpg"
};

afterEach(cleanup);

it("matches snapshot", () => {
  const card = renderer
    .create(<CountryCard country={mockedCountry} />)
    .toJSON();
  expect(card).toMatchSnapshot();
});
