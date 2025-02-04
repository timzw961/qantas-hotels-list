import styles from "./HotelPrice.module.css";
import { Price } from "@/types";

const HotelPrice = ({
  offerPrice,
  savings,
}: {
  offerPrice: number;
  savings?: Price;
}) => {
  return (
    <div className={styles.priceBlock}>
      <p className={styles.nightDescription}>
        <b>1 </b>night total (AUD)
      </p>
      <p className={styles.price}>
        <span className={styles.priceIcon}>$</span>
        {offerPrice}
      </p>
      {savings && <p className={styles.savings}>Save ${savings.amount}~</p>}
    </div>
  );
};

export default HotelPrice;
