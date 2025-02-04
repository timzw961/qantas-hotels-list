import { render, screen, fireEvent } from "@testing-library/react";
import HotelHeader from "./HotelHeader";
import "@testing-library/jest-dom";

describe("HotelHeader Component", () => {
  const mockHotels = [
    {
      property: { title: "Hotel A" },
      offer: { displayPrice: { amount: 200 } },
    },
    {
      property: { title: "Hotel B" },
      offer: { displayPrice: { amount: 100 } },
    },
    {
      property: { title: "Hotel C" },
      offer: { displayPrice: { amount: 300 } },
    },
  ];

  const mockOnSort = jest.fn();
  it("calls onSort with correctly sorted hotels (ascending)", () => {
    render(<HotelHeader hotels={mockHotels} onSort={mockOnSort} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "asc" },
    });

    expect(mockOnSort).toHaveBeenCalledTimes(1);
    const sortedHotels = mockOnSort.mock.calls[0][0];

    expect(sortedHotels[0].offer.displayPrice.amount).toBe(100);
    expect(sortedHotels[1].offer.displayPrice.amount).toBe(200);
    expect(sortedHotels[2].offer.displayPrice.amount).toBe(300);
  });

  it("calls onSort with correctly sorted hotels (descending)", () => {
    render(<HotelHeader hotels={mockHotels} onSort={mockOnSort} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "desc" },
    });

    expect(mockOnSort).toHaveBeenCalledTimes(2);
    const sortedHotels = mockOnSort.mock.calls[1][0];

    expect(sortedHotels[0].offer.displayPrice.amount).toBe(300);
    expect(sortedHotels[1].offer.displayPrice.amount).toBe(200);
    expect(sortedHotels[2].offer.displayPrice.amount).toBe(100);
  });
});
