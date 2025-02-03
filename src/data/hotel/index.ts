import { HotelInformation } from "@/types";

export const getHotelData: () => Promise<HotelInformation[]> = async () => {
  try {
    const fileContents = await fetch("http://localhost:3000/data.json");
    const hotelData = await fileContents.json();

    return hotelData.results;
  } catch (error) {
    console.error("Error reading or parsing data.json:", error);
    throw error;
  }
};
