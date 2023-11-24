"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import styles from "./Reusable.module.scss";
type ColsObj = {
   title: string;
   sub: string;
   num: number;
};
type ColsProps = Array<ColsObj>;

function NumTitles({ cols }: { cols: ColsProps }) {
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
export default NumTitles;
