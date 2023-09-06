"use client"
import { useInView } from 'react-intersection-observer';
import styles from './MagboostV8.module.scss';
import { useEffect, useState } from 'react';
type TitleListTypeProps = {
   description: Array<string>
}
function TitleList({description} : TitleListTypeProps) {
   const {ref, inView} = useInView({
      threshold: [0, 0],
      rootMargin: '20% 0% 0% 0%'
   })
   const [isView, setIsView] = useState<boolean>(false);
   useEffect(() => {
      setIsView(inView);
   }, [inView])
   return (
      <ul ref={ref} className={styles.title__list}>
         <li className={`${styles.title__item} ${styles.title__item__el1} ${isView ? styles.title__item__active : ''}`}>{description[0]}</li>
         <li className={`${styles.title__item} ${styles.title__item__el2} ${isView ? styles.title__item__active : ''}`}>{description[1]}</li>
         <li className={`${styles.title__item} ${styles.title__item__el3} ${isView ? styles.title__item__active : ''}`}>{description[2]}</li>
         <li className={`${styles.title__item} ${styles.title__item__el4} ${isView ? styles.title__item__active : ''}`}>{description[3]}</li>
      </ul>
   )
}
export default TitleList;