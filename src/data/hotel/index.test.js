import { getHotelData } from "./index"; // Replace with the actual path

global.fetch = jest.fn();

describe("getHotelData", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clears all mocks after each test
  });

  it("should return hotel data when fetch is successful", async () => {
    const mockData = {
      results: [
        { id: 1, name: "Hotel A" },
        { id: 2, name: "Hotel B" },
      ],
    };
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const data = await getHotelData();

    expect(data).toEqual(mockData.results);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/data.json");
  });

  it("should throw an error when fetch fails", async () => {
    fetch.mockRejectedValueOnce(new Error());

    await expect(getHotelData()).rejects.toThrow(Error());

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/data.json");
  });
});
