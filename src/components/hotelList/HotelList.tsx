"use client";

import React from "react";
import { HotelInformation } from "@/types";
import HotelCard from "./hotelCard/HotelCard";
import styles from "./HotelList.module.css";

interface HotelListProps {
  hotels: HotelInformation[];
}

const HotelList = ({ hotels }: HotelListProps) => {
  return (
    <div className={styles.container}>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
