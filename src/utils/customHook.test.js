import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./customHooks";

const countriesData = [
  { name: "Slovakia", capital: "Bratislava" },
  { name: "Germany", capital: "Berlin" },
];

afterEach(() => {
  global.fetch.mockClear();
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe("use fetch", () => {
  it("return data when fetched", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(countriesData),
      })
    );
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("api/countriesUrl-mocked", { current: true }, [])
    );

    await waitForNextUpdate();

    expect(result.current).toStrictEqual({
      loading: false,
      data: countriesData,
      error: null,
    });
  });
});
