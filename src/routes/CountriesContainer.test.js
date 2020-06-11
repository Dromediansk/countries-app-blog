import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import CountriesContainer from "./CountriesContainer";
import { useFetch } from "../utils/customHooks";

jest.mock("../utils/customHooks");

const stubbedCountries = [
  {
    numericCode: 1,
    name: "Slovakia",
    capital: "Bratislava",
    region: "Europe",
    population: 500,
    flag: "Slovakia flag",
  },
  {
    numericCode: 2,
    name: "Austria",
    capital: "Vienna",
    region: "Europe",
    population: 1000,
    flag: "Austria flag",
  },
  {
    numericCode: 3,
    name: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: 1500,
    flag: "German flag",
  },
];

describe("CountriesContainer", () => {
  it("shows loading when data are being fetched", () => {
    useFetch.mockReturnValue({
      loading: true,
      data: [],
      error: null,
    });

    const { getByTestId } = render(<CountriesContainer />);

    expect(getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("shows countries when data are fetched", () => {
    useFetch.mockReturnValue({
      loading: false,
      data: stubbedCountries,
      error: null,
    });
    const { getByTestId } = render(<CountriesContainer />);

    expect(getByTestId("Slovakia-card")).toBeInTheDocument();
  });

  it("shows error notification if error occurs", () => {
    useFetch.mockReturnValue({
      loading: false,
      data: [],
      error: "Some error occured!",
    });
    const { getByTestId } = render(<CountriesContainer />);

    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(getByTestId("error-message")).toHaveTextContent(
      "Ooops. An error occured!"
    );
  });

  it("should filter countries by name when input value is changed", () => {
    useFetch.mockReturnValue({
      loading: false,
      data: stubbedCountries,
      error: null,
    });
    const { getByTestId } = render(<CountriesContainer />);

    act(() => {
      fireEvent.change(getByTestId("filter-input-name"), {
        target: { value: "Slov" },
      });
    });

    expect(getByTestId("countries-container").children).toHaveLength(1);
    expect(getByTestId("countries-container").textContent).toContain(
      "Slovakia"
    );
  });
});
