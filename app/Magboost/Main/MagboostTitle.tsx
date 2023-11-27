"use client";

import { useSelector } from "react-redux";
import styles from "../Magboost.module.scss";
import { RootState } from "@/app/Redux/store";

function MagboostTitle() {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
      <div className={styles.titles__mainBody}>
         <div className={styles.titles__main}>
            <div className={styles.titles__elem}>
               Midea MagBoost - это прорыв в системах охлаждения,
               <div style={{ opacity: scrollPosition > 19 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  Midea MagBoost - это прорыв в системах охлаждения,
               </div>
            </div>
            <div className={styles.titles__elem}>
               который навсегда изменит ваши представления о
               <div style={{ opacity: scrollPosition > 20 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  который навсегда изменит ваши представления о
               </div>
            </div>
            <div className={styles.titles__elem}>
               надежности и эффективности
               <div style={{ opacity: scrollPosition > 21 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  надежности и эффективности
               </div>
            </div>
         </div>
      </div>
   );
}
export default MagboostTitle;
