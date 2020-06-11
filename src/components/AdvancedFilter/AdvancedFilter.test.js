import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import AdvancedFilter from "./AdvancedFilter";

describe("AdvancedFilter component", () => {
  const mockChangeValue = jest.fn();
  const stubbedSearchValue = {
    name: "",
    capital: "",
    population: "",
  };

  it("shows all required input fields with empty values", () => {
    const { getByTestId } = render(
      <AdvancedFilter
        searchValue={stubbedSearchValue}
        handleChangeValue={mockChangeValue}
      />
    );

    expect(getByTestId("filter-input-name").value).toBe("");
    expect(getByTestId("filter-input-capital").value).toBe("");
    expect(getByTestId("filter-input-population").value).toBe("");
  });

  it("triggers event handler on input change of name", () => {
    const changedSearchValue = { ...stubbedSearchValue, name: "Slovakia" };
    const { getByTestId, rerender } = render(
      <AdvancedFilter
        searchValue={stubbedSearchValue}
        handleChangeValue={mockChangeValue}
      />
    );

    act(() => {
      fireEvent.change(getByTestId("filter-input-name"), {
        target: { value: "Slovakia" },
      });
    });

    rerender(
      <AdvancedFilter
        searchValue={changedSearchValue}
        handleChangeValue={mockChangeValue}
      />
    );

    expect(getByTestId("filter-input-name").value).toBe("Slovakia");
    expect(mockChangeValue).toBeCalledTimes(1);
  });
});
