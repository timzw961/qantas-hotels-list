"use client";

import React, { useState } from "react";
import { HotelInformation } from "@/types";
import HotelHeader from "@/components/hotelList/hotelHeader/HotelHeader";
import HotelList from "@/components/hotelList/HotelList";

const HotelsPage = ({ hotelsData }: { hotelsData: HotelInformation[] }) => {
  const [hotels, setHotels] = useState(hotelsData);

  const handleSort = (sortedHotels: HotelInformation[]) => {
    setHotels(sortedHotels);
  };

  return (
    <div>
      <HotelHeader hotels={hotelsData} onSort={handleSort} />
      <HotelList hotels={hotels} />
    </div>
  );
};

export default HotelsPage;
