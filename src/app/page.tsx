import Image from "next/image";
import styles from "./page.module.css";
import { getHotelData } from "@/data/hotel";
import HotelPage from "../app/hotels/HotelsPage";
import QantasLogo from "../../public/qantas-logo.png";

export const dynamic = "force-dynamic";

const Page = async () => {
  const hotelData = await getHotelData();

  return (
    <div className={styles.page}>
      <Image src={QantasLogo} alt="Qantas Logo" />

      <HotelPage hotelsData={hotelData} />
    </div>
  );
};

export default Page;
