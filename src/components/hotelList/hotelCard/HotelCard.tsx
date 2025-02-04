"use client";

import Image from "next/image";
import { HotelInformation } from "@/types";
import styles from "./HotelCard.module.css";
import HotelPrice from "./price/HotelPrice";
import Rating from "./rating/Rating";

interface HotelCardProps {
  hotel: HotelInformation;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const { property, offer } = hotel;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={property.previewImage.url}
          alt={property.title}
          className={styles.hotelImage}
          width={200}
          height={150}
        />
        {offer.promotion && (
          <span className={styles.dealBadge}>{offer.promotion.title}</span>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{property.title} </span>
          <Rating
            ratingValue={property.rating.ratingValue}
            ratingType={property.rating.ratingType}
          />
        </div>

        <div className={styles.offerContainer}>
          <div>
            <span className={styles.address}>
              {property.address[0]}, {property.address[1]}
            </span>
            <a href={"#"} className={styles.offerName}>
              {offer.name}
            </a>

            {offer.cancellationOption.cancellationType ===
              "FREE_CANCELLATION" && (
              <p className={styles.cancellation}>Free cancellation</p>
            )}
          </div>
          <HotelPrice
            offerPrice={offer.displayPrice.amount}
            savings={offer.savings}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
