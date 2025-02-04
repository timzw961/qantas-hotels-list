import { render } from "@testing-library/react";
import Rating from "./Rating";
import "@testing-library/jest-dom";

describe("Rating Component", () => {
  describe("Star Rating", () => {
    it("renders correct number of stars for full rating", () => {
      const { container } = render(
        <Rating ratingType="star" ratingValue={5} />
      );
      const fullStars = container.getElementsByClassName("fullStar");
      expect(fullStars.length).toBe(5);

      const halfStars = container.getElementsByClassName("halfStar");
      expect(halfStars.length).toBe(0);

      const emptyStars = container.getElementsByClassName("emptyStar");
      expect(emptyStars.length).toBe(0);
    });

    it("renders correct number of stars for partial rating with half star", () => {
      const { container } = render(
        <Rating ratingType="star" ratingValue={3.5} />
      );
      const fullStars = container.getElementsByClassName("fullStar");
      expect(fullStars.length).toBe(3);

      const halfStars = container.getElementsByClassName("halfStar");
      expect(halfStars.length).toBe(1);

      const emptyStars = container.getElementsByClassName("emptyStar");
      expect(emptyStars.length).toBe(1);
    });

    it("renders correct number of stars for partial rating without half star", () => {
      const { container } = render(
        <Rating ratingType="star" ratingValue={3} />
      );
      const fullStars = container.getElementsByClassName("fullStar");
      expect(fullStars.length).toBe(3);

      const halfStars = container.getElementsByClassName("halfStar");
      expect(halfStars.length).toBe(0);

      const emptyStars = container.getElementsByClassName("emptyStar");
      expect(emptyStars.length).toBe(2);
    });
  });

  describe("Self Rating", () => {
    it("renders correct number of circles for full rating", () => {
      const { container } = render(
        <Rating ratingType="self" ratingValue={5} />
      );
      const fullCircles = container.getElementsByClassName("fullCircle");
      expect(fullCircles.length).toBe(5);

      const halfCircles = container.getElementsByClassName("halfCircle");
      expect(halfCircles.length).toBe(0);

      const emptyCircles = container.getElementsByClassName("emptyCircle");
      expect(emptyCircles.length).toBe(0);
    });

    it("renders correct number of circles for partial rating with half circle", () => {
      const { container } = render(
        <Rating ratingType="self" ratingValue={2.5} />
      );
      const fullCircles = container.getElementsByClassName("fullCircle");
      expect(fullCircles.length).toBe(2);

      const halfCircles = container.getElementsByClassName("halfCircle");
      expect(halfCircles.length).toBe(1);

      const emptyCircles = container.getElementsByClassName("emptyCircle");
      expect(emptyCircles.length).toBe(2);
    });

    it("renders correct number of stars for partial rating without half circle", () => {
      const { container } = render(
        <Rating ratingType="self" ratingValue={2} />
      );
      const fullCircles = container.getElementsByClassName("fullCircle");
      expect(fullCircles.length).toBe(2);

      const halfCircles = container.getElementsByClassName("halfCircle");
      expect(halfCircles.length).toBe(0);

      const emptyCircles = container.getElementsByClassName("emptyCircle");
      expect(emptyCircles.length).toBe(3);
    });
  });
});
