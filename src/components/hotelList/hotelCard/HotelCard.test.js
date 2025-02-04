import { render, screen } from "@testing-library/react";
import HotelCard from "./HotelCard";

describe("Hotel Card Component", () => {
  const mockHotelInformation = {
    id: "1111111",
    property: {
      propertyId: "111111",
      title: "Best Hotel Sydney",
      address: ["111 Hotel St", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Best Hotel Sydney",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 5,
        ratingType: "self",
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe King Ultra",
      displayPrice: {
        amount: 375.0,
        currency: "AUD",
      },
      savings: {
        amount: 28.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION",
      },
    },
  };

  it("renders the hotel component correctly with free cancellation", () => {
    render(<HotelCard hotel={mockHotelInformation} />);
    expect(screen.queryByText("Best Hotel Sydney")).toBeInTheDocument();
    expect(screen.queryByText("111 Hotel St, Sydney")).toBeInTheDocument();
    expect(screen.queryByText("Free cancellation")).toBeInTheDocument();
    expect(screen.queryByText("Exclusive Deal")).toBeInTheDocument();
    expect(screen.queryByText("Deluxe King Ultra")).toBeInTheDocument();
  });

  it("renders the hotel component correctly without free cancellation", () => {
    const mockWithoutFreeCancellation = {
      ...mockHotelInformation,
      offer: {
        promotion: {
          title: "Exclusive Deal",
          type: "MEMBER",
        },
        name: "Deluxe King Ultra",
        displayPrice: {
          amount: 375.0,
          currency: "AUD",
        },
        savings: {
          amount: 28.0,
          currency: "AUD",
        },
        cancellationOption: {
          cancellationType: "NOT_REFUNDABLE",
        },
      },
    };
    render(<HotelCard hotel={mockWithoutFreeCancellation} />);
    expect(screen.queryByText("Best Hotel Sydney")).toBeInTheDocument();
    expect(screen.queryByText("111 Hotel St, Sydney")).toBeInTheDocument();
    expect(screen.queryByText("Free cancellation")).not.toBeInTheDocument();
    expect(screen.queryByText("Exclusive Deal")).toBeInTheDocument();
    expect(screen.queryByText("Deluxe King Ultra")).toBeInTheDocument();
  });

  it("renders the hotel component correctly without a promotion", () => {
    const mockWithoutPromotion = {
      ...mockHotelInformation,
      offer: {
        promotion: null,
        name: "Deluxe King Ultra",
        displayPrice: {
          amount: 375.0,
          currency: "AUD",
        },
        savings: {
          amount: 28.0,
          currency: "AUD",
        },
        cancellationOption: {
          cancellationType: "NOT_REFUNDABLE",
        },
      },
    };
    render(<HotelCard hotel={mockWithoutPromotion} />);
    expect(screen.queryByText("Best Hotel Sydney")).toBeInTheDocument();
    expect(screen.queryByText("111 Hotel St, Sydney")).toBeInTheDocument();
    expect(screen.queryByText("Free cancellation")).not.toBeInTheDocument();
    expect(screen.queryByText("Exclusive Deal")).not.toBeInTheDocument();
    expect(screen.queryByText("Deluxe King Ultra")).toBeInTheDocument();
  });
});
