import styles from "./Rating.module.css";

interface RatingProps {
  ratingType: string;
  ratingValue: number;
  max?: number;
}

const Rating = ({ ratingType, ratingValue, max = 5 }: RatingProps) => {
  const fullIcons = Math.floor(ratingValue);
  const hasHalfIcon = ratingValue % 1 !== 0;
  const emptyIcons = max - fullIcons - (hasHalfIcon ? 1 : 0);

  return (
    <div className={styles.ratingContainer}>
      {ratingType === "star" && (
        <>
          {[...Array(fullIcons)].map((_, i) => (
            <span key={i} className={styles.fullStar}>
              ★
            </span>
          ))}
          {hasHalfIcon && <span className={styles.halfStar}>★</span>}
          {[...Array(emptyIcons)].map((_, i) => (
            <span key={i} className={styles.emptyStar}>
              ★
            </span>
          ))}
        </>
      )}

      {ratingType === "self" && (
        <>
          {[...Array(fullIcons)].map((_, i) => (
            <div key={i} className={styles.fullCircle}></div>
          ))}
          {hasHalfIcon && <div className={styles.halfCircle}></div>}
          {[...Array(emptyIcons)].map((_, i) => (
            <div key={i} className={styles.emptyCircle}></div>
          ))}
        </>
      )}
    </div>
  );
};

export default Rating;
