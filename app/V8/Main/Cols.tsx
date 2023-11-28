"use client";

import { useInView } from "react-intersection-observer";
import styles from "../V8.module.scss";
import { useEffect, useState } from "react";

type ColsProps = {
   title: string;
   sub: string;
};

function Cols({ cols }: { cols: Array<ColsProps> }) {
   const [isView, setIsView] = useState<boolean>(false);
   const { ref, inView } = useInView({
      threshold: 0.7,
      triggerOnce: true,
   });
   useEffect(() => {
      setIsView(inView);
   }, [inView]);
   return (
      <div className={styles.cols}>
         <h2 className={styles.cols__title}>Удобство проектирования и соответствие требованием заказчика</h2>
         <ul ref={ref} className={styles.cols__list}>
            {cols.map((el, index) => {
               return (
                  <li
                     key={index}
                     className={`${styles.cols__item} ${index > 2 ? styles.cols__item2 : ""} ${
                        isView ? styles.cols__item__active : ""
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
