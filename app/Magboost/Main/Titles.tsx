"use client";

import { useInView } from "react-intersection-observer";
import styles from "../Magboost.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
type ColsObj = {
   title: string;
   sub: string;
   num: number;
};
type ColsProps = Array<ColsObj>;

function Titles({ cols }: { cols: ColsProps }) {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
   });
   const [isInView, setIsView] = useState(false);
   useEffect(() => {
      setIsView(inView);
   }, [inView]);
   console.log(scrollPosition);
   return (
      <div className={styles.titles}>
         <div className={styles.titles__mainBody}>
            <div className={styles.titles__main}>
               <div className={styles.titles__elem}>
                  Midea MagBoost - это прорыв в системах охлаждения,
                  <div style={{ opacity: scrollPosition > 17 ? 1 : 0 }} className={styles.titles__elemFiller}>
                     Midea MagBoost - это прорыв в системах охлаждения,
                  </div>
               </div>
               <div className={styles.titles__elem}>
                  который навсегда изменит ваши представления о
                  <div style={{ opacity: scrollPosition > 18 ? 1 : 0 }} className={styles.titles__elemFiller}>
                     который навсегда изменит ваши представления о
                  </div>
               </div>
               <div className={styles.titles__elem}>
                  надежности и эффективности
                  <div style={{ opacity: scrollPosition > 19 ? 1 : 0 }} className={styles.titles__elemFiller}>
                     надежности и эффективности
                  </div>
               </div>
            </div>
         </div>

         <div ref={ref} className={`${styles.titles__cols} ${isInView ? styles.titles__cols__active : ""}`}>
            {cols.map((el, index) => {
               return (
                  <li key={index} className={styles.titles__col}>
                     <h4 className={styles.titles__col__title}>{el.title}</h4>
                     <p className={styles.titles__col__sub}>{el.sub}</p>
                     <span className={styles.titles__col__num}>{el.num}</span>
                  </li>
               );
            })}
         </div>
      </div>
   );
}
export default Titles;
