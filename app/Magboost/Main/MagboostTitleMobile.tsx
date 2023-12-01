"use client";

import { useSelector } from "react-redux";
import styles from "../Magboost.module.scss";
import { RootState } from "@/app/Redux/store";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

/* Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши представления о надежности и эффективности */

function MagboostTitle() {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
      <div className={styles.titles__mainBody}>
         <div className={styles.titles__main}>
            <div className={styles.titles__elem}>
               Midea MagBoost - это прорыв в
               <div
                  className={`${styles.titles__elemFiller} ${
                     scrollPosition > 15.4 ? styles.titles__elemFillerActive : ""
                  }`}
               >
                  Midea MagBoost - это прорыв в
               </div>
            </div>
            <div className={styles.titles__elem}>
               системах охлаждения, который
               <div
                  className={`${styles.titles__elemFiller} ${
                     scrollPosition > 15.6 ? styles.titles__elemFillerActive : ""
                  }`}
               >
                  системах охлаждения, который
               </div>
            </div>
            <div className={styles.titles__elem}>
               навсегда изменит ваши
               <div
                  className={`${styles.titles__elemFiller} ${
                     scrollPosition > 15.8 ? styles.titles__elemFillerActive : ""
                  }`}
               >
                  навсегда изменит ваши
               </div>
            </div>
            <div className={styles.titles__elem}>
               представления о надежности и
               <div
                  className={`${styles.titles__elemFiller} ${
                     scrollPosition > 16 ? styles.titles__elemFillerActive : ""
                  }`}
               >
                  представления о надежности и
               </div>
            </div>
            <div className={styles.titles__elem}>
               эффективности
               <div
                  className={`${styles.titles__elemFiller} ${
                     scrollPosition > 16.2 ? styles.titles__elemFillerActive : ""
                  }`}
               >
                  эффективности
               </div>
            </div>
         </div>
      </div>
   );
}
export default MagboostTitle;
