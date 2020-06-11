import { getAllCountries } from "./countries";

const stubbedCountries = [
  {
    numericCode: 1,
    name: "Slovakia",
    capital: "Bratislava",
    region: "Europe",
    population: 500,
    flag: "Slovakia flag",
  },
];

describe("all countries request", () => {
  it("should return status code 200 and a defined body as response", async () => {
    // Mock API
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: 200,
            data: stubbedCountries,
          }),
      })
    );

    const result = await getAllCountries();

    expect(result.status).toBe(200);
    expect(result.data).toBe(stubbedCountries);
  });

  it("should catch error", async () => {
    // Mock API
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: 500,
          }),
      })
    );

    const result = await getAllCountries();

    expect(result.status).toBe(500);
    expect(result.data).not.toBeDefined();
  });
});
