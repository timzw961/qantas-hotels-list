import { render, screen } from "@testing-library/react";
import HotelPrice from "./HotelPrice";

describe("HotelPrice Component", () => {
  it("renders offer price correctly", () => {
    render(<HotelPrice offerPrice={199} />);

    const priceElement = screen.getByText("199");
    expect(priceElement).toBeInTheDocument();

    expect(screen.getByText("night total (AUD)")).toBeInTheDocument();
  });

  it("renders savings correctly", () => {
    render(<HotelPrice offerPrice={199} savings={{ amount: 20 }} />);

    const priceElement = screen.getByText("199");
    expect(priceElement).toBeInTheDocument();

    const savingsElement = screen.getByText("Save $20~");
    expect(savingsElement).toBeInTheDocument();

    expect(screen.getByText("night total (AUD)")).toBeInTheDocument();
  });

  it("does not render savings when not provided", () => {
    render(<HotelPrice offerPrice={199} />);

    const savingsElement = screen.queryByText("Save $");

    expect(savingsElement).not.toBeInTheDocument();
    expect(screen.getByText("night total (AUD)")).toBeInTheDocument();
    expect(screen.getByText("199")).toBeInTheDocument();
  });
});
