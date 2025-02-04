"use client";

import React, { useState } from "react";
import { HotelInformation } from "@/types";
import HotelCard from "./hotelCard/HotelCard";
import styles from "./HotelList.module.css";
import HotelHeader from "./hotelHeader/HotelHeader";

interface HotelListProps {
  hotelsData: HotelInformation[];
}

const HotelList = ({ hotelsData }: HotelListProps) => {
  const [hotels, setHotels] = useState(hotelsData);

  const handleSort = (sortedHotels: HotelInformation[]) => {
    setHotels(sortedHotels);
  };

  return (
    <>
      <HotelHeader hotels={hotelsData} onSort={handleSort} />
      <div className={styles.container}>
        {hotels.map((hotels) => (
          <HotelCard key={hotels.id} hotel={hotels} />
        ))}
      </div>
    </>
  );
};

export default HotelList;
