import React, { useState } from "react";
import { HotelInformation } from "@/types";
import styles from "./HotelHeader.module.css";

interface HotelHeaderProps {
  hotels: HotelInformation[];
  onSort: (sortedHotels: HotelInformation[]) => void;
}

const HotelHeader = ({ hotels, onSort }: HotelHeaderProps) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const handleSort = (order: "asc" | "desc") => {
    setSortOrder(order);
    const sortedHotels = [...hotels].sort((a, b) => {
      const priceA = a.offer.displayPrice.amount;
      const priceB = b.offer.displayPrice.amount;
      return order === "asc" ? priceA - priceB : priceB - priceA;
    });
    onSort(sortedHotels);
  };

  return (
    <div className={styles.container}>
      <div>
        {hotels.length} <span className={styles.hotelsIn}>hotels in </span>
        Sydney
      </div>
      <div>
        <span className={styles.label}>Sort by</span>
        <select
          value={sortOrder || ""}
          onChange={(e) => handleSort(e.target.value as "asc" | "desc")}
          className={styles.select}
        >
          <option value="">Select</option>
          <option value="asc">Price low-high</option>
          <option value="desc">Price high-low</option>
        </select>
      </div>
    </div>
  );
};

export default HotelHeader;
