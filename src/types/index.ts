export interface Image {
  url: string;
  caption: string;
  imageType: string;
}

export interface Rating {
  ratingValue: number;
  ratingType: string;
}

export interface Promotion {
  title: string;
  type: string;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface CancellationOption {
  cancellationType: "FREE_CANCELLATION" | "NOT_REFUNDABLE"; // could add more like PARTIALLY_REFUNDABLE
}

export interface Offer {
  promotion?: Promotion;
  name: string;
  displayPrice: Price;
  savings?: Price;
  cancellationOption: CancellationOption;
}

export interface Property {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: Image;
  rating: Rating;
}

export interface HotelInformation {
  id: string;
  property: Property;
  offer: Offer;
}
