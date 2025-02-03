"use client";

import Image from "next/image";
import { HotelInformation } from "@/types";
import styles from "./HotelCard.module.css";

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
        <h3 className={styles.title}>{property.title}</h3>

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
          <div className={styles.priceBlock}>
            <p className={styles.nightDescription}>
              <b>1 </b>night total (AUD)
            </p>
            <p className={styles.price}>
              <span className={styles.priceIcon}>$</span>
              {offer.displayPrice.amount}
            </p>
            {offer.savings && (
              <p className={styles.savings}>Save ${offer.savings.amount}~</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
