"use client";

import { useInView } from "react-intersection-observer";
import styles from "../Magboost.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
const cols = [
   {
      title: "Долговечность",
      sub: "Инновационные технологии и отсутствие трения увеличивают срок службы оборудования и сокращают затраты на обслуживание и ремонт.",
      num: 1,
   },
   {
      title: "Эффективность",
      sub: "Высокая энергоэффективность снижает потребление энергии, позволяя экономить средства.",
      num: 2,
   },
   {
      title: "Компактность",
      sub: "Усовершенствованная конструкция чиллеров и теплообменника обеспечивает их удобное и компактное размещение.",
      num: 3,
   },
   {
      title: "Минимальный шум",
      sub: "Благодаря электромагнитной технологии снижается уровень шума. Работу оборудования становится комфортной и приемлемой для окружающей среды.",
      num: 4,
   },
];

function Titles() {
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
