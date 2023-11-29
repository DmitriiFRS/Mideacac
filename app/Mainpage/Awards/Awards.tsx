"use client";
import styles from "./Awards.module.scss";
import Image from "next/image";
import ahri from "../../../public/icons/AwardsIcons/ahri.svg";
import iso from "../../../public/icons/AwardsIcons/iso.svg";
import eurovent from "../../../public/icons/AwardsIcons/eurovent.svg";
import gold2022 from "../../../public/icons/AwardsIcons/gold.svg";
import "../../globals.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Awards() {
   const width390 = useMediaQuery("(max-width: 390px)");
   return (
      <section className={styles.awards}>
         <h2 className={styles.awards__title}>Награды и сертификаты</h2>
         <div className={`${styles.awards__iconsBody} ${"container"}`}>
            <Image src={ahri} alt="logo" height={width390 ? 70 : 91} width={width390 ? 135 : 170} />
            <Image src={iso} alt="logo" height={width390 ? 111 : 141} width={width390 ? 135 : 170} />
            <Image src={eurovent} alt="logo" height={width390 ? 111 : 141} width={width390 ? 111 : 135} />
            <Image src={gold2022} alt="logo" height={width390 ? 105 : 149} width={width390 ? 111 : 141} />
         </div>
      </section>
   );
}
export default Awards;
