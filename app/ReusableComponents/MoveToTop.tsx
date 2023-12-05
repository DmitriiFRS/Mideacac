"use client";

import styles from "./Reusable.module.scss";
import arrow from "../../public/icons/ArrowToTop.svg";
import Image from "next/image";
type MoveToTopProps = {
   scrollRate: number | null;
   scrollParams: {
      top: number;
   };
   scrollTrigger: number;
};
function MoveToTop({ scrollRate, scrollParams, scrollTrigger }: MoveToTopProps) {
   function toTop() {
      window.scrollTo(scrollParams);
   }
   return (
      scrollRate && (
         <button
            onClick={toTop}
            className={`${styles.toTop} ${scrollRate > scrollTrigger ? styles.toTop__active : ""}`}
         >
            <div className={styles.arrowImgBody}>
               <Image src={arrow} alt="arrow" fill />
            </div>
         </button>
      )
   );
}
export default MoveToTop;
