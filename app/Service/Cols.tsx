"use client";

import { useEffect, useState } from "react";
import styles from "./Service.module.scss";
import { useInView } from "react-intersection-observer";

type ColsProps = {
   title: string;
   sub: string;
};

function Cols({ cols }: { cols: Array<ColsProps> }) {
   const [isInView, setIsView] = useState<boolean>(false);
   const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: true,
   });
   useEffect(() => {
      setIsView(inView);
   }, [inView]);
   return (
      <div className={styles.cols}>
         <h2 className={styles.cols__title}>Долгосрочная гарантия и надежная поддержка</h2>
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
      </div>
   );
}
export default Cols;
