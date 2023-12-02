"use client";

import { useInView } from "react-intersection-observer";
import styles from "./Engineering.module.scss";
import { useEffect, useState } from "react";
const cols = [
   {
      title: "Теплотехнические расчеты помещений",
      sub: "Расчет теплопотерь и теплопоступлений для определения необходимой мощности системы",
   },
   {
      title: "Гидравлический расчет системы",
      sub: "Подбор диаметров воздуховодов, диффузоров, расчет потерь давления",
   },
   {
      title: "Аэродинамический расчет",
      sub: "Расчет скоростей и расходов воздуха",
   },
   {
      title: "Проектирование систем",
      sub: "Чертежи планировки систем вентиляции и кондиционирования",
   },
   {
      title: "Подбор оборудования",
      sub: "Подбор оптимальных моделей вентиляционного",
   },
   {
      title: "Технические детали",
      sub: "Спецификация материалов и оборудования со всеми техническими характеристиками",
   },
];
function ColsList() {
   const [isInView, setIsView] = useState<boolean>(false);
   const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
   });
   useEffect(() => {
      setIsView(inView);
   }, [inView]);
   return (
      <ul ref={ref} className={styles.cols__body}>
         {cols.map((el, index) => {
            return (
               <li key={index} className={`${styles.cols__item} ${isInView ? styles.cols__item__active : ""}`}>
                  <p className={styles.cols__title}>{el.title}</p>
                  <p className={styles.cols__sub}>{el.sub}</p>
               </li>
            );
         })}
      </ul>
   );
}
export default ColsList;
