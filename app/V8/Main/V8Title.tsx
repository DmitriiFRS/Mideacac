"use client";

import { useSelector } from "react-redux";
import styles from "../V8.module.scss";
import { RootState } from "@/app/Redux/store";

function MagboostTitle() {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
      <div className={styles.titles__mainBody}>
         <div className={styles.titles__main}>
            <div className={styles.titles__elem}>
               Мы не ограничиваемся просто созданием продукта. Мы стремимся к
               <div style={{ opacity: scrollPosition > 21 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  Мы не ограничиваемся просто созданием продукта. Мы стремимся к
               </div>
            </div>
            <div className={styles.titles__elem}>
               совершенству, и наша
               <div style={{ opacity: scrollPosition > 22 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  совершенству, и наша
               </div>
            </div>
            <div className={styles.titles__elem}>
               новейшая серия - Midea V8 VRF - это воплощение этой философии.
               <div style={{ opacity: scrollPosition > 23 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  новейшая серия - Midea V8 VRF - это воплощение этой философии.
               </div>
            </div>
         </div>
      </div>
   );
}
export default MagboostTitle;
