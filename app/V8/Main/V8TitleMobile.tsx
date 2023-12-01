"use client";

import { useSelector } from "react-redux";
import styles from "../V8.module.scss";
import { RootState } from "@/app/Redux/store";

/*  */

function V8TitleMobile() {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
      <div className={styles.titles__mainBody}>
         <div className={styles.titles__main}>
            <div className={styles.titles__elem}>
               Мы не ограничиваемся просто
               <div style={{ opacity: scrollPosition > 16.7 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  Мы не ограничиваемся просто
               </div>
            </div>
            <div className={styles.titles__elem}>
               созданием продукта. Мы
               <div style={{ opacity: scrollPosition > 17 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  созданием продукта. Мы
               </div>
            </div>
            <div className={styles.titles__elem}>
               стремимся к совершенству, и
               <div style={{ opacity: scrollPosition > 17.3 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  стремимся к совершенству, и
               </div>
            </div>
            <div className={styles.titles__elem}>
               наша новейшая серия - Midea V8
               <div style={{ opacity: scrollPosition > 17.6 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  наша новейшая серия - Midea V8
               </div>
            </div>
            <div className={styles.titles__elem}>
               VRF - это воплощение этой
               <div style={{ opacity: scrollPosition > 17.9 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  VRF - это воплощение этой
               </div>
            </div>
            <div className={styles.titles__elem}>
               философии.
               <div style={{ opacity: scrollPosition > 18.2 ? 1 : 0 }} className={styles.titles__elemFiller}>
                  философии.
               </div>
            </div>
         </div>
      </div>
   );
}
export default V8TitleMobile;
