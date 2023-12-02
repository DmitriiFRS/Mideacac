"use client";

import { useInView } from "react-intersection-observer";
import styles from "./Service.module.scss";
import { useEffect, useState } from "react";
import { ColsProps } from "./Cols";
function ColsList({ cols }: { cols: Array<ColsProps> }) {
   const [isInView, setisView] = useState<boolean>(false);
   const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
   });
   useEffect(() => {
      setisView(inView);
   }, [inView]);
   return (
      <ul ref={ref} className={styles.cols__list}>
         {cols.map((el, index) => {
            return (
               <li
                  key={index}
                  className={`${styles.cols__item} ${index > 2 ? styles.cols__item2 : ""} ${
                     isInView ? styles.cols__item__active : ""
                  }`}
               >
                  <p className={styles.cols__item__title}>{el.title}</p>
                  <p className={styles.cols__item__sub}>{el.sub}</p>
               </li>
            );
         })}
      </ul>
   );
}
export default ColsList;
